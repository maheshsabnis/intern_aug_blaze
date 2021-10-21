import React, { useState,useEffect } from "react";
import styles from "./../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from './layout';
const FirstComponent = (props) => {
  const [x, setX] = useState(0);
  const clicked = () => {
    alert(x);
  };

  const router  =useRouter();

  useEffect(()=>{
      console.log(`Query ${router.query.value}`);
      setX(router.query.value);
  },[]);


  return (
    <div className={styles.container}>
          <Layout></Layout>
 
      <h1>The FirstComponent</h1>
      <input
        type="text"
        value={x}
        onChange={(evt) => setX(parseInt(evt.target.value))}
      />
      <button onClick={clicked}>Click Me</button>
      <hr />
      <div>x = {x}</div>
    </div>
  );
};

export default FirstComponent;
