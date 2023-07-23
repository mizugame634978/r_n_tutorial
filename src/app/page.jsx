"use client"; //これがないとpropsで関数を渡せない
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";
import { Header } from "@/app/components/Header";
import styles from "./page.module.css";
import {  useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count,setCount]=useState(1);//useStateの返り値の配列の[0]にfoo,[1]にsetFooが入っている（分割代入）

  const handleClick =useCallback(()=>{//useCallbackをつかうことで再読み込みの際に関数が再レンダリングされなくなる

    if(count < 10){
      setCount(hiki => hiki+1);//アロー関数(１行),前回のhiki+1(返り値)の値をみて処理をするので、countがずっと１でもここは増え続ける
      //引数countを受け取り、count+1を返す
      //またsetCountはuseStateで生み出された関数なので自動的に引数には勝手にcountが入る
    }
  },[count]);

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
