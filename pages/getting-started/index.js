import Head from 'next/head'
import axios from 'axios'
import styles from './GettingStarted.module.css'
import Image from 'next/image'

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

    const holidayWord = [
        {name: "christmas"},
        {name: "holiday"},
        {name: "peppermint"},
        {name: "gingerbread"},
        {name: "cookies"},
        {name: "sweet potatoes"},
        {name: "stuffing"},
        {name: "pie"},
        {name: "potatoes"},
    ]

    const foodWord = [
        {name: "chicken"},
        {name: "beef"},
        {name: "pork"},
        {name: "fish"},
        {name: "vegan"},
        {name: "vegetarian"},
        {name: "sweet"},
        {name: "salty"},
        {name: "spicy"},
        {name: "sour"},
        {name: "italian"},
        {name: "mexican"},
        {name: "asian"},
        {name: "american"},
        {name: "french"},
        {name: "indian"},
        {name: "mediterranean"},
        {name: "thai"},
        {name: "chinese"},
    ]

    return (
        <div className={styles.page}>
            <Head>
                <title>Getting Started</title>
            </Head>


            <div className={styles.welcome}>
                <Image class={styles.image1} src={"/../public/2.png"} alt="pengiun" width={90} height={90}></Image>
                <h2>Welcome to <br/> Hungry Holiday! </h2>
            </div>
            
            <form onSubmit={formSubmit}>

                <div className={styles.uname}>
                    <span>Username</span>
                    <input class={styles.unameBtn} type='text' placeholder='Username' size='10' minlength="2" maxlength='10'/>
                    <br/>
                </div>

            <div className={styles.filtersCont}>
                <div>
                    <span>Holiday Filters</span>
                    {holidayWord.map((hWord) => (
                        <div key={hWord.name}>
                            <span>
                                <input value={hWord.name} type="checkbox" />
                                <label>{hWord.name}</label>
                            </span>
                        </div>
                    ))}
                </div>

                <div id={styles.b}>
                    <span>Food Filters</span>
                    {foodWord.map((fWord) => (
                        <div key={fWord.name}>
                            <span>
                            <input value={fWord.name} type="checkbox" />
                            <label>{fWord.name}</label></span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.submit}>
                <button type="reset" className={styles.sButton}>Reset</button>
                <button type="submit" className={styles.sButton}>{`Submit! :)`}</button>
            </div>
    
            </form>
        </div>
    )
}