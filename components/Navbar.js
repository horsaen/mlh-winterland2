import React from "react"
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
      <nav className = {styles.navbar}>
          <ul className = {styles.navbar_links}>
            <Link href='/'><li className = {styles.navbar_item}>Home</li></Link>
            <Link href='/about'><li className = {styles.navbar_item}>About</li></Link>
            <Link href='/blog'><li className = {styles.navbar_item}>Blog</li></Link>
            <Link href='/contact'><li className = {styles.navbar_item}>Contact</li></Link>
          </ul>
        </nav>
    )
  }
  export default Navbar
  