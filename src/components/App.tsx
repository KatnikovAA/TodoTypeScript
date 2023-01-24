import { useEffect, useState, useRef } from "react"
import { ITodo } from "../types/date"
import TodoList from "./TodoList"
const App = () =>{
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState<ITodo[]>([]) //   дженерики для не явных струкртур данных <ITodo[]> - указываем какой тип\формат массива будем передавать или использоавть

    const inputRef:React.LegacyRef<HTMLInputElement> = useRef(null)

    const handleChenge: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setValue(e.target.value)
    }

//...todos - передаем старый массив, что бы не затералось 
const addTodo = () => {
    if (value) {    
        setTodos([...todos,{
            id:Date.now(),
            title:value,
            complete:false,
        }])
        setValue('')   
    }             
}

const removeTodo = (id:number): void => {
    setTodos(todos.filter(todo => todo.id !== id)) //filter создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
}

const toggleTodo = (id:number): void => {
    setTodos(todos.map(todo => {
        if(todo.id !== id) return todo;

        return {
            ...todo,
            complete:!todo.complete
        }
    }))
}

const OnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) =>{
    if(e.key === 'Enter') {
        addTodo();
    }
}
useEffect(() => {
    if (inputRef.current)
    inputRef.current.focus()
}, [])

    return <div>
        <div>
            <input value={value} onChange={handleChenge} type="text" ref={inputRef} onKeyDown={OnKeyDown}/>
            <button onClick={addTodo}  >Add</button>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    </div>
} 

export default App