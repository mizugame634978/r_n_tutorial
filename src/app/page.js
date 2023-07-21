//"use client"; //これがないとpropsで関数を渡せない
import { Footer } from "../../components/Footer";
import { Main } from "../../components/Main";
import styles from "./page.module.css";
import Head from "next/head";
import { NextHead } from 'next/head'; // NextHeadをインポート
export default function Home() {
  return (
    <div className={styles.container}>

        <title>this is title</title>
        <link rel="icon" href="./favicon.ico"/>

      <Main page="index" />
      <Footer/>
    </div>
  );
}
