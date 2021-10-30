import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe'
import Logo from '../components/Logo'
import Social from '../components/Social'
import Countdown from '../components/Countdown'
import Video from '../components/Video'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Art of Digging </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*<Video />*/}
        <div className="content">
          {/*<Countdown />*/}
          {/*<Logo />*/}
          {/*<Subscribe />*/}
          <div class="klaviyo-form-U3xiFw"></div>
          <Social />
        </div>
      </main>
    </div>
  )
}
