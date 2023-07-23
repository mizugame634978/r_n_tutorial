//"use client"; //これがないとpropsで関数を渡せない
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";
import { Header } from "@/app/components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (

    <div className={styles.container}>
        <title>this is title</title>
        <link rel="icon" href="./favicon.ico"/>
        <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
