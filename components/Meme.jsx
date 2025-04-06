import React from "react"

export default function Meme() {
    
    //Meme variable to store bottom text, top text and random image
    //initial state
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
})
    //State variable to store all memes
        const[allMemes, setAllMemes] = React.useState([])

        React.useEffect(() => {
            
            fetch("https://api.imgflip.com/get_memes") //Fetches a list of memes from the Imgflip API
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))
        }
        , [])

    //Selects a random meme image from the allMemes array and updates the randomImage property of the meme state.
    function getMemeImage() {
    
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url= allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    //Handles changes to the input fields for topText and bottomText.
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
 
        //The component returns a <main> element containing two sections: form and meme.
 <main>
    

        <div className= "form">

           <input 
                type="text" 
                placeholder="Top text" 
                className="form--input"
                name= "topText"
                value={meme.topText}
                onChange={handleChange}
            />

            <input
                 type="text"
                 placeholder="Bottom text" 
                 className="form--input"
                 name= "bottomText"
                 value={meme.bottomText}
                 onChange={handleChange}
            
            />
            <button
                className="form--button" 
                onClick={getMemeImage}
                >
                    Get a new meme image 🖼
            </button>
        </div>

    <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>

  </main> 
  )}