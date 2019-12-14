import React, {Component} from 'react';
import './Carrossel.css';
import { Link } from "react-router-dom"
import {Carousel, Container} from "react-bootstrap"


const info={
  image:[
    "https://i.ytimg.com/vi/nOKm1fIFiIY/maxresdefault.jpg", 
    "https://cinepop.com.br/wp-content/uploads/2019/07/mortal-kombat-animated-movie-750x380.jpg",
    "https://ubistatic19-a.akamaihd.net/ubicomstatic/pt-br/global/search-thumbnail/search_thumbnail_rl-v2_mobile_138440.jpg"
  ],
  titulo:[
    "Super Mario World", 
    "Mortal Kombat", 
    "Rayman"

  ],
  descricao:[
    " SUPER MARIO sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in", 
    " MORTAL KOMBAT sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in", 
    " RAYMAN sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in", 
  ],

}



const cor="black"

export default class Carrossel extends Component {
  constructor(){
    super();
    this.state = {
        contador: 0,
        }
    }
    mudar(numero){
      
      this.setState({
          contador: numero,
      });
  }

  render() {
    const estilo={backgroundImage : 'url('+info.image[this.state.contador]+')' }
    return (
      <Container className="area">
        
        <div className="imagemMaior" style={estilo} >
          <div className="texto">
            <h2>{info.titulo[this.state.contador]}</h2>
            <p> {info.descricao[this.state.contador]} </p>
          </div>
        </div>
        <div className="outrasFotos">
          <div class="jogos" onClick={() => this.mudar(0)}>
            <img src="https://i.ytimg.com/vi/nOKm1fIFiIY/maxresdefault.jpg"/>
            <div>
              <h3>{info.titulo[0]}</h3>
              <p> {info.descricao[0]} </p>
              <a href="#">Leia Mais</a>
            </div>
          </div>
          <div class="jogos" onClick={() => this.mudar(1)}>
            <img src="https://cinepop.com.br/wp-content/uploads/2019/07/mortal-kombat-animated-movie-750x380.jpg"/>
            <div>
              <h3>{info.titulo[1]}</h3>
              <p> {info.descricao[1]} </p>
              <a href="#">Leia Mais</a>
            </div>
          </div>
          <div class="jogos" onClick={() => this.mudar(2)}>
            <img src="https://ubistatic19-a.akamaihd.net/ubicomstatic/pt-br/global/search-thumbnail/search_thumbnail_rl-v2_mobile_138440.jpg"/>
            <div>
              <h3>{info.titulo[2]}</h3>
              <p> {info.descricao[2]} </p>
              <a href="#">Leia Mais</a>
            </div>
            
          </div>
          
        </div>
      </Container>
    )
  }
}
