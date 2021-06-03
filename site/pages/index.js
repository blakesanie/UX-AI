import Head from "next/head";
import UXAI from "ux-ai";
import { useEffect, useState } from "react";
import { CopyBlock, dracula, anOldHope, railscast } from "react-code-blocks";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";
const fs = require("fs");
const showdown = require("showdown");
let converter = new showdown.Converter();
converter.setFlavor("github");
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      className="rounded"
      title={`${value}${`${value}`.length == 1 ? ".0" : ""}s`}
    >
      {children}
    </Tooltip>
  );
}

let uxai;

export async function getStaticProps(context) {
  console.log("get props");
  let data;
  try {
    data = fs.readFileSync("../README.md", "utf8");
  } catch (err) {
    console.error(err);
  }
  let elements = [];
  let current = {
    type: "html",
    text: "",
  };
  for (let line of data.split(/\r?\n/)) {
    if (line) {
      if (line.includes("```")) {
        // code block start
        if (current.type == "html") {
          elements.push(current);
          current = {
            type: "codeblock",
            text: "",
            language: line.substring(3) || "text",
          };
        } else {
          current.text = current.text.substring(0, current.text.length - 1); // ignore last newline
          elements.push(current);
          current = {
            type: "html",
            text: "",
          };
        }
      } else if (line.includes("## Demo")) {
        // demo start
        current.text += converter.makeHtml(line);
        elements.push(current);
        current = {
          type: "demo",
        };
      } else {
        // other
        if (current.type == "demo" && line.includes("##")) {
          elements.push(current);
          current = {
            type: "html",
            text: "",
          };
        }
        if (current.type == "codeblock") {
          current.text += line + "\n";
        } else if (current.type == "html") {
          let lineHtml = converter.makeHtml(line);
          if (lineHtml.includes(`<p><`) && !lineHtml.includes(`<p><em>`)) {
            // get ride of useless wrapping p tag
            // console.log("shortening line");
            lineHtml = lineHtml.substring(3, lineHtml.length - 4);
          }
          current.text += lineHtml;
          if (line.includes(`id="headline"`)) {
            current.text += `<h3>Created by <a href="https://blakesanie.com">Blake Sanie</a></h3>`;
          }
        }
      }
    }
  }
  elements.push(current);
  return {
    props: { elements }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const [uxaiRunning, setUxaiRunning] = useState(false);
  const [inferenceInterval, setInferenceInterval] = useState(5);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const showSnack = (message) => {
    setSnackbarOpen(false);
    setTimeout(() => {
      setSnackbarOpen(true);
      setSnackbarMessage(message);
    }, 1);
  };

  // console.log(props.elements);
  useEffect(() => {
    document.addEventListener("copy", function (e) {
      showSnack(`Successfully copied text`);
    });
  }, []);
  // let elements = [];
  // for (let i = 0; i < 1000; i++) {
  //   elements.push(<p key={i}>Test</p>);
  // }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js">
          {" "}
        </script>
      </Head>
      {props.elements.map((element, i) => {
        if (element.type == "codeblock") {
          // console.log(element.language);
          // return <p>codeblock</p>;
          return (
            <div className="codeBlock  rounded" key={i}>
              <CopyBlock
                codeBlock={true}
                style={{}}
                key={i}
                text={element.text}
                language={element.language.replace("html", "markup")}
                showLineNumbers={false}
                wrapLines
                theme={railscast}
              />
            </div>
          );
        }
        if (element.type == "demo") {
          return (
            <div className="demo" key={i}>
              <p>
                UX-AI is ready to run on this page! Activate UX-AI with the
                button below, or deactivate to adjust the inference interval.
                Then, try varying your behavior and observe the snackbar that
                appears in the lower-right corner.
              </p>
              <p className="label">Make inference every:</p>
              <Slider
                value={inferenceInterval}
                step={0.1}
                ValueLabelComponent={ValueLabelComponent}
                // marks
                min={3}
                max={10}
                style={{
                  opacity: uxaiRunning ? 0.2 : 1,
                  pointerEvents: uxaiRunning ? "none" : "auto",
                }}
                valueLabelDisplay="on"
                onChange={(event, value) => {
                  setInferenceInterval(value);
                }}
              />
              <Button
                variant="contained"
                size="large"
                className={
                  "rounded " + (uxaiRunning ? "deactivate" : "activate")
                }
                onClick={() => {
                  if (uxaiRunning) {
                    uxai.deactivate();
                    uxai = undefined;
                    showSnack(`UX-AI Deactivated`);
                  } else {
                    showSnack(`UX-AI Activated`);
                    uxai = new UXAI({
                      inferenceInterval: inferenceInterval * 1000,
                      inferenceCallback: (history) => {
                        showSnack(
                          `Latest behavior status: "${
                            history[history.length - 1]
                          }"`
                        );
                      },
                    });
                  }
                  setUxaiRunning(!uxaiRunning);
                }}
              >
                {`${uxaiRunning ? "Deactivate" : "Activate"} UX-AI`}
              </Button>
              <p className="label">Resulting object instantiation:</p>
              <div className="codeBlock rounded">
                <CopyBlock
                  text={`const uxai = new UXAI({\n\tinferenceInterval: ${
                    inferenceInterval * 1000
                  },\n\tinferenceCallback: history => {\n\t\t// do something\n\t}\n})`}
                  language="javascript"
                  showLineNumbers={false}
                  wrapLines
                  theme={railscast}
                />
              </div>
            </div>
          );
        }
        // console.log(element.text)
        let component = htmlToReactParser.parse(element.text);
        if (!element.text.includes("<ul")) {
          return <div key={i}>{component}</div>;
        }
        return component;
        // <div key={i} dangerouslySetInnerHTML={{ __html: element.text }} />
      })}
      <Snackbar
        open={snackbarOpen}
        onClose={() => {
          setSnackbarOpen(false);
        }}
        autoHideDuration={2500}
        message={snackbarMessage}
        key={snackbarMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
}
