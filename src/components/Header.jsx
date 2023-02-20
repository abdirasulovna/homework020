import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <StyledForm>
        <h1>TODO-LIST WITH REDUX-TOOLKIT </h1>
      </StyledForm>
    </>
  );
};

export default Header;

const StyledForm = styled.form`
  margin: 0;
  width: 100%;
  background-color: #7d455a;
  height: 60px;
`;
