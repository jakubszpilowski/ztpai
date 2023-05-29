import "./RecipeComponent.css";
import spatula from "../../assets/spatula.svg";
import plate from "../../assets/plate2.svg";
import dish from "../../assets/default_dish.svg";

export const RecipeComponent = ({id, recipe}) => {
    //TODO add photo of dish

    return (
        <div key={id} className="recipe" id={recipe.id}>
            <div className="recipe-title recipe-center">{recipe.title}</div>
            <div className="image-div">
                <img src={dish} alt="dish"/>
            </div>
            <div className="recipe-info recipe-center">by <strong>{recipe.username}</strong></div>
            <div className="icons-div">
                <div className="recipe-info">
                    <img className="rating" src={spatula} alt="spatula"/>
                    &nbsp;
                    {recipe.rating}
                </div>
                <div className="recipe-info">
                    {recipe.portion}
                    &nbsp;
                    <img className="rating" src={plate} alt="plate"/>
                </div>
            </div>
            <div className="recipe-center prep-time">
                {recipe.prepTime}
            </div>
            <div className="recipe-tags recipe-info">{recipe.tags.map(
                tag => (
                    <span className="recipe-tag" key={tag.id}>{tag.name}</span>
                )
            )}
            </div>
        </div>
    );
}
