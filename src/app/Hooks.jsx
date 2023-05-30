import React, { useState } from 'react'

export default function Hooks() {
    const [count, setCount] = useState(1)
    const initialState = 1
     
    return (
        <div>
            <p>{count}</p>
            <button
            onClick = {() =>{setCount(count + 1)}}>Add</button>

            <button 
            onClick = {() => {setCount(count - 1)}}>Remove</button>

            <button
            onClick = {() => {setCount(initialState)}}>Reset</button>

        </div>
    )
}
