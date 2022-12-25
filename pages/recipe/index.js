import { useState, useEffect } from 'react'

export default function Recipe () {

    useEffect(() => {
        const pk = window.localStorage.getItem('pk')
        console.log(pk)
    })

    return (
        <p>works</p>
    )
}