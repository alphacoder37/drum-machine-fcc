
const Bank = ({ isBankToggled, onBankToggle}) => {
   
    console.log(isBankToggled)
    return (
        <div>
         <label className="switch">
            <input type="checkbox" checked={isBankToggled} onChange={onBankToggle}/>
            <span className="slider">
            </span>
        </label>   
        <p id="value-updater">{isBankToggled ? "Smooth Piano Kit" : "Heater Kit"}</p>
        </div>
    )
}

export default Bank
