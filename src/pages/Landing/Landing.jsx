import styles from './Landing.module.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';


const Landing = ({ user, handleSignupOrLogin }) => {
  const navigate = useNavigate()
  const [loggedIn, SetLoggedIn] = useState(false)
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  useEffect(() => {
    SetLoggedIn(true)
    user && navigate("/gardens")
  }, [user, navigate])

  return (
    <>
      {loggedIn && <main className={styles.container}>
        <div className={styles.brownBorder}>
          <div className={styles.greenBorder}>
            <div className={styles.messageContainer}>
              <h1>Welcome to Planter</h1>
              <h2>This app is designed to help you keep track of your plants watering schedule and also show off your gardens.</h2>
            </div>

            {<div className='login-container'>
              <p>{message}</p>
              <LoginForm updateMessage={updateMessage} handleSignupOrLogin={handleSignupOrLogin} />
            </div>}
          </div>
        </div>
      </main>}
    </>
  )
}

export default Landing
