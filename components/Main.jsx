//'use client';//これがないとpropsで関数を渡せない
import Image from 'next/image'
// import styles from '../src/app/page.module.css'
import styles from './Main.module.css'

import {Links} from './Links'
import {Footer} from './Footer'

import {Headline} from './Headline'

export  function Main(props) {

  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>src/app/pages/{props.page}.js</code>
      </Headline>
      <div className={styles.center}>
        <Image
          className={styles.logo}
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
