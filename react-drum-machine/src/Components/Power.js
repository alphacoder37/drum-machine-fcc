
const Power = ({ onToggle, isToggled }) => {
    
    return (
        <label className="switch power">
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className="slider">
            </span>
        </label>
    )
}

export default Power
