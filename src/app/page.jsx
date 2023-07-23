"use client"; //これがないとpropsで関数を渡せない
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";
import { Header } from "@/app/components/Header";
import styles from "./page.module.css";
import { useCallback } from "react";

export default function Home() {
  const foo = 1;
  const handleClick =useCallback((e)=>{//useCallbackをつかうことで再読み込みの際に関数が再レンダリングされなくなる
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  },[]);
  return (


    <div className={styles.container}>
        <title>this is title</title>
        <link rel="icon" href="./favicon.ico"/>
        <Header />
        <a
          href="/hoge"
          onClick={handleClick}
        >
          ボタン
        </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
