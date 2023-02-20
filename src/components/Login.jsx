import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActions } from "../store/auth/authSlice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authorized = useSelector((state) => state.auth.authorized);
  console.log(authorized);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (form.email.includes("@") && form.password.length > 4) {
      dispatch(authActions.login(form.email));
      navigate("/todo");
    }
  };
  const inputHandler = (user) => {
    return (e) => {
      setForm((prev) => ({ ...prev, [user]: e.target.value }));
    };
  };

  return (
    <>
      <StyledForm>
        <form onSubmit={submitHandler}>
          <div>
            <StyledLabel htmlFor="">Email</StyledLabel>
            <StyledInput
              type="email"
              placeholder="enter your email..."
              onChange={inputHandler("email")}
              value={form.email}
            />
          </div>
          <div>
            <StyledLabel htmlFor="">Password</StyledLabel>
            <StyledInput
              type="password"
              placeholder="enter your password..."
              onChange={inputHandler("password")}
              value={form.password}
            />
          </div>
          <StyledButton>Login</StyledButton>
        </form>
      </StyledForm>
    </>
  );
};
const StyledForm = styled.div`
  padding: 2rem 1.5rem;
  box-shadow: 2.5px 2px 2px 2px;
  width: 450px;
  margin: 100px auto;
  border-radius: 10px;
  text-align: center;
  background-color: #e6a4a4;
`;

const StyledButton = styled.button`
  background-color: #9d7bbe;
  margin: 15px;
  padding: 8px 20px;
  border-radius: 5px;
  border: none;
`;
const StyledInput = styled.input`
  border: 1px solid blueviolet;
  width: 20rem;
  margin: auto;
  border-radius: 15px;
  padding: 0.25rem;
  display: flex;
`;
const StyledLabel = styled.label`
font-size: 18px;
    padding-right: 18rem;
  margin-bottom: 0.5rem;
`;
