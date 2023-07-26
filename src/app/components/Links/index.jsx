
import classes from "./Links.module.css";



export function Links({items,handleReduce}) {

  return (
    <div className={classes.grid}>
      <button onClick={handleReduce}>減らす</button>
      
      {items.map((item) => {
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
