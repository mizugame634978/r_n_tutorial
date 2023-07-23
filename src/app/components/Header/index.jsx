import classes from './Header.module.css'
import Link from "next/link";
export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.anchor}>
        {/* <a>index</a> */}
        index
      </Link>

      <Link href="/hoge"className={classes.anchor}>
        {/* <a>hoge</a> */}
        hoge
      </Link>
    </header>
  );
}
