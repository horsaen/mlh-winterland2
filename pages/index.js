import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import createPersistedState from 'use-persisted-state'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Deso, Identity } from 'deso.js'

// const usePublicState = createPersistedState(null)

export default function Home() {

  const router = useRouter()
  const identity = Identity.init()
  const [publicKey, setPublicKey] = useState(null)
  const switchUrl = () => {
    router.push('/getting-started')
  }
  useEffect(() => {
    window.localStorage.setItem('pk', publicKey)
  }, [publicKey])

  const loginHandler = async () => {
    const payload = await identity.login({ accessLevel: 2})
    const pk = payload.publicKeyAdded
    setPublicKey(pk)
    switchUrl()
  }

  return (
      <div className={styles.page}>
        <div className={styles.titleContainer}>
        <Image
            src="/../public/HHLogo.png"
            alt="Picture of the author"
            width={400}
            height={200}
            ></Image>
          <div className={styles.loginButton}>
            <button onClick={loginHandler}>Log in!</button>
          </div>
        </div>
      </div>
    )
}