import { useState } from "react"

export default function Pad(props) {
    const [isOn, setIsOn] = useState(false)
    const toggle = () => setIsOn(isOn => !isOn)
    
    const classOn = isOn ? 'on' : ''
    
    return (
        <button 
            onClick={toggle}
            className={classOn}
            style={{backgroundColor: props.color}}
        ></button>
    )
}