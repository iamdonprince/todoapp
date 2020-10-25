import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 30px;
  margin: 20px auto;
`;

function Status({ todos }) {
  const [taskCount, setTastCount] = useState(0);
  const [done, setDone] = useState(0);
  const [testDone, setTestDone] = useState([]);

  useEffect(() => {
    setTastCount(todos.length);
    //task done
    setTestDone(todos.filter((item) => item.completed === true));
  }, [todos]);
  useEffect(() => {
    setDone(testDone.length);
  }, [testDone]);

  return (
    <Div>
      <h4> Tast : {taskCount}</h4>
      <h4>Done : {done}</h4>
    </Div>
  );
}

export default Status;
