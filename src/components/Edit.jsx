import React, { useEffect, useState ,useRef} from "react";
import styled from "styled-components";
import Input from "./Form/Input";
const Div = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Div2 = styled.div`
  display: flex;
  margin-top: 20px;
  width: 210px;
  margin-right: 10px;
  justify-content: space-between;
`;
// const Input = styled.input`
//   padding: 4px 2px;
//   border: none;
//   border-bottom: 2px solid black;
//   outline: none;
//   font-size: 18px;
//   font-family: "Commissioner", sans-serif;
//   width: 210px;
//   margin-right: 10px !important;
// `;
const Submit = styled.button`
  cursor: pointer;
  padding: 9px 20px;
  background: black;
  border: none;
  color: white;
  outline-color: #db3131 !important;
  border-radius: 4px;
  outline-color: black;
`;

const CancelBtn = styled(Submit)`
  background: #db3131;
  outline-color: black !important;
`;

function Edit({ edit, setEdit, todos, setTodos }) {
  const useInputRef = useRef(null)
  const [inputText, setText] = useState("");
  useEffect(() => {
    setText(edit.text);
  }, [edit.text]);
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = () => {
    setEdit({
      edited: !edit.edited,
      id: "",
      text: "",
    });
    setTodos(
      todos.map((items) => {
        if (items.id === edit.id) {
          return {
            ...items,
            text: inputText,
          };
        }
        return items;
      })
    );
  };
  const cancelHandler = () => {
    setEdit({
      edited: !edit.edited,
      id: "",
      text: "",
    });
  };
  useEffect(() => {
    useInputRef.current.focus();
  });
  return (
    <Div>
      <form onSubmit={submitHandler}>
        <Input
          value={inputText}
          autofill={true}
          type="text"
          required
          name="todoText"
          onChange={changeHandler}
          ref={useInputRef}
        />
        <Div2>
          <Submit type="submit">Submit</Submit>
          <CancelBtn onClick={cancelHandler}>Cancel</CancelBtn>
        </Div2>
      </form>
    </Div>
  );
}

export default Edit;
