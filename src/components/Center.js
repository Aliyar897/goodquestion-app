import React from 'react'
import styles from '../style/style.module.css'
import SignUp from './SignUp'

export default function Center() {
  return (
    <div id='center' className={styles.center} >
        <SignUp />
    </div>
  )
}
