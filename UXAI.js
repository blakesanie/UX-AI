class UXAI {
  constructor({ inferenceInterval = 5000, callback = undefined }) {
    this.snapshotInterval = 200;
    this.inferenceInterval = inferenceInterval;
    this.callback = callback;
    this.snapshots = [];
    this.currentSnapshot = {};
    this.mouseOverWindow = true;
    this.mouseClientX;
    this.mouseClientY;
    this.eventListeners = [];
    this.addEventListener("mousemove", function (e) {
      this.mouseClientX = e.clientX;
      this.mouseClientY = e.clientY;
    });
    this.timeStampOffset = 0;
    this.timeLeft = 0;

    this.startListening();
    this.startCaptureLoop();
    this.startInferenceLoop();
  }

  addEventListener(event, func) {
    this.eventListeners.push({
      event,
      function: func.bind(this),
    });
    document.addEventListener(event, func);
  }

  deactivate() {
    for (let i = 0; i < this.eventListeners.length; i++) {
      document.removeEventListener(
        this.eventListeners[i].event,
        this.eventListeners[i].function
      );
    }
    this.stopCaptureLoop();
    this.startInferenceLoop();
  }

  generateNewSnapshot() {
    return Object.assign(
      {},
      {
        alpha: [],
        space: [],
        number: [],
        enter: [],
        tab: [],
        arrow: [],
        back: [],
        symbol: [],
        scrolls: [],
        mousemoves: [],
        clicks: [],
        mouseleaves: [],
        mouseenters: [],
        interval: this.snapshotInterval,
        timeGone: 0,
        docLength: Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        ),
        width: window.innerWidth,
        height: window.innerHeight,
        scrollY: window.scrollY,
        mouseX: this.mouseClientX,
        mouseY: this.mouseClientY,
        mouseOverWindow: this.mouseOverWindow,
      }
    );
  }

  setTimeStampOffset(e) {
    if (this.timeStampOffset == 0) {
      this.timeStampOffset = e.timeStamp;
    }
  }

  handleClick(e) {
    if (this.captureLoop) {
      this.setTimeStampOffset(e);
      const timeStamp = e.timeStamp - this.timeStampOffset;
      this.currentSnapshot.clicks.push({
        clientX: e.clientX,
        clientY: e.clientY,
        timeStamp: timeStamp,
      });
    }
  }

  handleScroll(e) {
    if (this.captureLoop) {
      this.setTimeStampOffset(e);
      const timeStamp = e.timeStamp - this.timeStampOffset;
      this.currentSnapshot.scrolls.push({
        position: window.scrollY,
        timeStamp: timeStamp,
      });
    }
  }

  handleKeydown(e) {
    if (this.captureLoop) {
      this.setTimeStampOffset(e);
      let { key } = e;
      const timeStamp = e.timeStamp - this.timeStampOffset;
      // checkForInactivity();
      if (key.match(/[a-z]/i)) {
        // alphabet
        this.currentSnapshot.alpha.push(timeStamp);
      } else if (key == " ") {
        // space
        this.currentSnapshot.space.push(timeStamp);
      } else if (key >= "0" && key <= "9") {
        // number
        this.currentSnapshot.number.push(timeStamp);
      } else if (key == "Enter") {
        // enter
        this.currentSnapshot.enter.push(timeStamp);
      } else if (key == "Tab") {
        // tab
        this.currentSnapshot.tab.push(timeStamp);
      } else if (e.keyCode >= 37 && e.keyCode <= 40) {
        // arrow key
        this.currentSnapshot.arrow.push(timeStamp);
      } else if (key == "Shift" || key == "CapsLock") {
        // caps
      } else if (key == "Control" || key == "Alt" || key == "Meta") {
        // control
      } else if (key == "Backspace") {
        // backspace
        this.currentSnapshot.back.push(timeStamp);
      } else {
        // SYMBOl
        this.currentSnapshot.symbol.push(timeStamp);
      }
    }
  }

  handleMousemove(e) {
    if (this.captureLoop) {
      this.setTimeStampOffset(e);
      const timeStamp = e.timeStamp - this.timeStampOffset;
      this.currentSnapshot.mousemoves.push({
        clientX: e.clientX,
        clientY: e.clientY,
        timeStamp: timeStamp,
      });
    }
  }

  handleMouseleave(e) {
    this.mouseOverWindow = false;
    if (this.captureLoop) {
      this.setTimeStampOffset(e);
      const timeStamp = e.timeStamp - this.timeStampOffset;
      this.currentSnapshot.mouseleaves.push({
        timeStamp: timeStamp,
      });
    }
  }

  handleMouseenter(e) {
    this.mouseOverWindow = true;
    if (this.captureLoop) {
      this.setTimeStampOffset(e);
      const timeStamp = e.timeStamp - this.timeStampOffset;
      this.currentSnapshot.mouseenters.push({
        timeStamp: timeStamp,
      });
    }
  }

  handleVisibilityChange(e) {
    if (this.captureLoop) {
      this.setTimeStampOffset(e);
      if (document.hidden) {
        clearInterval(this.captureLoop);
        this.enqueueSnapshot(this.currentSnapshot);
        this.currentSnapshot = this.generateNewSnapshot();
        this.timeLeft = new Date();
      } else {
        const timeGone = new Date() - this.timeLeft;
        this.currentSnapshot = this.generateNewSnapshot();
        this.currentSnapshot.timeGone = timeGone;
        this.startCaptureLoop();
      }
    }
  }

  startListening() {
    this.addEventListener("keydown", this.handleKeydown.bind(this));
    this.addEventListener("click", this.handleClick.bind(this));
    this.addEventListener("scroll", this.handleScroll.bind(this));
    this.addEventListener("mouseenter", this.handleMouseenter.bind(this));
    this.addEventListener("mouseleave", this.handleMouseleave.bind(this));
    this.addEventListener("mousemove", this.handleMousemove.bind(this));
    this.addEventListener(
      "visibilityChange",
      this.handleVisibilityChange.bind(this)
    );
  }

  enqueueSnapshot(snapshot) {
    console.log(snapshot, this.encodeSnapshot(snapshot));
    this.snapshots.push(this.encodeSnapshot(snapshot));
  }

  startCaptureLoop() {
    this.captureFunction();
    this.captureLoop = setInterval(
      this.captureFunction.bind(this),
      this.snapshotInterval
    );
  }

  endLoop() {
    clearInterval(this.captureLoop);
    this.captureLoop = undefined;
  }

  captureFunction() {
    if (Object.keys(this.currentSnapshot).length > 0) {
      this.enqueueSnapshot(this.currentSnapshot);
      //   console.log(this.snapshots);
    }
    this.currentSnapshot = this.generateNewSnapshot();
  }

  encodeSnapshot(snapshot) {
    let out = [];
    out.push(snapshot.height);
    out.push(snapshot.width);
    out.push(snapshot.docLength);

    for (const key of [
      "alpha",
      "arrow",
      "back",
      "enter",
      "space",
      "symbol",
      "tab",
      "number",
    ]) {
      out.push(snapshot[key].length);
    }

    function weaveArrays(l1, l2) {
      let out = [];
      for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
        if (i < l1.length) {
          out.push(l1[i]);
        }
        if (i < l2.length) {
          out.push(l2[i]);
        }
      }
      return out;
    }

    out.push(snapshot.mouseleaves.length);
    out.push(snapshot.mouseenters.length);
    out.push(snapshot.mouseOverWindow ? 1 : 0);

    function distance(x1, x2, y1, y2) {
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

    let netMouseMovement = 0;
    let totalMouseMovement = 0;
    let avgMouseX = 0;
    let avgMouseY = 0;
    if (snapshot.mouseX) {
      avgMouseX = snapshot.mouseX;
      avgMouseY = snapshot.mouseY;
    } else if (snapshot.mousemoves.length > 0) {
      avgMouseX = snapshot.mousemoves[0].clientX;
      avgMouseY = snapshot.mousemoves[0].clientY;
    }

    if (snapshot.mousemoves.length > 0) {
      let prevMouseX = avgMouseX;
      let prevMouseY = avgMouseY;
      let finalX = snapshot.mousemoves[snapshot.mousemoves.length - 1].clientX;
      let finalY = snapshot.mousemoves[snapshot.mousemoves.length - 1].clientY;
      netMouseMovement = distance(prevMouseX, prevMouseY, finalX, finalY);
      avgMouseX += finalX;
      avgMouseX /= 2;
      avgMouseY += finalY;
      avgMouseY /= 2;
      for (const move of snapshot.mousemoves) {
        const currentX = move["clientX"];
        const currentY = move["clientY"];
        totalMouseMovement += distance(
          prevMouseX,
          prevMouseY,
          currentX,
          currentY
        );
        prevMouseX = currentX;
        prevMouseY = currentY;
      }
    }
    out.push(netMouseMovement);
    out.push(totalMouseMovement);
    out.push(avgMouseX);
    out.push(avgMouseY);

    let netScroll = 0;
    let totalScroll = 0;
    let avgScrollPos = snapshot["scrollY"];

    if (snapshot.scrolls > 0) {
      let prevPos = snapshot["scrollY"];
      let finalPos =
        snapshot["scrolls"][snapshot["scrolls"].length - 1]["position"];
      netScroll = finalPos - prevPos;
      avgScrollPos = (prevPos + finalPos) / 2;
      for (const scroll of snapshot["scrolls"]) {
        let currentY = scroll["position"];
        totalScroll += abs(prevPos - currentY);
        prevPos = currentY;
      }
    }
    out.push(netScroll);
    out.push(totalScroll);
    out.push(avgScrollPos);

    out.push(snapshot["timeGone"] / snapshot["interval"]);

    return out;
  }

  startInferenceLoop() {
    this.inferenceLoop = setInterval(
      this.inferenceFunction.bind(this),
      this.inferenceInterval
    );
  }

  inferenceFunction() {
    const window = this.snapshots.slice(
      this.snapshots.length -
        Math.round(this.inferenceInterval / this.snapshotInterval)
    );
    // console.log(window);
  }

  stopInferenceLoop() {
    clearInterval(this.inferenceLoop);
    this.inferenceLoop = undefined;
  }
}

try {
  module.exports = UXAI;
} catch {}
