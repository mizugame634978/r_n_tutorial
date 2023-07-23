"use client"; //これがないとpropsで関数を渡せない
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";
import { Header } from "@/app/components/Header";
import styles from "./page.module.css";
import {  useEffect, useState } from "react";

export default function Home() {
  const [count,setCount]=useState(1);//useStateの返り値の配列の[0]にfoo,[1]にsetFooが入っている（分割代入）
  //const array=useState(1);
  //const count = array[0];
  //const setCount = array[1];

  const handleClick =(e)=>{//useCallbackをつかうことで再読み込みの際に関数が再レンダリングされなくなる
    setCount(count => count+1);//アロー関数(１行)
    // setCount(function(count){
    //   return count + 1;
    // });
    setCount(count => count+1);

  };

  useEffect(()=>{
    document.body.style.backgroundColor="lightblue";
    return()=>{
      document.body.style.backgroundColor="";
    }
  },[]);

  return (


    <div className={styles.container}>
        <title>this is title</title>
        <link rel="icon" href="./favicon.ico"/>
        <Header />
        <h1>{count}</h1>
        <button onClick={handleClick}>
          ボタン
        </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
