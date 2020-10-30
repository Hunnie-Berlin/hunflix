import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 48px;
  font-weight: 900;
  color: #f7b73177;
  margin-top: 50px;
`;

const Loader = () => (
  <Container>
    <span role="img" aria-label="Loading">
      LOADING..⏳
    </span>
  </Container>
);

export default Loader;
