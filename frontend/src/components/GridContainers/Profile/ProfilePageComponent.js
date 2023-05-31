import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {RecipeComponent} from "../../Recipe/RecipeComponent";

export const ProfilePageComponent = () => {
    let navigate = useNavigate();
    const id = localStorage.getItem("user_id");
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        getUserRecipes().then();
    }, []);

    const getUserRecipes = async () => {
        const result = await axios.get(`http://localhost:8080/api/profile/${id}`)
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