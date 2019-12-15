import React, {Component} from 'react';
import './Novos.css';
// import { Link } from "react-router-dom"
import {Container} from "react-bootstrap"
import data from "./data.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const media = data.art;
export default class Novos extends Component {
  componentDidMount(){
    console.log(data);
  }
  

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      
        
        <Slider {...settings}>
          {media.map(s => (
            <div class="slideItem">
              <img src={s}></img>
            </div>
          ))}
          
          
        </Slider>
     
      
    )
  }
}
