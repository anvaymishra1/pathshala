import Head from 'next/head'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Pathshala</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="A better way to take classes, remotely"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  )
}
