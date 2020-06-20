/* eslint-disable no-console */
import React from 'react'
import styles from './screen.module.scss'
import ParticipantCard from './participantcard'
import useMousePosition from './mousePosition'
import back from '../util/back'

function PdfScreen() {
  const { x, y } = useMousePosition()
  const hasMovedCursor = typeof x === 'number' && typeof y === 'number'
  const coordinates = { xval: x, yval: y }

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
    <section className={styles.container}>
      <div className={styles.left} id="screen">
        {console.log(coordinates)}
        <div
          style={{
            background: 'lightblue',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            position: 'absolute',
            left: x,
            top: y,
          }}
        ></div>
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
    </section>
  )
}

export default PdfScreen
