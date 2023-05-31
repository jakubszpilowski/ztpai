import {RecipeComponent} from "../../Recipe/RecipeComponent";
import React, {useEffect, useState} from "react";
import axios from "axios";
import './AllGridContainer.css';

export function AllGridContainer() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        loadRecipes();
    }, []);

    const loadRecipes = async () => {
        const result = await axios.get("http://localhost:8080/api/recipes/all");
        setRecipes(result.data);
    }

    return (
        <div className="flex-container-all">
            <div className="grid-container-all">
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