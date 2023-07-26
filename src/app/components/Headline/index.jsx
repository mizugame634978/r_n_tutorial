import classes from "./Headline.module.css";
import Image from "next/image";

export function Headline(props) {
  //propsでタイトルを渡す,propsはプロパティの略

  return (
    <div>
      <button onClick={props.handleReduce}>減らすhead</button>

      <h1 className={classes.title}>{props.page} page</h1>
      <p className={classes.description}>
        アイテムの数は {props.children}個です
      </p>
{/* ここにボタンをおいたら霧のエフェクトと被ったんか知らんけど押せなかった */}

    </div>
  );
}
