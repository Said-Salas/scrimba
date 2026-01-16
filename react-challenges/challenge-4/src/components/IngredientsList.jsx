export const IngredientsList = (props) => {
    return (
        <section>
            <h2 className="ing-title">Ingredients on hand:</h2>
            <ul className="list-items">
                {props.ingredientsList}
            </ul>
            {
            props.ingredientsArray.length > 3 &&
            <article className="get-recipe">
                <div>
                    <h3 style={{fontWeight: '500', marginBottom: '0'}}>Ready for a recipe?</h3>
                    <p style={{color: '#6B7280', fontWeight: '300'}}>Generate a recipe from your list of ingredients.</p>
                </div>
                <button type="submit" onClick={props.handleClick}>Get recipe</button>
            </article>
            }
        </section>
    )
}