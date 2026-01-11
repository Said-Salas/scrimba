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
            <section>
                <h2 style={{ fontWeight: '600', fontStyle: 'bold'}}>Ingredients on hand:</h2>
                <ul>
                    {ingredientsListItems}
                </ul>
                <article className="get-recipe">
                    <div>
                        <h3 style={{fontWeight: '500', marginBottom: '0'}}>Ready for a recipe?</h3>
                        <p style={{color: '#6B7280', fontWeight: '300'}}>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button type="submit">Get recipe</button>
                </article>
            </section>
        </main>
    )
}
