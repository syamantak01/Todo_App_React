import React, { useState, useEffect, useRef }  from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.task ? props.task.value : '');

    //using useRef and useEffect we can focus on the input field
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); //this function will stop form from refreshing everytime we click the add button

        props.onSubmit({
            id: Math.floor(Math.random() * 10001),   //produces a random number between 0 and 10000 for a unique id
            text: input
        });
        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.task ? (
                <>
                    <input 
                        type="text" 
                        name="text" 
                        className="todo-input edit" 
                        placeholder="Enter a Task" 
                        value= { input }
                        onChange = { handleChange }
                        ref={inputRef}
                    />
                    <button className="todo-button edit">Update</button>
                </>
                ) : (
                    <>
                    <input 
                        type="text" 
                        name="text" 
                        className="todo-input" 
                        placeholder="Enter a Task" 
                        value= { input }
                        onChange = { handleChange }
                        ref={inputRef}
                    />
                    <button className="todo-button">Add</button>
                </>
            )}
            
        </form>
    )
}

export default TodoForm
