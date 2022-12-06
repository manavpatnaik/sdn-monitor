import React from "react";
import styled from "styled-components";
import DR from "./DR";

const Container = styled.div`
  width: 100%;
  margin-left: 20px;
  max-height: 450px;
`;

const Title = styled.p`
  text-align: center;
`;

const Main = () => {
  return (
    <Container>
        <DR/>
      <Title>Demand Response</Title>
    </Container>
  );
};

export default Main;
