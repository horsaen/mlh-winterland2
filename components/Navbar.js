import Link from 'next/link'
import styles from './Navbar.module.css'

import { BsJournalBookmark } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <BsJournalBookmark />
                <span>Recipes</span>
            </div>
            <div>
                <CgProfile />
                <span>Account</span>
            </div>
        </div>
    )
}