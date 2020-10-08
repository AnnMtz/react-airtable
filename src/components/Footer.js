import React from 'react'
import arrow from '../assets/HOME/Artes Servicios/arrow1.png'
import logo from '../assets/HOME/Footer/LogoDinkbit/logo-dinkbit-22.svg'
import fondo from '../assets/HOME/Contacto/contacto-fondo-01.svg'
import redes from '../assets/HOME/Contacto/redes.JPG'
import mexico from '../assets/HOME/Footer/Paises/mexico.svg'
import espana from '../assets/HOME/Footer/Paises/espana.png'
import shopify from '../assets/HOME/Footer/Logos/logos-23.svg'
import messenger from '../assets/HOME/Footer/Logos/logos-24.svg'
import googlePartner from '../assets/HOME/Footer/Logos/logos-25.svg'
import google from '../assets/HOME/Footer/Logos/logos-26.svg'


const Footer = () => {
  return (
    <div className="footer">
      <img src={fondo} alt="fondo" />
      <div id="card-footer">
        <h1 id="footer-title">
          ¡Te queremos <br/> escuchar!
        </h1>
        <button type="button" class="btn btn-primary footer-btn">Contáctanos<img id="btn-footer" src={arrow} alt="arrow" /></button>
        
      </div>
      <div className="footer-logos">
        <hr id="separator-line" />
        <div className="images row">
          <div className="col-md-3">
            <img src={logo} id="logo" alt="logo" />
            <br/><br/>
            <img src={redes} id="redes" alt="redes" />
          </div>
          <div className="col-md-3 card-footer" id="explora">
            <h1>EXPLORA</h1>
            <p>Verde Online</p>
            <p>G Suit</p>
            <p>Trabaja con nosotros</p>
          </div>
          <div className="col-md-3 card-footer">
            <img src={mexico} className="paises"></img>
            <h1>MÉXICO</h1>
            <p>contacto@dinkbit.com</p>
            <p>(+52)55 2224 1607</p>
            <p>Bosque de Ciruelos 130 PH 1201,
              Miguel Hidalgo, Ciudad de México,
              México CP 11700
            </p>
          </div>
          <div className="col-md-3 card-footer">
            <img src={espana} className="paises"></img>
            <h1>ESPAÑA</h1>
            <p>contacto@dinkbit.com</p>
            <p>(+34)657 55 9397</p>
            <p>(+34)910 37 6757</p>
          </div>
        </div>
        <div className="links">
          <p>Aviso de privacidad</p>
          <p>Términos y condiciones</p>
          <img src={shopify} alt="shopify" className="img-links ml-5"></img>
          <img src={messenger} alt="messenger" className="img-links"></img>
          <img src={googlePartner} alt="googlePartner" className="img-links"></img>
          <img src={google} alt="google" className="img-links"></img>
        </div>
      </div>

    </div>
  )
}

export default Footer