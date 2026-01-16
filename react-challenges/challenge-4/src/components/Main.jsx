import { useState } from "react"
import { Recipe } from "./Recipe"
import { IngredientsList } from "./IngredientsList"

export const Main = () => {
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)
    
    const ingredientsListItems =  ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))
    

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient")
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }

    const reqRecipe = () => setRecipeShown(recipeShown => !recipeShown)

    return (
        <main>
            <form action={addIngredient} className="setup">
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList handleClick={reqRecipe} ingredientsArray={ingredients} ingredientsList={ingredientsListItems}/>}
           {recipeShown && <Recipe />}
        </main>
    )
}
