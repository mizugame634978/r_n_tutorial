import classes from './Header.module.css'
import Link from "next/link";
export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.anchor}>
        {/* <a>index</a> next12ではaタグがいるらしい*/}
        index
      </Link>

      <Link href="/about"className={classes.anchor}>
        {/* <a>hoge</a> */}
        about
      </Link>
    </header>
  );
}
