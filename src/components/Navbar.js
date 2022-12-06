import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    height: 80px;
    background-color: var(--green-main); 
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 28px;
`;

const Navbar = () => {
  return (
    <Nav>SDN Monitor</Nav>
  )
}

export default Navbar