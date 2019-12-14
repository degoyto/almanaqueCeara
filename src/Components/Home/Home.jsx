import React, {Component} from 'react';
import './Home.css';
import { Link } from "react-router-dom"
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap"

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h2>Welcome to CodeLife</h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
      </Container>
    )
  }
}
