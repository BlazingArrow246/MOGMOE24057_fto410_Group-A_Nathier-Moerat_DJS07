import React from 'react'

export default function Header () {

    //Header component that displays the logo, title, and project name
    return (
<header className = "header">  
    <img src="./trollface.png" alt="Logo" className = "header--image"/> 
    <h2 className = "header--title">
      Meme Generator
    </h2>
    <h4 className = "header--project">
        DJS 7 REACT PROJECT
    </h4>
</header>
    )
  }
  
  
  