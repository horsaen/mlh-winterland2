import Head from 'next/head'
import axios from 'axios'
import styles from './GettingStarted.module.css'

export default function GettingStarted () {

    const formSubmit = (e) => {
        e.preventDefault()
        // once done will send data to the DB under the current user's pubkey
        // axios.post(api blablabla data)
        const switchURL = () => {
            var url = '/recipes'
            window.location = url
        }
        setTimeout(switchURL(), 500)
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
                    <span>2-10</span>
                </div>
                <div>
                    <span>Holiday Filters</span>
                    <input type="checkbox" />
                    <span >Christmas</span>
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