import './AddFormComponent.css';
import {IngredientsList} from "./IngredientsList";
import {useState} from "react";
import {TagsList} from "./TagsList";
import plate from '../../assets/plate2.svg';
import clock from '../../assets/clock.svg';

export const AddFormComponent = () => {
    const [tags, setTags] = useState([]);
    const [inputTag, setInputTag] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [ingredientList, setIngredientList] = useState({
        ingredient: '',
        amount: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIngredientList((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleAddIngredient = (e) => {
        const newItem = {
            ingredient: ingredientList.ingredient,
            amount: ingredientList.amount
        };
        setIngredients((prevItems) => [...prevItems, newItem]);
        setIngredientList({ingredient: '', amount: ''})
    }

    const handleDeleteIngredient = (index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
    }

    const handleTagInput = (e) => {
        setInputTag(e.target.value);
    }

    const handleAddTag = (e) => {
        e.preventDefault();
        if(inputTag !== '') {
            setTags([...tags, inputTag]);
            setInputTag('');
        }
    }

    const handleDeleteTag = (index) => {
        const updateTags = [...tags];
        updateTags.splice(index, 1);
        setTags(updateTags);
    }

    return (
        <form className="add-recipe-form">
            <input className="recipe-title-input" type="text" placeholder="Enter title"/>
            <div className="category-input">
                <select id="category" name="category" className="category-list">
                    <option value="breakfast">śniadania</option>
                    <option value="lunch">obiady</option>
                    <option value="dinner">kolacje</option>
                    <option value="desserts">desery</option>
                    <option value="apetizers">przystawki</option>
                    <option value="drinks">drinki</option>
                </select>
                <div className="portion-input-div">
                    <img className="icon-input" src={plate} alt="plate"/>
                    <input className="portion-input" type="text" placeholder="1"/>
                </div>
                <div className="time-input-div">
                    <img className="icon-input-clock" src={clock} alt="clock"/>
                    <input className="time-input" type="text" placeholder="5 minut"/>
                </div>
            </div>
            <IngredientsList ingredients={ingredients} onDeleteIngredient={handleDeleteIngredient}/>
            <div className="ingredients-div">
                <input className="recipe-ingredients-input"
                       placeholder="Ingredient"
                       name="ingredient"
                       value={ingredientList.ingredient}
                       onChange={handleInputChange}
                />
                <input className="recipe-ingredients-input"
                       placeholder="amount"
                       name="amount"
                       value={ingredientList.amount}
                       onChange={handleInputChange}
                />
                <button className="recipe-ingredients-btn" type="button" onClick={handleAddIngredient}>Add</button>
            </div>
            <TagsList tags={tags} onDeleteTag={handleDeleteTag}/>
            <div className="tags-div">
                <input className="recipe-tags-input"
                       placeholder="enter tag name"
                       value={inputTag}
                       onChange={handleTagInput}
                />
                <button className="recipe-tags-btn" onClick={handleAddTag}>Add</button>
            </div>
            <textarea className="recipe-inst-input" placeholder="instruction"/>
            <div className="add-pic-input">
                You can also add pictures of your dish:
                <input className="add-pics" type="file" multiple/>
            </div>
        </form>
    );
}