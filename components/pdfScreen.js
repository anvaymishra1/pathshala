/* eslint-disable no-console */
import React from 'react'
import styles from './pdfScreen.module.scss'
import ParticipantCard from './participantCard'

import back from '../util/back'

// @todo Add Mouse Pointer

function PDFScreen() {
  const uploadHandler = async () => {
    // eslint-disable-next-line no-return-await
    return await back
      .post('/upload')
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div className={styles.left} id="screen">
        <h1>PDF Screen</h1>
        <button onClick={uploadHandler}>+</button>
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

export default PDFScreen
