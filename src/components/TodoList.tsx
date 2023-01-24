import { ITodo } from "../types/date"
import TodoItem from "./TodoItem"

interface ITodoListProps { // interface можно заменять на type ... = ( тоже самое)
    items:ITodo[];
    removeTodo:(id:number) =>  void;
    toggleTodo:(id:number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) =>{
    const {items,removeTodo,toggleTodo} = props;
    return <div>
        {
            items.map(todo =>
            (<TodoItem 
                key={todo.id} 
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                {...todo}
            />))
        }
    </div>
}


export default TodoList