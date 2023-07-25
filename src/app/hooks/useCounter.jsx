import { useCallback, useState } from "react";

export const useCounter = () => {
  //自作のカスタムhooksではuseから関数名が始まる
  const [count, setCount] = useState(1); //useStateの返り値の配列の[0]にfoo,[1]にsetFooが入っている（分割代入）00000
  const [isShow, setisShow] = useState(true);
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
  return { count, isShow, handleClick, handleDisplay };
};