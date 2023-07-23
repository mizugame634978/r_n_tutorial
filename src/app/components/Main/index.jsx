//'use client';//これがないとpropsで関数を渡せない
import Image from 'next/image'
// import classes from '../src/app/page.module.css'
import classes from '@/app/components/Main/Main.module.css'

//import {Links} from 'src/app/components/Links'


import {Headline} from '@/app/components/Headline'
import { Links } from '@/app/components/Links'

export  function Main(props) {

  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>src/app/pages/{props.page}.js</code>
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
      <Links />

    </main>
  )
}
