// this is the page which the user can delete recipes and view them, they will also find a link to their profile here.
import axios from "axios";
import { useState, useEffect } from 'react'

export default function Account() {
    
    const [key, setKey] = useState('')

    useEffect(() => {
        const pk = window.localStorage.getItem('pk')
        setKey(pk)
    }, [setKey])

    return (
        <p>works</p>
    )
}