import Head from 'next/head'
import React from 'react'
import styles from './layout.module.scss'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Pathshala` : 'Pathshala'}</title>
      </Head>
      <div className={styles.container}>{children}</div>
    </>
  )
}
