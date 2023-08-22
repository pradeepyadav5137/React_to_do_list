import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function Todo11() {
    const [input, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setTasks([...tasks, input])
        setInputValue("")
    }

    function Delete(e) {
        e.preventDefault()
        
    }

    function Edit(e) {
        e.preventDefault()
    }

    function Check(e) {
        e.preventDefault()
    }

    return (
        <>
            <div>To Do List</div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='please enter your task' value={input} onChange={(e) => setInputValue(e.target.value)} />
                <button type='submit'>Add Task</button>
            </form>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <a href="" onClick={(e) => { Delete(e)}}> <DeleteIcon /> </a>
                        <a href="" onClick={(e) => { Edit(e)}}> <EditIcon /> </a>
                        <a href="" onClick={(e) => { Check(e)}}> <CheckIcon /> </a>
                    </li>
                ))}

            </ul>
        </>
    )
}

export default Todo11
