import { useState } from "react"

export const Main = () => {
    const [ingredients, setIngredients] = useState([])
    
    const ingredientsListItems =  ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))
    

    const signUp = (formData) => {
        const newIngredient = formData.get("ingredient")
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }

    return (
        <main>
            <form action={signUp} className="setup">
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
