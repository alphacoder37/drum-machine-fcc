
const Values = ({ values, onClickFunc, isToggled }) => {

    const bsBtn = "btn drum-pad-btn col-xs-4";


// if istoggled == true, then onClick={function}, if false then do nothing

    return (
        <div id="container-Values" className="container row"> 
            {values.map((value) => (
                <button onClick={function () {if (isToggled === true)
                    {
                    return onClickFunc(value.index)
                }
                else {
                    console.log('Power is not on')
                }
                }
            }
                className={bsBtn} 
                key={value.index}>
                    {value.key}</button>
            ))}
        </div>
    )
}

export default Values
