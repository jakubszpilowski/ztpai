import './AddFormComponent.css';
import {IngredientsList} from "./IngredientsList";
import React, {useState} from "react";
import {TagsList} from "./TagsList";
import plate from '../../assets/plate2.svg';
import clock from '../../assets/clock.svg';
import axios from "axios";

export const AddFormComponent = () => {
    const [tags, setTags] = useState([]);
    const [inputTag, setInputTag] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [ingredientList, setIngredientList] = useState({
        ingredient: '',
        amount: ''
    })
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [portion, setPortion] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [instruction, setInstruction] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleInstructionChange = (e) => {
        setInstruction(e.target.value);
    }

    const handlePortionChange = (e) => {
        setPortion(e.target.value);
    }

    const handlePrepTimeChange = (e) => {
        setPrepTime(e.target.value);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIngredientList((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleAddIngredient = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        //TODO send form to backend
        const recipeDTO =  {
            title: title,
            category: category,
            portion: portion,
            prepTime: prepTime,
            tags: tags,
            ingredients: ingredients,
            instruction: instruction
        }

        console.log(recipeDTO);

        try {
            const result = await axios.post("http://localhost:8080/api/recipes/add", recipeDTO);
            if(result.status === 201) {
                window.location.reload();
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form className="add-recipe-form" onSubmit={handleSubmit}>
            <input className="recipe-title-input" type="text"
                id="recipe-title"
                placeholder="Enter title"
                value={title}
                onChange={handleTitleChange}
            />
            <div className="category-input">
                <select id="category" name="category" 
                    className="category-list"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    <option value="breakfast">śniadania</option>
                    <option value="lunch">obiady</option>
                    <option value="dinner">kolacje</option>
                    <option value="desserts">desery</option>
                    <option value="apetizers">przystawki</option>
                    <option value="drinks">drinki</option>
                    <option value="salad">sałatki</option>
                    <option value="soup">zupy</option>
                    <option value="snacks">przekąski</option>
                    <option value="coctails">koktajle</option>
                    <option value="others">inne</option>
                </select>
                <div className="portion-input-div">
                    <img className="icon-input" src={plate} alt="plate"/>
                    <input className="portion-input" 
                        type="text" 
                        placeholder="1"
                        id="portion-input"
                        value={portion}
                        onChange={handlePortionChange}
                    />
                </div>
                <div className="time-input-div">
                    <img className="icon-input-clock" src={clock} alt="clock"/>
                    <input className="time-input" 
                        type="text" 
                        placeholder="5 minut"
                        id="preptime-input"
                        value={prepTime}
                        onChange={handlePrepTimeChange}
                    />
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
                       name="tags"
                       value={inputTag}
                       onChange={handleTagInput}
                />
                <button className="recipe-tags-btn" type="button" onClick={handleAddTag}>Add</button>
            </div>
            <textarea className="recipe-inst-input" 
                placeholder="instruction"
                id="instruction-input"
                value={instruction}
                onChange={handleInstructionChange}
            />
            <div className="add-pic-input">
                You can also add pictures of your dish:
                <input className="add-pics" id="file-input" type="file" multiple/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary app-font" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn bg-color app-font font-black">Save</button>
            </div>
        </form>
    );
}
