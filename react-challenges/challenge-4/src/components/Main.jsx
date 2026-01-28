import { useState, useRef, useEffect } from "react"
import { Recipe } from "./Recipe"
import { IngredientsList } from "./IngredientsList"
import { getRecipe } from "../../ai"

export const Main = () => {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const recipeNode = useRef(null)

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient")
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }

    const apiCall = async () => {
        const newRecipe = await getRecipe(ingredients)
        setRecipe(newRecipe)
    } 

    useEffect(() => {
        if (recipe && recipeNode.current) recipeNode.current.scrollIntoView()
    }, [recipe])

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
           {recipe && <Recipe recipeMarkdown={recipe} recipeSection={recipeNode}/>}
        </main>
    )
}
