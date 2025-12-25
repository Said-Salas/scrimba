export const Main = () => {
    return (
        <main>
            <form className="setup">
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"/>
                <button type="submit">+ Add ingredient</button>
            </form>
        </main>
    )
}