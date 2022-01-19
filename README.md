# Todo App
This is a To Do app in which we can add, update, remove and mark the completed tasks. This project is built with ReactJS. I used CSS to style the webpage.

### Project Screenshot

![image](https://user-images.githubusercontent.com/58560802/150037180-b28d690b-6432-4d20-8a12-32c5b346930a.png)

### Installation and Setup

Run `npm install` to install all the dependencies

In the project directory, you can run `npm start` to start server.

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### What I did?

- Created Form component(TodoForm.js) [Reference](https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b#:~:text=onChange%20%3A%20Fires%20when%20there's%20a,submitted%2C%20usually%20by%20pressing%20enter.)
    - To work on the forms which will take input of tasks.
    - Added functions to handle the changes when the 'Add button' is clicked.
    - Further, used useEffect and useRef to focus on the input. [Reference](https://reactgo.com/react-focus-input/#:~:text=In%20react%2C%20we%20have%20the,focus%20on%20the%20input%20element.)
    -Lastly, handled the update case by using condition in JSX element.

- Created List component(TodoList.js)
    - To work on the list of tasks.
    - Added functions to add, update, remove tasks and marks complete tasks.

- Created Task component(Todo.js)
    - To work on the tasks in particular like definig the id and the text of the task.
    - Also to work on the various icons like 'Done', 'Update' and 'Remove'.

- Styled the webpage using CSS.
