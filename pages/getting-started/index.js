import Head from 'next/head'
import axios from 'axios'
import styles from './GettingStarted.module.css'

export default function GettingStarted () {

    const formSubmit = (e) => {
        e.preventDefault()
        alert('test')
    }

    return (
        <div className={styles.page}>
            <Head>
                <title>Getting Started</title>
            </Head>
            <div className={styles.welcome}>
                <span>Welcome to</span>
                <span>Hungry Holiday!</span>
            </div>
            <form onSubmit={formSubmit}>
                <div className={styles.uname}>
                    <span>Username</span>
                    <input type='text' placeholder='Username' size='10' minlength="2" maxlength='10'/>
                </div>
                <div>
                    <span>Holiday Filters</span>
                    <input type="checkbox" />
                </div>
                <div>
                    <span>Normal Filters</span>
                </div>
                <button type="reset">Reset</button>
                <button type="submit" className={styles.submit}>{`Done :)`}</button>
            </form>
        </div>
    )
}