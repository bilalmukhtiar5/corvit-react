import React, { useState } from 'react'

const TodoList = () => {
    const [input,setInput] = useState("")
    const [list,setList] = useState([])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleTask = () => {
        setList([...list,input])
    }
  return (
    <>
        <div>
            <h1 className='text-lg'>Todo List</h1>
            <input type="text" value={input} onChange={(e) => handleInput(e)} className='outline' />
            <button onClick={handleTask} className='bg-blue-400 border-2 w-50 ml-3'>Add Task</button>
            <div className='text-align'>
                <ul>
                    {list.map((item,i) => <li>{item}</li>)}
                </ul>
            </div>
        </div>



    </>
  )
}

export default TodoList