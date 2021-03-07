import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { differenceInCalendarDays, formatRFC7231 } from 'date-fns'

export default function Home({ lastUpdate }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countdown App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Days left
        </h1>

        <p className={styles.description}>
          <strong>{differenceInCalendarDays(new Date(2021, 2, 18), new Date())}</strong>
        </p>

        <footer>
          <p>Last update: {lastUpdate}</p>
        </footer>

      </main>

    </div>
  )
}

export function getStaticProps() {
  const lastUpdate = formatRFC7231(new Date)

  return {
    props: {
      lastUpdate,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 30, // In seconds
  }
}
