import {Container, Jumbotron} from 'react-bootstrap';
// import './App.css';
import Header from "./Header";
import KegControl from './KegControl';
import React from 'react';

export default function App() {

  return (
    <>
      <Jumbotron>
        <Header/>
      </Jumbotron>
      <Container>
        <KegControl/>
      </Container>
    </>
  );
}