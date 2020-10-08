import React from 'react'
import bg from '../assets/HOME/Hero/hero-home-01.png'
import ar from '../assets/HOME/Hero/arrow.JPG'
import arrow from '../assets/HOME/Artes Servicios/arrow1.png'
import disign from '../assets/HOME/Artes Servicios/diseno.jpg'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <img id="bg" src={bg} alt="bg" />
      <div id="slogan">
        <p className="slogan-text mb-0 mr-5 pr-5">dinkibit es un Equipo creativo</p>
        <h1 id="slogan-title">Hacemos cosas <br/> Increíbles</h1>
        <img id="arrow" src={ar} alt="arrow" />
      </div>
     
      <div id="cards">
      <div className="card text-white bg-dark mb-3">
        <img id="disign-img" src={disign} alt="diseño" />
        <div className="card-header my-4">¿Qué hacemos?</div>
        <div className="card-body pb-5">
          <h1 className="card-title mb-3">Diseño</h1>
          <div id="services">
            <p className="services">Diseño</p>
            <hr id="line"></hr>
            <span className="services" id="develop">Desarrollo</span>
            <hr id="lines"></hr>
            <span className="services" id="marketing">Marketing</span>
          </div>
          <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu eiusmo sed do eiusmod tempor incididunt.</p>
          <button type="button" className="btn btn-dark">Ver más<img id="btn-image" src={arrow} alt="arrow" /></button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home