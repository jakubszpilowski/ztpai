import './IngredientsList.css';
import React from "react";

export const IngredientsList = ({ingredients, onDeleteIngredient}) => {
    const handleDeleteIngredient = (e, index) => {
        onDeleteIngredient(index);
    }

    const divHeight = ingredients.length > 0 ? '100px' : '20px';

    return (
        <div className="list-of-ingredients-div" style={{height: divHeight}}>Ingredients
            <ul className="list-of-ingredients">
                {ingredients.map((item, index) => (
                    <li className="ingredient-li" key={index}>
                        <button type="button" className="delete-ingredient-btn"
                                onClick={(e) => handleDeleteIngredient(e, index)}>
                        </button>
                        {item.ingredient} {item.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}