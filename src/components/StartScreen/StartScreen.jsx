import React from 'react'
import styles from './StartScreen.module.css';

const StartScreen = () => {
  return (
    <div className={styles.start}>
      <h1>Secret Word</h1>
      <p>Clique abaixo e comece a jogar!</p>
      <button>Jogar</button>
    </div>
  )
}

export default StartScreen
