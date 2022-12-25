import axios from 'axios'
import Navbar from '../../components/Navbar'
import styles from './Recipes.module.css'

export default function Recipes() {
    return (
        <div className={styles.page}>
            <Navbar />
        </div>
    )
}