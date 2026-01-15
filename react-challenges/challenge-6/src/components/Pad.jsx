import { useState } from "react"

export default function Pad(props) {
    const [state, setState] = useState(false)
    const toggle = () => setState(state => !state)
    
    const styleOne = {
        backgroundColor: props.color,
        opacity: 0.1
    }
    
    const styleTwo = {
         backgroundColor: props.color,
        opacity: 1
    }
    
    const setStyle = state ? styleTwo : styleOne
    
    return (
        <button 
            onClick={toggle}
            style={setStyle}
        ></button>
    )
}