import React from "react";
import Navbar from "../components/Navbar";
import Recipecard from "../components/Recipecard";
import styles from '../styles/Home.module.css';

// fetch('https://api.edamam.com/api/recipes/v2/1',
//     {method: "GET",
//     withCredentials: true,
//     headers: {
//         "Application-ID": "a9692874"
//         "X-Auth-Token": "1eed2801351a6f69865f457fceaf4ec7",
//         "Content-Type": "application/json"
//     }
//     })

//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(function(error) {
//         console.log(error);
//     });

export default function Profile() {
    return(
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className = {styles.profile_body}>
                <div className = {styles.recommendations}>
                    <h1 style = {{marginLeft: "20px"}}>Recipes for you</h1>
                    <div className = {styles.recommendations_list}>
                        <Recipecard source = {"cookies.jpg"} title = "cookies" calories = "100" ingredients = "10"></Recipecard>
                        <Recipecard source = {"cookies.jpg"} title = "cookies" calories = "100" ingredients = "10"></Recipecard>
                        <Recipecard source = {"cookies.jpg"} title = "cookies" calories = "100" ingredients = "10"></Recipecard>
                        <Recipecard source = {"cookies.jpg"} title = "cookies" calories = "100" ingredients = "10"></Recipecard>
                        <Recipecard source = {"cookies.jpg"} title = "cookies" calories = "100" ingredients = "10"></Recipecard>
                    </div>
                </div>
                <div className = {styles.other}> 

                </div>
            </div>
        </>
    )
}