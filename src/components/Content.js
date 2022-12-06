import React from "react";
import styled from "styled-components";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Container = styled.div`
    margin: 20px 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Content = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};

export default Content;
