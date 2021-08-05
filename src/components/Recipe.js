import React from "react"
import "../style.css"


function Recipes({title, calories, img, ingredients, link}){
    return (<div className="card">
    <img className="photo" src={img} alt="candy" />
    <div className="content">
    <div className="header">
    <h3><a href={link}>{title}</a></h3>
    <p className="calories">{Math.round(calories)}J</p>
    </div>
    <ul>
        {ingredients.map(ingredient=>(
            <li>{ingredient.text}</li>
        ))}
    </ul>
    </div>
    </div>)
}

export default Recipes