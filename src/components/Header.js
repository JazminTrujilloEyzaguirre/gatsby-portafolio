import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-low-vision"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>FullStack Developer</h1>
        <p>
          Hola! Soy Jazmin, programadora Full-Stack-MERN viviendo en Viña del Mar, Chile. 
          <br />
          Descarga mi CV {' '}
          <a href="https://drive.google.com/file/d/1L5iSeLKAY0LUeRQJ8n5PHyoJ1lyfTPBy/view">Aquí.</a> 
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Sobre Mi
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Proyectos
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contacto
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
