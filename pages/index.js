import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Subscribe from '../components/Subscribe'
import Logo from '../components/Logo'
import Social from '../components/Social'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Art of Digging </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Logo />
          <Subscribe />
          <Social />
        </div>
      </main>
    </div>
  )
}
