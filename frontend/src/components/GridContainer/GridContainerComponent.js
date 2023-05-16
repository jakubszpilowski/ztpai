import {RecipeComponent} from "../Recipe/RecipeComponent";
import "./GridContainerComponent.css";
import React, {useEffect, useState} from "react";

function GridContainerComponent() {
    const token = localStorage.getItem('token');

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/recipes", {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        })
            .then(response => console.log(response.text()));
    }, []);

    return (
        <div className="flex-container">
            <div className="grid-container">
                {
                    recipes.map(recipe => (
                        <RecipeComponent id={recipe.id} title={recipe.title} portion={recipe.portion} author={recipe.username} rate={recipe.rating} tags={recipe.tag}/>
                    ))
                }
            </div>
        </div>
    );
}

export default GridContainerComponent;
