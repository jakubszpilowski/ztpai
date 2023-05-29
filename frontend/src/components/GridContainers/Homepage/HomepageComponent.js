import {RecipeComponent} from "../../Recipe/RecipeComponent";
import "./HomepageComponent.css";
import React, {useEffect, useState} from "react";
import axios from "axios";

function HomepageComponent() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        getAllRecipes();
    }, []);

    const getAllRecipes = async () => {
        const result = await axios.get("http://localhost:8080/api/recipes");
        setRecipes(result.data);
    }

    return (
        <div className="flex-container">
            <div className="grid-container">
                {
                    recipes.map(recipe => (
                        <RecipeComponent key={recipe.id}
                                         recipe={recipe}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default HomepageComponent;
