import React, { useEffect, useState } from "react";
import Recipes from "./Recipe";
import Footer from "./footer";
import  "../style.css"

function App() {

  const [recipes, setRecipe] = useState([])
 const [search, setSearch] = useState("")
 const [query, setQuery] = useState("candy")


  const app_id = "a0fbd647";
  const app_key = "ca991083fb71579d9c003d57617d360e";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}&imageSize=REGULAR`;


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const r = await fetch(url);
    const data = await r.json();
    setRecipe(data.hits)
    
  };

  const updateSearch = e=>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div>
    <div className="title">
    <h1>Recipus</h1>
    <div className="underline"></div>
    </div>
      <form onSubmit={getSearch} className="search">
        <input type="text" placeholder="Type food name..." onChange={updateSearch} />
        <button type="submit" >Go</button>
      </form>
      <div className="App">
      {recipes.map((recipe)=>(
           <Recipes title= {recipe.recipe.label} 
           calories={recipe.recipe.calories} 
           ingredients={recipe.recipe.ingredients}
           img={recipe.recipe.image} 
           link={recipe.recipe.url}
             key={Math.random()}
           />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
