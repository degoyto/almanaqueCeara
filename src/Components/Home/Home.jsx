import React, {Component} from 'react';
import './Home.css';
import { Link } from "react-router-dom"
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap"
import Carrossel from '../Carrossel/Carrossel';

export default class Home extends Component {
  render() {
    return (
      <Container class="corpo">
        <p class="titulos">POPULARES</p>
        <Carrossel></Carrossel>
      </Container>
    )
  }
}
