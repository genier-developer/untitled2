import {ChangeEvent, useState} from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [rate, setRate] = useState(0)
    const [result, setResult]=useState(0)
    const handleRateChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newRate = event.target.value
        setRate(+newRate)
    }
    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newAmount = event.target.value
        setAmount(+newAmount)
    }
    const handleResult = ()=>{
        const parsedRate = parseFloat(rate.toString());
        const parsedAmount = parseFloat(amount.toString());

        if (!isNaN(parsedRate) && !isNaN(parsedAmount)) {
            const result = parsedRate * parsedAmount;
            setResult(result);
        } else {
            setResult(0);
        }
    }
  return (
      <>
          <div>
              <h2>Currency exchange</h2>
          </div>
          <div>
              <label>
                  Currency exchange:
                  <input value={rate} type="number" onChange={handleRateChange} placeholder={"Enter exchange rate"}/>
              </label>
          </div>
          <div>
              <label>
                  Currency amount:
                  <input value={amount} type="number" onChange={handleAmountChange} placeholder={"Enter exchange amount"}/>
              </label>
          </div>
          <button onClick={handleResult}>Count</button>
          <span>Result is: {result}</span>
      </>
  )
}

export default App
