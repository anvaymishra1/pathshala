import React from 'react'
import Link from 'next/link'
import styles from './homeButton.module.scss'

export default function HomeButton(props) {
  return (
    <Link href={props.to}>
      <button type="submit" className={styles.card}>
        <h1 align="center">{props.name}</h1>
      </button>
    </Link>
  )
}
