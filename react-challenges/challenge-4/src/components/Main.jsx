import { useState } from "react"
import { Recipe } from "./Recipe"
import { IngredientsList } from "./IngredientsList"
import { getRecipe } from "../../ai"

export const Main = () => {
    const [ingredients, setIngredients] = useState([])
    let recipe = ''

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient")
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }

    const apiCall = async () => recipe = await getRecipe(ingredients)
    console.log(recipe)

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
            {ingredients.length > 0 && <IngredientsList handleClick={apiCall} ingredientsArray={ingredients} />}
           {recipe && <Recipe recipeMarkdown={recipe}/>}
        </main>
    )
}
