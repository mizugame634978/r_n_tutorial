"use client"; //これがないとpropsで関数を渡せない
import Image from "next/image";
// import classes from '../src/app/page.module.css'
import classes from "@/app/components/Main/Main.module.css";
import { useCallback, useState } from "react";
//import {Links} from 'src/app/components/Links'
import { useEffect } from "react";

import { Headline } from "@/app/components/Headline";
import { Links } from "@/app/components/Links";

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "learn \u2192",//unicode2192
    description:
      "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  {
    href: "https://nextjs.org/templates?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "templates ",
    description: "aaaaaaaaaaExplore the Next.js 13 playground.",
  },
  {
    href: "https://nextjs.org/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "deploy ",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className={classes.main}>
      <Headline page={props.page} handleReduce={handleReduce}>
        <code className={classes.code}>{items.length}</code>
      </Headline>
      <div className={classes.center}>
        <Image
          className={classes.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <Links items={items}handleReduce={handleReduce}/>
    </main>
  );
}
