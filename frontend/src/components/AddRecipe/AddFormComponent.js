import './AddFormComponent.css';
import {IngredientsList} from "./IngredientsList";
import {useState} from "react";
import {TagsList} from "./TagsList";
import plate from '../../assets/plate2.svg';
import clock from '../../assets/clock.svg';
import {useParams} from "react-router-dom";

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
    const { userId } = useParams();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO send form to backend
        const recipeDTO =  {
            userId: userId,
            title: title,
            category: category,
            portion: portion,
            prepTime: prepTime,
            tags: tags,
            ingredients: ingredientList,
            instruction: instruction
        }

        console.log(JSON.stringify(recipeDTO));
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
        </form>
    );
}
