import classes from "./Links.module.css";

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

export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        //itemはITEMをfor文で回した際の返却物？
        return (
          <a
            key={item.href}
            href={item.href}
            className={classes.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* keyとはreact側が重複がないか確認するためのものであり、ユニークな値を入れておく
            また最悪書かなくとも動きはする*/}
            <h2>
              {item.title}
              <span>-&gt;</span>
              {/* '&'で始まり';'で終わるものをhtmlエンティティズという */}
            </h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
