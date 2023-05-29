import './AddFormComponent.css';
import {IngredientsList} from "./IngredientsList";
import {useState} from "react";
import {TagsList} from "./TagsList";

export const AddFormComponent = () => {
    const [ingredients, setIngredients] = useState([]);
    const [inputIngredient, setInputIngredient] = useState('');
    const [tags, setTags] = useState([]);
    const [inputTag, setInputTag] = useState('');

    const handleIngredientInput = (e) => {
        setInputIngredient(e.target.value);
    }

    const handleAddIngredient = (e) => {
        e.preventDefault();
        if(inputIngredient !== '') {
            setIngredients([...ingredients, inputIngredient]);
            setInputIngredient('');
        }
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
            <input className="recipe-title-input" type="text" placeholder="title"/>
            <div className="category-input">
                <label htmlFor="category">Choose a category</label>
                <select id="category" name="category" className="category-list">
                    <option value="breakfast">śniadania</option>
                    <option value="lunch">obiady</option>
                    <option value="dinner">kolacje</option>
                    <option value="desserts">desery</option>
                    <option value="apetizers">przystawki</option>
                    <option value="drinks">drinki</option>
                </select>
            </div>
            <IngredientsList ingredients={ingredients} onDeleteIngredient={handleDeleteIngredient}/>
            <div className="ingredients-div">
                <input className="recipe-ingredients-input"
                       placeholder="enter quantity and name"
                       value={inputIngredient}
                       onChange={handleIngredientInput}
                />
                <button className="recipe-ingredients-btn" onClick={handleAddIngredient}>Add</button>
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