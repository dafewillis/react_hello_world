import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState ("");
  return (
    <form
        className="todo-form"
        onSubmit={(event) => {
        event.preventDefault();
        }}
    >

    <input
        type="text"
        placeholder="Crap To Do"
        value={newTodo}
        onChange={(event) => {
            const todoText = event.target.value;
            setNewTodo(todoText);
        }}
    />

    <button type="submit">GSD - Submit</button>
    </form>
        );
      };
      

const TodoList = (props) => {
    const todoList = props.todoList;
      const toDoArray = todoList.map((item, index) => {
          return <h3 className="todo-Item" key={index}>{item}</h3>
      })
      
      return (
      <>
      <div className="todo-list" />
      {toDoArray}
      </>
      )
};

const Todo = (props) => {
    const [todoList, setTodoList] = useState([]);

    const addToDo = (todo) => {
        let copy = {...todoList, todo};
        setTodoList(copy);
    }

  return <div className="todo">
      <h1>To Do</h1>
      <TodoForm addTodo={addTodo} />
    <TodoList todoList={todoList} />
  </div>
};

export default Todo;