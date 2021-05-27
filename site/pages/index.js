import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UXAI from "ux-ai";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const uxai = new UXAI({});
  }, []);
  let elements = [];
  for (let i = 0; i < 1000; i++) {
    elements.push(<p key={i}>Test</p>);
  }
  return (
    <>
      <h1>Header</h1>
      {elements}
    </>
  );
}
