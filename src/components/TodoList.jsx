import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <div className="todoList">
      {todos.map((item) => {
        return <Todo key={item.id} item={item}></Todo>;
      })}
    </div>
  );
}

export default TodoList;
