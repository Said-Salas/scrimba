export const Main = () => {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const submit = () => console.log("Form submitted")

    return (
        <main>
            <form className="setup" onSubmit={submit}>
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"/>
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
