import React, { useState } from "react";
import './Input.css'
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

const Input = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        if (input.trim() !== '')   // Check if input is not empty
        console.log(`Adding ${input}`)

        dispatch(saveTodo({
            item: input,
            done:false,
            id: Date.now()
        }))

        setInput('');  // Clear the input field
    }
    return (
        <div className="input">
            <input type='text' value={input} onChange={event=>setInput(event.target.value)}/>
            <button onClick={addTodo}>Add</button>

        </div> 
    )
}

export default Input;

