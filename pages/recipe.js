import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { FaStar, FaTrash, FaSave } from "react-icons/fa"
import React, {useState} from "react";

export default function recipe() {

    const [rating, setRating] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const tags = ["SWEET", "EASY", "FAST"];



    return(
        // <div className = {styles.main}>
            // <button className = {styles.button}> <span className = {styles.icon}></span> Return</button>
            <div className={styles.body}>
                <div className={styles.card}>
                    <h1 size = {200}>Cookies</h1>
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

                    <div>
                    {selectedImage && (
                        <div>
                            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                            <br />
                            <button className = {styles.image_remove} onClick={()=>setSelectedImage(null)}>Remove</button>
                        </div>
                    )}
                    {/* <img src={"/cookies.jpg"} width = '500' height = '400' className = {styles.container}/> */}
                    <input
                        type="file"
                        name="myImage"
                        className = {styles.image_upload}
                        onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                    }}
                    />
                    </div>

                    {/*tags */}

                    <div className = {styles.container}>
                        {tags.map((item) => {
                        return(
                            <button className = {styles.tag}> {item}</button>
                        )
                        })}
                        <button className = {styles.tag}><FaStar></FaStar></button>
                    </div>

                    <h2>Description</h2>    
                    <textarea id="text" name="text" style = {{width: "70%", height: "15%", padding: "20px"}}></textarea>
                    <h2>Ingredients</h2>
                    <textarea id="text" name="text" style = {{width: "70%", height: "15%", padding: "20px"}}></textarea>
                    <h2>Steps</h2>
                    <textarea id="text" name="text" style = {{width: "70%", height: "15%", padding: "20px"}}></textarea>

                    <div>
                        <button className = {styles.save_button}> <FaSave className = {styles.button_icon} size = {30} color = "green"/></button>
                        <button className = {styles.delete_button}><FaTrash className = {styles.button_icon} size = {28} color = "red"/></button>
                    </div>

                </div>
            </div>
        // </div>
    )
  }