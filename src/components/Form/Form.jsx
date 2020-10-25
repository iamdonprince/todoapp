import React, { useEffect, useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import uniqid from "uniqid";
function Form({ todoText, setTodoText, todos, setTodos }) {
  const useInputRef = useRef(null);
  const changeHandler = (e) => {
    setTodoText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: todoText, completed: false, id: uniqid() }]);
    setTodoText("");
  };
  useEffect(() => {
    useInputRef.current.focus();
  });
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <Input
          ref={useInputRef}
          autofill={true}
          value={todoText}
          onChange={changeHandler}
          type="text"
          required
          name="todoText"
        />
        <Button type="submit">+</Button>
      </form>
    </div>
  );
}

export default Form;
