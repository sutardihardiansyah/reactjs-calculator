import React, { useState } from 'react'
import Keyboard from './Keyboard'
import Screen from './Screen'

export default () =>  {
    const [input, setInput] = useState("")

    // Add Input
    const addInput = (char) => {
        
        var newInput = "";
        console.log(input.length)
        if(input.length === 0) {
            if(isNaN(Number(char))) {
                newInput = [...input];
                newInput += 0 + char
                setInput(newInput)
                return;
            } else {
                newInput = [...input];
                newInput += char
                setInput(newInput)
                return;
            }
        }
        newInput = input
        newInput += char
        setInput(newInput);
    }

    const clearInput = () => {
        setInput("")
    }

    const clearOne = () => {
        let newInput = input.slice(0, -1);

        setInput(newInput);
    }

    const calculate = () => {

        try {
            setInput(evaluate(input))
        } catch (error) {
            console.log(error)
        }
    }

    function evaluate(fn) {
        return new Function('return ' + fn)();
    }
  return (
    <div className="calc">
        <div className="calcHeader">Calculator</div>
        <Screen input={input} />
        <Keyboard addInput={addInput} calculate={calculate} />
        <div className="clearButton" onClick={clearInput}>Clear</div>
        <div className="clearButton" onClick={clearOne}>Clear One</div>
    </div>
  )
}
