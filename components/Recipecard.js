import React from "react"
import Link from 'next/link'
import styles from '../styles/Home.module.css';

const Recipecard = (props) => {
    return (
      <div className = {styles.recipe_card}>
        <img src = {props.source} className = {styles.recipe_image}></img>
        <h2>{props.title}</h2>
        <div className = {styles.recipe_info}>
            <p>{props.calories}&nbsp;</p>
            <p>Calories</p>
            <br></br>
            <p>&nbsp;|&nbsp;</p>
            <p>{props.ingredients}&nbsp;</p>
            <p>Ingredients</p>
        </div>
      </div>
    )
  }
  
  export default Recipecard

  
  