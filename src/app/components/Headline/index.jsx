import classes from "./Headline.module.css";
import Image from "next/image";

export function Headline(props) {
  //propsでタイトルを渡す,propsはプロパティの略
  return (
    <div>
      <h1 className={classes.title}>{props.page} page</h1>
      <p className={classes.description}>
        get started by editing {props.children}

      </p>
    </div>
  );
}
