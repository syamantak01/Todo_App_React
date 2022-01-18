import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleFill } from 'react-icons/ri';
import { MdEdit, MdDone } from 'react-icons/md';



function Todo({todolist, completeTodo, removeTodo ,updateTodo}) {

    const [todo, setTodo] = useState({
        id: null,
        value: ''
    });

    const onUpdate = newtodo => {
        updateTodo(todo.id, newtodo);
        setTodo({id: null, value: ''});
    };

    if(todo.id){    //if todo.id !== null that means the todo is to be edited 
        return <TodoForm task={todo} onSubmit={onUpdate}/>;
    }

    return todolist.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-tab complete' : 'todo-tab'} key={index}>
            {todo.text}
            <div className='icons'>
                <MdDone onClick = {()=>completeTodo(todo.id)}/>
                <MdEdit className = 'edit-icon' onClick={() => setTodo({id: todo.id, value: todo.text})}/>
                <RiCloseCircleFill className = 'delete-icon' onClick={() => removeTodo(todo.id)}/>  
            </div>
        </div>
    ))
}

export default Todo
