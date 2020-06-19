import React from 'react'
import FadeIn from 'react-fade-in'
import styles from './homeLayout.module.scss'

export default function HomeLayout({ children }) {
  return (
    <div className={styles.container}>
      <FadeIn transitionDuration="800" delay="120">
        {children}
      </FadeIn>
    </div>
  )
}
