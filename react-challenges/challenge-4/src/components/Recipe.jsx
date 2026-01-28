import ReactMarkdown from 'react-markdown'
export const Recipe = (props) => {

    return (
        <section className='suggested-recipe-container' ref={props.recipeSection}>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>
                {props.recipeMarkdown}
            </ReactMarkdown>
        </section>
    )
}