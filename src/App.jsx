import { useState } from 'react'

const App = () => {
  const [left, setLeftClick] = useState(0)
  const [right, setRightClick] = useState(0)
  const [allClicks, setAll] = useState([])
  const [ counter, setCounter ] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    setLeftClick(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setRightClick(right + 1)
  }
  
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter -1)

  return (
    <div>
      <div>
        {left}
        <Button onClick= {handleLeftClick} text="left"/>
        <Button onClick={handleRightClick} text="right"/>
        {right}
        <History allClicks = {allClicks}/>
      </div>
      <br></br>
      <Display counter = {counter} />
      <Button onClick={increaseByOne} text = "plus"/>
      <Button onClick={setToZero} text = "zero"/>
      <Button onClick={decreaseByOne} text = "minus"/>
    </div>
  )
}

const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(" ")}
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => (
<button onClick={onClick}>
{text}
</button>
)


export default App