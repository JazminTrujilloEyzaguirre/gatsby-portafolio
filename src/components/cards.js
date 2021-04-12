import React from 'react'
import mainStyle from './main.module.scss'
import picp01 from '../images/picp01.jpg'
import picp02 from '../images/picp02.jpg'
import picp03 from '../images/picp03.jpg'
import picp04 from '../images/picp04.jpg'

const Cards = () => (
    <div>
        <div className={mainStyle.container}>
              <h3>MERN</h3>
              <span className="image main">
                <img src={picp01} alt="" />
              </span>
              <p >
              En esta aplicación web, realizada con el stack MERN para unificar front-end y back-end. 
              Puedes obtener una cuenta nueva para ingresar por primera vez, una vez dentro puedes agregar 
              proyectos y a estos, a su vez puedes agregar tareas, las que puedes editar y cambiar 
              su estado de incompleto a completo. 
              </p>
              <div className={mainStyle.boton}>
                <a href="https://competent-wright-a9c47d.netlify.app/"> Visitar</a>
              </div>
              <br/>
        </div>
        <br/>
        <div className={mainStyle.container}>
              <h3>COUNDOWN</h3>
              <span className="image main">
                <img src={picp02} alt="" />
              </span>
              <p >
                En este sitio web podras elegir una fecha del calendario y comenzar una cuenta regresiva, asi podras saber exactamente cuantos dias, horas, minutos y segundos faltan para el día elegido. 
                Esta hecho con HTML - CSS -JAVASCRIPT
              </p>
              <div className={mainStyle.boton}>
                <a href="https://quirky-sammet-e45926.netlify.app/"> Visitar</a>
              </div>
              <br/>
        </div>
        <br/>
        <div className={mainStyle.container}>
              <h3>LANDING PAGE</h3>
              <span className="image main">
                <img src={picp03} alt="" />
              </span>
              <p >
                En esta landing-page podras ver una animación con CSS Y JAVASCRIPT y además acceder a una de mis playlist favoritas para escribir código c:
              </p>
              <div className={mainStyle.boton}>
                <a href="https://admiring-mestorf-210091.netlify.app/"> Visitar</a>
              </div>
              <br/>
        </div>
        <br/>
        <div className={mainStyle.container}>
              <h3>BUSCADOR PERFILES GITHUB</h3>
              <span className="image main">
                <img src={picp04} alt="" />
              </span>
              <p >
                En este sitio web se consume una API publica de github para consultar perfiles de usuarios activos. Esta hecha con HTML - CSS - JAVASCRIPT.
              </p>
              <div className={mainStyle.boton}>
                <a href="https://practical-bhabha-97cd36.netlify.app/"> Visitar</a>
              </div>
              <br/>
        </div>
    </div>
    
)

export default Cards