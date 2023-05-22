import {RecipeComponent} from "../Recipe/RecipeComponent";
import "./GridContainerComponent.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function GridContainerProfile() {
    let navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        getUserRecipes();
    }, []);

    const getUserRecipes = async () => {
        const result = await axios.get("http://localhost:8080/api/profile/1")
            .catch(() => {
                navigate("/home");
            });
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

export default GridContainerProfile;