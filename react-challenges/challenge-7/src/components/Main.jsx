import { useState, useEffect } from 'react'

export const Main = () => {
    const [meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    })

    const [memes, setMemes] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(object => setMemes(object.data.memes))
    }, [])
    console.log(memes)

    const handleChange = (event) => {
        const { value, name } = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    const displayImage = () => {
        setMeme(prevMeme => ({
            ...prevMeme, 
            imageUrl: memes[Math.floor(Math.random() * memes.length)].url
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder={meme.topText}
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder={meme.bottomText}
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={displayImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}