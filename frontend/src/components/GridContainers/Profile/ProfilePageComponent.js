import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import './ProfilePageComponent.css';
import {RecipeThumbnail} from "../../Recipe/RecipeThumbnail";

export const ProfilePageComponent = () => {
    let navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getUserRecipes();
    }, [setRecipes]);

    const getUserRecipes = async () => {
        const result = await axios.get(`http://localhost:8080/api/profile`)
            .catch(() => {
                navigate("/home");
            });
        setRecipes(result.data);
    }

    return (
        <div className="grid-container-profile">
            {
                recipes.map(recipe => (
                    <RecipeThumbnail key={recipe.id}
                                     recipe={recipe}
                                     user={null}
                    />
                ))
            }
            <></>
        </div>
    );
}