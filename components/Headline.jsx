import styles from "../src/app/page.module.css";
import Image from "next/image";

export function Headline(props) {
  //propsでタイトルを渡す,propsはプロパティの略
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <p className={styles.description}>
        get started by editing {props.children}

      </p>
    </div>
  );
}
