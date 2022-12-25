import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './GettingStarted.module.css'
import Image from 'next/image'

export default function GettingStarted () {

    const [ key, setKey ] = useState('')
    const [name, setName] = useState('')
    const handleName = ({target:{value}}) => setName(value)

    useEffect(() => {
        const pk = window.localStorage.getItem('pk')
        setKey(pk)
    }, [setKey])

    const formSubmit = (e) => {
        e.preventDefault()
        var holidayFilters = []
        var foodFilters = []
        var Hcheckbox = document.querySelectorAll('input[type=checkbox].holiday:checked')
        var Fcheckbox = document.querySelectorAll('input[type=checkbox].food:checked')
        // holiday filters array
        for (var i = 0; i < Hcheckbox.length; i++) {
          holidayFilters.push(Hcheckbox[i].value)
        }

        // food filters array
        for (var i = 0; i < Fcheckbox.length; i++) {
          foodFilters.push(Fcheckbox[i].value)
        }
        axios
        .post('https://api.ahungryholiday.tech', {
            username: name,
            publickey: key,
            hkeywords: holidayFilters,
            nkeywords: foodFilters
        })
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
                <Image className={styles.image1} src={"/../public/2.png"} alt="pengiun" width={90} height={90}></Image>
                <h2>Welcome to <br/> Hungry Holiday! </h2>
            </div>
            
            <form onSubmit={formSubmit}>

                <div className={styles.uname}>
                    <span>Username</span>
                    <input className={styles.unameBtn} type='text' placeholder='Username' size='10' minLength="2" maxLength='10' value={name} onChange={handleName}/>
                    <br/>
                </div>

            <div className={styles.filtersCont}>
                <div>
                    <span>Holiday Filters</span>
                    {holidayWord.map((hWord) => (
                        <div key={hWord.name}>
                            <span>
                                <input className="holiday" value={hWord.name} type="checkbox" />
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
                            <input className="food" value={fWord.name} type="checkbox"/>
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