import Link from 'next/link'
import styles from './Navbar.module.css'

import { BsJournalBookmark } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href='/recipes'>
                <div>
                    <span><BsJournalBookmark /></span>
                    <span>Recipes</span>
                </div>
            </Link>
            <Link href='/account'>
                <div>
                    <span><CgProfile /></span>
                    <span>Account</span>
                </div>
            </Link>
        </div>
    )
}