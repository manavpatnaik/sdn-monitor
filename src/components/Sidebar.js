import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
`;

const Link = styled.a`
    text-decoration: none;
    color: white;
    background-color: var(--red-button);
    margin: 5px 0;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    :hover: {
        opacity: 80%;
    }
`;

const Sidebar = () => {
  return (
    <Container>
        <Link href='http://localhost:8080/home/index.html'>Home</Link>
        <Link href='http://localhost:8080/home/index.html'>Flows</Link>
        <Link href='http://localhost:8080/home/index.html'>Groups</Link>
        <Link href='http://localhost:8080/home/index.html'>Meters</Link>
        <Link href='http://localhost:8080/home/index.html'>Flow Control</Link>
        <Link href='http://localhost:8080/home/index.html'>Meter Control</Link>
        <Link href='http://localhost:8080/home/index.html'>Group Control</Link>
        <Link href='http://localhost:8080/home/index.html'>Topology</Link>
        <Link>Monitor</Link>
    </Container>
  )
}

export default Sidebar