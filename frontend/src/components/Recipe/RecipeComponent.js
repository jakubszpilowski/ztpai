import "./RecipeComponent.css";

export const RecipeComponent = ({id, title, author, portion, img, rate, tags}) => {
    return (
        <div className="recipe" id={id}>
            <div>{title}</div>
            <div className="image-div">
                {img}
            </div>
            <div>by {author}</div>
            <div>{rate}</div>
            <div>{portion}</div>
            <div>{tags}</div>
        </div>
    );
}
