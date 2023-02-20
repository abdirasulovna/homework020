import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActions } from "../store/auth/authSlice";
import { todoActions } from "../store/todo/todoSlice";
import { TodoList } from "./TodoList";

const TodoForm = () => {
  const [text, setText] = useState("");

  const { todos } = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    const newTodo = {
      title: text,
      id: Math.random().toString(),
      completed: false,
    };
    dispatch(todoActions.add_todo(newTodo));
    setText("");
  };

  const deleteAllHandler = () => {
    dispatch(todoActions.delete_all());
  };
  const backLogoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledContainer>
          <StyledInput value={text} onChange={(e) => setText(e.target.value)} />
          <StyledButton type="submit">Add Todo</StyledButton>
          <StyledButton onClick={deleteAllHandler}>Delete all</StyledButton>
          <StyledUl>
            {todos.map((todo) => (
              <TodoList key={todo.id} todos={todo} />
            ))}
          </StyledUl>
        </StyledContainer>
        <StyledButton onClick={backLogoutHandler}>GO BACK</StyledButton>
      </form>
    </>
  );
};

export default TodoForm;

const StyledContainer = styled.div`
  padding: 2rem 1.5rem;
  box-shadow: 2.5px 2px 2px 2px;
  width: 450px;
  margin: 100px auto;
  border-radius: 10px;
  text-align: center;
  background-color: #e6a4a4;
`;
const StyledUl = styled.ul`
  list-style: none;
`;

const StyledButton = styled.button`
  background-color: #9d7bbe;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin: 16px;
`;
const StyledInput = styled.input`
  border: 1px solid blueviolet;
  width: 20rem;
  margin: auto;
  border-radius: 15px;
  padding: 0.25rem;
  display: flex;
`;
