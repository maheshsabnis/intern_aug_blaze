// Next.js provides standard components for
// 1. Headers, 2. Images
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// the  'styles' is an exported object for all classes in
// css file
import styles from "../styles/Home.module.css";
import Layout from "./components/layout";

import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [x, setX] = useState(0);
  const router = useRouter();

  const click=()=>{
    router.push({
       pathname: '/components/firstcomponent',
       query:{value:x}
    });

  };

  return (
    <div className={styles.container}>
      <Layout></Layout>
      <h1>The Index Page</h1>
      <input
        type="text"
        value={x}
        onChange={(evt) => setX(parseInt(evt.target.value))}
      />
      <hr/>
      <input type="button" onClick={click} value="Send"/>
    </div>
  );
}
