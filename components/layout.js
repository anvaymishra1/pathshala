import Head from 'next/head'
import styles from './layout.module.scss'
import FadeIn from 'react-fade-in'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' | Pathshala' : 'Pathshala'}</title>
      </Head>
      <div className={styles.container}>
        <FadeIn transitionDuration="900" delay="150">
          {children}
        </FadeIn>
      </div>
    </>
  )
}
