"use client";//useInputArrayのために必要？
import { Main } from "@/app/components/Main";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import styles from "@/app/page.module.css";
import { useCounter } from "@/app/hooks/useCounter";
import { useInputArray } from "@/app/hooks/useInputArray";
import { useBgLightBlue } from "@/app/hooks/useBgLightBlue";

export default function About() {
  const { doubleCounter, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <div className={styles.container}>
      <Header/>

      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>
        {isShow ? "非表示" : "表示させる"}
      </button>
      {isShow ? <h1>{doubleCounter}</h1> : null}

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>ついか</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="about" />
      <Footer />
    </div>
  );
}
