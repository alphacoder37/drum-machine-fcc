import { useState, useEffect } from 'react';
import './App.css';
import Values from './Components/Values';
import Paragraph from './Components/Paragraph';
import Power from './Components/Power';
import Bank from './Components/Bank';


const App = () => {

  useEffect(() => {
    document.addEventListener("keydown", keydownFunc);
    return () => {
      document.removeEventListener("keydown", keydownFunc)
    }
  })

  const [chordName, setChordName] = useState('')
  const [isToggled, setIsToggled] = useState(false) 
  const [isBankToggled, setIsBankToggled] = useState(false)
  const [values, setValues] = useState([
      {
        index  : 0,
        value1: "Heater 1",
          value2: "Chord 1",
          key: "Q",
          audioFile1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
          audioFile2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      },
      {
        index: 1,
          value1: "Heater 2",
          value2: "Chord 2",
          key: "W",
          audioFile1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
          audioFile2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      },
      {
        index: 2,  
        value1: "Heater 3",
          value2: "Chord 3",
          key: "E",
          audioFile1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
          audioFile2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      },
      {
        index: 3,  
        value1: "Heater Kit",
          value2: "Shaker",
          key: "A",
          audioFile1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
          audioFile2: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      },
      {
        index: 4,  
        value1: "Clap",
          value2: "Open HH",
          key: "S",
          audioFile1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
          audioFile2: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      },
      {
        index: 5,  
        value1: "Open HH",
          value2: "Closed HH",
          key: "D",
          audioFile1: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
          audioFile2: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      },
      {
        index: 6,  
        value1: "Kick n' Hat",
          value2: "Punchy Kick",
          key: "Z",
          audioFile1: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
          audioFile2: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      },
      {
        index: 7,  
        value1: "Kick",
          value2: "Side Stick",
          key: "X",
          audioFile1: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
          audioFile2: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      },
      {
        index: 8,  
        value1: "Closed HH",
          value2: "Snare",
          key: "C",
          audioFile1: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
          audioFile2: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      },
  ])

  let onClickFunc = (index) => {
    if (isBankToggled === false) {
    setChordName(values[index].value1);
    let audio = new Audio(values[index].audioFile1);
    audio.play()
    }
    else {
    setChordName(values[index].value2);
    let audio = new Audio(values[index].audioFile2);
    audio.play()
    }
  }
  let keydownFunc = (e) => {   
    if (isToggled === true) {
    if (String(values.filter((value) => (e.key.toUpperCase() === value.key)).map((value) => value.value1)).length > 0) {
      onClickFunc(String(values.filter((value) => (e.key.toUpperCase() === value.key)).map((value) => value.index)))
    }  
  }
  else {
    console.log("power is not on")
  }
  }

  return (
    <div id="app-Master">
      <Values values={values} onClickFunc={onClickFunc} isToggled={isToggled} />
      <div id="elements-div">
        <div id="power-div">
          <p>Power</p>
          <Power
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </div>
        <div id="paragraph-div">
          <Paragraph
            values={values}
            onClickFunc={onClickFunc}
            chordName={chordName}
          />
        </div>
        <div id="bank-div">
          <p>Bank</p>
          <Bank
            isBankToggled={isBankToggled}
            onBankToggle={() => setIsBankToggled(!isBankToggled)}
          />
        </div>
        
      </div>
    </div>
  );
}

export default App;
