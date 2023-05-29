import {RecipeComponent} from "../../Recipe/RecipeComponent";
import "./HomepageComponent.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

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
            <div className="check-latest">
                <span>Check out the latest recipes:</span>
            </div>
            <div className="grid-container">
                {
                    recipes.map(recipe => (
                        <RecipeComponent key={recipe.id}
                                         recipe={recipe}
                        />
                    ))
                }
            </div>
            <div className="link-to-all-div">
                <Link className="link-to-all" to={'/all'}>
                    All recipes
                </Link>
            </div>
        </div>
    );
}

export default HomepageComponent;
