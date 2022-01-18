import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todolist, setTodolist] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) { /*  /^\s*$/ is the regex for empty string or string with only spaces */
            return ;
        }

        const newTodolist = [todo, ...todolist]

        setTodolist(newTodolist);
        // console.log([ ...newTodolist]);
    };

    const updateTodo = (todoId, newtodo) => {
        if (!newtodo.text || /^\s*$/.test(newtodo.text)) { /*  /^\s*$/ is the regex for empty string or string with only spaces */
            return ;
        }

        setTodolist(prev => prev.map(item => (item.id === todoId ? newtodo : item)))
    }

    const removeTodo = id => {
        const newlist = [...todolist].filter(todo => todo.id!==id);

        setTodolist(newlist);
    };

    const completeTodo = id => {
        let updatedlist = todolist.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete  //toggling it 
            }
            return todo;
        });
        setTodolist(updatedlist);    
    };
        
    return (
        <div>
            <h1>TODO APP</h1>
            <TodoForm onSubmit = {addTodo}/>
            <Todo todolist={todolist} completeTodo = {completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>  
        </div>
    );
}

export default TodoList
