import React, {Component} from 'react';
import './Home.css';
import { Link } from "react-router-dom"
import {Jumbotron, Container, Row, Col, Image, Button} from "react-bootstrap"
import Carrossel from '../Carrossel/Carrossel';
import Novos from '../Novos/Novos';

export default class Home extends Component {
  render() {
    return (
      <Container className="corpo">
        <p className="titulos">POPULARES</p>
        <Carrossel></Carrossel>
        <p className="titulos">NOVOS</p>
        <Novos></Novos>
      </Container>
    )
  }
}
