import './RecipeThumbnail.css';
import dish from '../../assets/default_dish.svg';
import axios from "axios";

export const RecipeThumbnail = ({id, recipe, user}) => {
    //TODO add photo of dish
    const handleDelete = async (recipeId) => {

        const result = await axios.delete(`http://localhost:8080/api/recipes/delete/${recipeId}`);
        if(result.status === 200) {
            window.location.reload();
        }
    }

    return (
        <div key={id} className="recipe-thm" id={recipe.id}>
            <button className="delete-recipe-thm"
                    type="button"
                    onClick={() => handleDelete(recipe.id)}
            >
            </button>
            <div className="image-div-thm">
                <img src={dish} alt="dish"/>
            </div>
            <div className="thumbnail-info">
                <span>{recipe.title}</span>
                {user !== null && <div className="recipe-info recipe-center">by <strong>{recipe.username}</strong></div>}
            </div>
        </div>
    );
}