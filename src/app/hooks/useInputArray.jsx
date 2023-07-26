
import { useCallback, useEffect, useState } from "react";

export const useInputArray = () => {
  //カスタムhooks
  const [text, setText] = useState("");

  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("５文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        //itemで配列を回して、itemとtextが等しかった場合にtrue
        alert("同じ要素があります。");
        return prevArray;
      }
      const newArray = [...prevArray, text]; //スプレッド構文（非破壊的メソッド）,prevArrayの最後尾を拡張して、それに1を入れた
      return newArray;
    }); //前回のreturnを使うので関数で書いた
    /*titel:配列イミュータブル
      const foo = [];
      const bar = foo;
      bar.push(1);
      とするとbar=fooではbarにfooをコピーしているわけではなく、ポインタ的なのを渡しているだけなので
      fooとbarどちらも[1]となる。
      これを回避するためには
      const bar = [...foo];とするとfooをコピーしたbarができる
    end*/
  }, [text]); //useHogeの第2引数には変更して画面に反映させる変数だけを入れれば良い？
  return { text, array, handleChange, handleAdd };
};
