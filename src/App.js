import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList";
import Status from "./components/Status";
import Edit from "./components/Edit";
export const TodoContext = React.createContext();

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({ edited: false, id: "", text: "" });

  useEffect(() => {
    getLocalStorage();
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", []);
    } else {
      const newTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(newTodos);
    }
  };

  return (
    <div className="App">
      <TodoContext.Provider
        value={{
          todos: todos,
          setTodos: setTodos,
          edit: edit,
          setEdit: setEdit,
        }}
      >
        <header className="App-header">
          <Header>Todo App</Header>
        </header>
        <Status todos={todos}></Status>

        {edit.edited ? (
          <Edit
            edit={edit}
            setEdit={setEdit}
            todos={todos}
            setTodos={setTodos}
          />
        ) : (
          <>
            <Form
              todoText={todoText}
              setTodoText={setTodoText}
              todos={todos}
              setTodos={setTodos}
            />
            <TodoList todos={todos} setTodos={setTodos} />
          </>
        )}
      </TodoContext.Provider>
    </div>
  );
}

export default App;
