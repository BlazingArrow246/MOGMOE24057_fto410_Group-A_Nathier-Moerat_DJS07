import React from "react"
import memesData from "../memesData.js"

export default function Meme() { 

    let url

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
 <main>
    
    <p>{url}</p>

        <div classname= "form">

           <label htmlFor = "top-text">Top text
                <input id="top-text" type="text" placeholder="Shut up" className="form--input"/>
            </label> 

            <label> Bottom text
                <input type="text" placeholder="and take my money" className="form--input"/>
            </label>
                <button className="form--button">Get a new meme image 🖼</button>
        </div>
  </main> 
  )}