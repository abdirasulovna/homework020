import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActions } from "../store/todo/todoSlice";
// import { todoActionTypes } from "../store/todo/todoReducer";

export const TodoList = ({ todos }) => {
  const [edit, setEdit] = useState(false);
  const [isEditValue, setIsEditValue] = useState("");

  const dispatch = useDispatch();

  console.log(todos);

  const deleteHandler = () => {
    dispatch(todoActions.delete(todos.id));
  };

  const editValue = (e) => {
    setIsEditValue(e.target.value);
  };

  const editTodoHandler = () => {
    dispatch(todoActions.edit({ id: todos.id, title: isEditValue }));
    setEdit(false);
  };

  const editHandler = () => {
    setEdit(true);
    setIsEditValue(todos.title);
  };

  const completedHandler = () => {
    dispatch(todoActions.completed(todos.id));
  };

  return (
    <li>
      {edit ? (
        <>
          <StyledInput type="text" value={isEditValue} onChange={editValue} />
          <StyledButtons onClick={editTodoHandler}>survive</StyledButtons>
        </>
      ) : (
        <>
          <P completed={todos.completed}>{todos.title}</P>

          <StyledButtons onClick={deleteHandler}>Delete</StyledButtons>
          <StyledButtons onClick={completedHandler}>Completed</StyledButtons>
          <StyledButtons onClick={editHandler}>Edit</StyledButtons>
        </>
      )}
    </li>
  );
};

const P = styled.p`
  text-decoration: ${(todos) => (todos.completed ? "line-through" : "")};
`;

const StyledButtons = styled.button`
  background-color: #9d7bbe;
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  margin: 10px;
`;
const StyledInput = styled.input`
  border: 1px solid blueviolet;
  width: 20rem;
  margin: auto;
  border-radius: 15px;
  padding: 0.25rem;
  display: flex;
`;
