import Head from 'next/head'
import FadeIn from 'react-fade-in'
import React from 'react'
import styles from './layout.module.scss'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Pathshala` : 'Pathshala'}</title>
      </Head>
      <div className={styles.container}>
        <FadeIn transitionDuration="900" delay="150">
          {children}
        </FadeIn>
      </div>
    </>
  )
}
