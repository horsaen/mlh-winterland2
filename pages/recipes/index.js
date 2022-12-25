import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import styles from './Recipes.module.css'

import { MdOutlineLibraryAdd } from 'react-icons/md'
import { get } from 'http'

const addHandler = () => {
    // posts to mongodb array !!
    alert('yay, added')
}

export default function Recipes() {
    const [pubkey, setPubkey] = useState('')
    const [nKeys, setNKeys] = useState([])
    const [hKeys, setHKeys] = useState([])
    const [holiday, setHoliday] = useState([])

    useEffect(() => {
        const pk = window.localStorage.getItem('pk')
        setPubkey(pk)
    }, [])

    const test = () => {
        axios
        .get('https://api.ahungryholiday.tech/manage/' + pubkey)
        .then((res) => {
            setHKeys(res[0].data.hkeywords)
            setNKeys(res[0].data.nkeywords)
        })
        .catch((err) => {
            console.log(err)
        })
        getHoliday()
        console.log(holiday)
    }
    const getHoliday = () => {
        axios
        .get('https://api.edamam.com/api/recipes/v2?type=public&q=christmas&app_id=c9242924&app_key=4ce49158922ad1ed2d67fd8a167a8031')
        .then((res) => {
            setHoliday(res.data.hits)
        })
    }
    return (
        <>
        <Navbar />
        <div className={styles.page}>
            <div className={styles.recipes}>
                <div>
                    <h2 onClick={test}>Holiday Recipes ^w^</h2>
                    {holiday[0].map((hRec) => (
                        <div key={hRec.title} className={styles.card}>
                            <div className={styles.cardImage}>
                                <Image alt={hRec.title} src={hRec.image} fill/>
                            </div>
                            <div className={styles.bar} />
                            <div className={styles.info}>
                                <h3>{hRec.label}</h3>
                                <ul>
                                    {/* {hRec.ingredients.map((ing) => (
                                        <li key={ing.text}>{ing.text}</li>
                                    ))} */}
                                </ul>
                                <span>Calories: {hRec.calories}</span>
                            </div>
                            <span className={styles.buttons}>
                                <Link href={hRec.url}>
                                    <button>Read More</button>
                                </Link>
                                <button onClick={addHandler}><MdOutlineLibraryAdd /></button>
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Food Recommendations :D</h2>
                    {/* {food.map((nRec) => (
                        <p key={nRec.title}>{nRec.title}</p>
                    ))} */}
                </div>
            </div>
        </div>
        </>
    )
}