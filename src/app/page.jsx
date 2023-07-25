"use client"; //これがないとpropsで関数を渡せない
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";
import { Header } from "@/app/components/Header";
import styles from "./page.module.css";
import { useCounter } from "@/app/hooks/useCounter";
import { useInputArray } from "@/app/hooks/useInputArray";
import { useBgLightBlue } from "@/app/hooks/useBgLightBlue";




export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();//useHogeはreactの関数であるカスタムhooks
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <div className={styles.container}>
      <title>this is title</title>
      <link rel="icon" href="./favicon.ico" />
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>
        {isShow ? "非表示" : "表示させる"}
      </button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>ついか</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
