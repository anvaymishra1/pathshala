import React from 'react'
import styles from './screen.module.scss'
import ParticipantCard from './participantcard'

// TODO: Add Mouse Pointer

function PdfScreen() {
  return (
    <>
      <div className={styles.left} id="screen">
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
    </>
  )
}

export default PdfScreen
