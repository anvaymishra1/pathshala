import React from 'react'
import styles from './homeGrid.module.scss'

export default function HomeGrid({ children }) {
  return <div className={styles.grid}>{children}</div>
}
