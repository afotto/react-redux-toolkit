import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

  const [id, setId] = useState(1);
  // const { data: todos = [], isLoading, isFetching } = useGetTodosQuery();
  const { data: todo, isLoading, isFetching } = useGetTodoQuery(id);
  console.log(todo);
  
  return (
    <>
        <h1>Todo - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'Si' : 'Terminó' }</h4>
        <h4>isFethcing...</h4>

        <pre> {  JSON.stringify(todo) }  </pre>
        {/* <ul>
          {todos.map(todo => 
            <li key={todo.id} >
              <strong>{ todo.completed ? 'Hecho ' : 'Pendiente ' }</strong>
              {todo.title}
            </li>
          )}
        </ul> */}


        <button
          onClick={() => { setId(id + 1) }}
        >
            Next todo
        </button>
        <button
          onClick={() => { id >= 1 ? setId(id - 1) : setId(1) }}
        >
            Prev todo
        </button>
    </>
  )
}
