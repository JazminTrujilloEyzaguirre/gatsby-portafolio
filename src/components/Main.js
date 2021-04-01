import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic03 from '../images/pic03.jpg'
import Cards from './cards'
import mainStyle from './main.module.scss'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sobre mi</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          Me considero una persona organizada, puntual y respetuosa. 
          En cuanto al trabajo en equipo me s iento bastante cómoda, 
          tengo la habilidad de adaptarme fácilmente a la necesidad que 
          se requiera. Igualmente puedo trabajar administrando mi tiempo y 
          sin supervisión. Me encanta aprender cosas nuevas y mejorar las habilidades que ya poseo. 
          Tengo ansias de aplicar los conocimientos que he adquirido hasta ahora.
          </p>
          <p>
          Este sitio web, es mi portafolio. En el encontraras información sobre mi, y como contactarte conmigo. 
          Además en la sección "Proyectos" encontraras algunos trabajos donde demuestro el uso de varias tecnologías. 
          Por ultimo en el apartado "Blog" podrás encontrar Posts sobre Programación y "paso a paso" de algún proyecto. 
          Have Fun!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Poryectos</h2>
          {close}
          {/* CARDS */}
          <Cards> </Cards>
          {/* CARDS */}
          
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Blog</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          <br/>
          <div className={mainStyle.boton}>
              <a href="https://jolly-torvalds-569eff.netlify.app/"> Visitar</a>
          </div>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/jazm%C3%ADn-jahaziel-trujillo-a4380919a/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkein</span>
              </a>
            </li>
            <li>
              <a href="https://t.me/parsiomnium" className="icon fa-telegram">
                <span className="label">Telegrm</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/JazminTrujilloEyzaguirre"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
