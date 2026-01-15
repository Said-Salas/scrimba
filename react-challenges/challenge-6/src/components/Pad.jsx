export default function Pad(props) {
    const classOn = props.on ? 'on' : ''
    
    return (
        <button 
            onClick={props.handleClick}
            className={classOn}
            style={{backgroundColor: props.color}}
        ></button>
    )
}