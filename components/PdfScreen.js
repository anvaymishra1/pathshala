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
        <ParticipantCard props="Participant List"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
        <ParticipantCard props="Participant 1"></ParticipantCard>
      </div>
    </section>
  )
}

export default PdfScreen
