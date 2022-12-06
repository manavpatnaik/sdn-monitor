import React from 'react'
import styled from 'styled-components'
import Content from './components/Content';
import Navbar from './components/Navbar';

const Container = styled.div`
  max-width: 1040px;
  margin: 10px auto;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Content />
    </Container>
  )
}

export default App