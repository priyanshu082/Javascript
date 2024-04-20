import React, { useState } from 'react'

const Todo2 = () => {
    const [todo,setTodo]=useState([])
    const [task,setTask]=useState("")


  return (
    <div>
        <input
        type='text'
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        <button
        onClick={()=>{
            setTodo([...todo,{id:Date.now(),task:task,isDone:false}])
        }} 
        className='px-[20px] py-[10px] text-black bg-white'>
            add
        </button>

        <div>
            {todo.map((item,index)=>(
                <div key={index} className='bg-green-500 flex flex-col h-[100px] w-fit my-[20px]'>
                  <div> {item.id}</div> 
                  <div> {item.task}</div> 
                  <div> {item.isDone}</div> 
                  <button 
                  onClick={()=>{
                        setTodo(todo.filter((data)=>item.id!==data.id))
                        setTask("")
                  }}
                  className='bg-pink-400'>Delte</button>

                  <button 
                  onClick={()=>{
                        setTodo(todo.map((data)=>{
                            if(data.id===item.id){
                                return {
                                    ...data,
                                   task:task
                                }
                            }
                            return data
                        }))
                  }}
                  className='bg-pink-400'>Edit</button>

                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Todo2