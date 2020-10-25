import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../App";

const Div = styled.div`
  width: 300px;
  height: 50px;
  background: black;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;

const Circle = styled.div`
  border-radius: 50px;
  height: 15px;
  cursor: pointer;

  background: ${(props) => props.color};
  width: 15px;
  box-sizing: border-box;

  border: ${(props) => props.border};
`;
const Text = styled.p`
  font-size: 16px;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textStyle};
`;
const DivIcon = styled.div`
  display: flex;
  margin-left: 2px;
  align-items: center;
  justify-content: space-between;
`;

const EditBtn = styled.button`
  margin-right: 5px !important;
  color: white;
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

const DeleteBtn = styled(EditBtn)`
  color: red;
`;

const Todo = ({ item }) => {
  const todosContext = useContext(TodoContext);
  const { todos, setTodos, edit, setEdit } = todosContext;
  // Delete Handler
  const deleteHandler = () => {
    todos.splice(
      todos.findIndex((el) => el.id === item.id),
      1
    );
    setTodos([...todos]);
  };
  //Edit handler
  const editHandler = () => {
    setEdit({
      edited: !edit.edited,
      id: item.id,
      text: item.text,
    });
  };
  // Complete Handler
  const completedHandler = () => {
    setTodos(
      todos.map((items) => {
        if (items.id === item.id) {
          return {
            ...items,
            completed: !items.completed,
          };
        }
        return items;
      })
    );
  };

  return (
    <Div>
      <Circle
        onClick={completedHandler}
        border={item.completed ? "none" : "1px solid #eee"}
        color={item.completed ? "green" : ""}
      >
        {item.completed ? <i className="fas fa-check"></i> : ""}
      </Circle>
      <Text
        color={item.completed ? "#ACA6A6" : "white"}
        textStyle={item.completed ? "line-through" : "none"}
      >
        {item.text}
      </Text>
      <DivIcon>
        <EditBtn onClick={editHandler}>
          <i className="fas fa-pen"></i>
        </EditBtn>
        <DeleteBtn onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </DeleteBtn>
      </DivIcon>
    </Div>
  );
};

export default Todo;
