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
          Passport
        </h1>

        <p className={styles.description}>
          Sent: <strong>2021-01-20</strong>
          <br/>
          Days processing:  <strong>{differenceInCalendarDays(new Date(), new Date(2021, 0, 20))}</strong>
        </p>
        
        <h1 className={styles.title}>
          Flight
        </h1>

        <p className={styles.description}>
          Departure: <strong>2021-03-14</strong>
          <br/>
          Days left: <strong>{differenceInCalendarDays(new Date(2021, 2, 14), new Date())}</strong>
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
