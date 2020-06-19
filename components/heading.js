import React from 'react'
import styles from './heading.module.scss'

export default function Heading(props) {
  return (
    <div className={styles.heading}>
      <h1>{props.titleText}</h1>
      <h4>{props.desc}</h4>
    </div>
  )
}
