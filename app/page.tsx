// import Image from 'next/image'

import axios from 'axios';

interface TodoModel{
  userId: number,
  id: number,
  title:String,
  "completed": boolean

}

export  default async function Home() {

var data =await axios.get('https://jsonplaceholder.typicode.com/todos');




// console.log(data.data);


  return (
  <div className='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>

  <div className='bg-teal-800 object-fill text-gray-50 overflow-hidden rounded-md max-w-sm p-2 min-h-[500px] flex flex-col min-w-[500px] items-center' >
    
    <h1 className='text-2xl font-bold'>Todo App</h1>
<ul>

{


data.data.map((todo:TodoModel)=>


  <div>
    <input type="checkbox" name="todo" id="todo" checked={todo.completed} />
    <label className= {todo.completed === true ? 'line-through p-8 text-center' : 'underline p-8 text-center' } htmlFor="todo">{todo.title}</label>


  </div>
)

}


{/* 
  <li>
    <input type="checkbox" name="todo" id="todo" />
    <label htmlFor="todo">Todo 1</label>


  </li> */}
</ul>

  </div>
   
  </div>
  )
}
