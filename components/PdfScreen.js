import React from 'react'
import styles from './screen.module.scss'
import ParticipantCard from './participantcard'

function PdfScreen() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1>PDF Screen</h1>
      </div>
      <div className={styles.right}>
        <ParticipantCard props="Participant List" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
        <ParticipantCard props="Participant 1" />
      </div>
    </section>
  )
}

export default PdfScreen
