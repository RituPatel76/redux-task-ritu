import React from 'react'
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList'


const Task = () => (
    <div>
       <AddTodo />  
       <VisibleTodoList />
    </div>
);

export default Task;