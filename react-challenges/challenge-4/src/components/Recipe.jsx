import ReactMarkdown from 'react-markdown'
export const Recipe = (props) => {

    return (
        <section className='suggested-recipe-container'>
            <ReactMarkdown>
                {props.recipeMarkdown}
            </ReactMarkdown>
        </section>
    )
}