import React from 'react'
import styles from './participantCard.module.scss'

function ParticipantCard({ props }) {
  return (
    <div className={styles.card}>
      <h1>{props}</h1>
    </div>
  )
}

export default ParticipantCard
