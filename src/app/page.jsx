"use client"; //これがないとpropsで関数を渡せない
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";
import { Header } from "@/app/components/Header";
import styles from "./page.module.css";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1); //useStateの返り値の配列の[0]にfoo,[1]にsetFooが入っている（分割代入）00000

  const [text, setText] = useState("");
  const [isShow, setisShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    //useCallbackをつかうことで再読み込みの際に関数が再レンダリングされなくなる

    if (count < 10) {
      setCount((prevCount) => prevCount + 1); //アロー関数(１行),前回のprevCount+1(返り値)の値をみて処理をするので、countがずっと１でもここは増え続ける
      //引数countを受け取り、count+1を返す
      //またsetCountはuseStateで生み出された関数なので自動的に引数には勝手にcountが入る
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setisShow((prevIsShow) => !prevIsShow); //not(!)だからtrueだとfalseになる？
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray)=>{
      if(prevArray.some(item =>item === text)){//itemで配列を回して、itemとtextが等しかった場合にtrue
        alert("同じ要素があります。");
        return prevArray;
      }
      const newArray = [...prevArray,text];//スプレッド構文（非破壊的メソッド）,prevArrayの最後尾を拡張して、それに1を入れた
      return newArray;
    });//前回のreturnを使うので関数で書いた
    /*titel:配列イミュータブル
      const foo = [];
      const bar = foo;
      bar.push(1);
      とするとbar=fooではbarにfooをコピーしているわけではなく、ポインタ的なのを渡しているだけなので
      fooとbarどちらも[1]となる。
      これを回避するためには
      const bar = [...foo];とするとfooをコピーしたbarができる
    end*/
  },[text]);//useHogeの第2引数には変更して画面に反映させる変数だけを入れれば良い？

  useEffect(() => {//画面を読み込んだときに色を変えたかった
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

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
