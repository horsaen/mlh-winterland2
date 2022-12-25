import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FaStar, FaTrash, FaSave, FaPlus } from "react-icons/fa"
import React, {useState} from "react";
import Popup from 'reactjs-popup';

const allTags = ["Sour", "Salty", "Bitter", "Medium", "Hard", "Low-Calorie", "High-Calorie", "Zero-Sugar", "Gluten-Free"]

export default function editRecipe() {
    const recipeName = "Cookies";
    const imgSource = "";
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [rating, setRating] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [tags, setTags] = useState(["Sweet", "Easy", "Fast"]);
    const [freeTags, setFreeTags] = useState(allTags);
    const [tempTag, setTempTag] = useState("");

    const handleDescriptionChange = event => {
        setDescription(event.target.value)
    }
    const handleIngredientsChange = event => {
        setIngredients(event.target.value)
    }
    const handleStepsChange = event => {
        setSteps(event.target.value)
    }

    const removeTag = (index) =>{
        setFreeTags(freeTags.concat(tags[index]))
        const newTags = tags.filter((_, i) => i !== index);
        setTags(newTags);
    }

    const addTag = (index) => {
        setTempTag(freeTags[index]);
        setTags(tags.concat(freeTags[index]));
        const newTags = freeTags.filter((_, i) => i !== index);
        setFreeTags(newTags);
    }


    return(
        <div className={styles.body}>
            <div className={styles.card}>
                <h1 size = {200}>{recipeName}</h1>
                <div>
                    {[... Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return(
                            <label>
                                <input 
                                type = "radio" 
                                name = "rating" 
                                value = {ratingValue}
                                onClick = {() => setRating(ratingValue)}
                                className={styles.star_radio}/>
                                <FaStar className={styles.star} color = {ratingValue <= rating ? "#ffc107" : "grey"} size = {20}/>
                            </label>
                        )
                    })}
                </div>

                <div className = {styles.image_upload}>

                        {selectedImage && (
                        <div>
                            <img alt="not fount" width = {700} height = {300} className = {styles.image}src={URL.createObjectURL(selectedImage)} />
                            <br />
                        </div>
                        )}
                </div>
                <div className = {styles.image_button}>
                        <br/>
                        <input
                        type="file"
                        name="myImage"
                        className = {styles.image_upload}
                        onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                        }}
                        />
                        <button onClick={()=>setSelectedImage(null)}>Remove</button>

                </div>

                <div className = {styles.container}>
                    {tags.map((item, index) => {
                    return(
                        <div key={index}>
                            <button className = {styles.tag} onClick = {() => removeTag(index)}> {item}</button>
                        </div>
                    )
                    })}
                    <Popup trigger={<button className = {styles.tag}> <FaPlus></FaPlus></button>} position="right center">
                        <div>
                        {freeTags.map((item, index) => {
                        return(
                        <button className = {styles.tag} onClick = {() => addTag(index)}> {item}</button>
                        )
                        })}
                        </div>
                    </Popup>
                </div>

                <h2>Description</h2>    
                <textarea id="description" name="description" value = {description} onChange = {handleDescriptionChange} style = {{width: "70%", height: "12%", padding: "20px"}}/>
                <h2>Ingredients</h2>
                <textarea id="ingredients" name="ingredients" value = {ingredients} onChange = {handleIngredientsChange}style = {{width: "70%", height: "15%", padding: "20px"}}></textarea>
                <h2>Steps</h2>
                <textarea id="steps" name="steps" value = {steps} onChange = {handleStepsChange} style = {{width: "70%", height: "15%", padding: "20px"}}></textarea>

                <div>
                    <button className = {styles.save_button}> <FaSave className = {styles.button_icon} size = {30} color = "green"/></button>
                </div>

            </div>
        </div>
    )
  }