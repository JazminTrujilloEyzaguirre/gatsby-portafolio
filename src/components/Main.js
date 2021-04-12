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
          En cuanto al trabajo en equipo me siento bastante cómoda, 
          tengo la habilidad de adaptarme fácilmente a la necesidad que 
          se requiera. Igualmente puedo trabajar administrando mi tiempo y 
          sin supervisión. Me encanta aprender cosas nuevas y mejorar las habilidades que ya poseo. 
          Tengo ansias de aplicar los conocimientos que he adquirido hasta ahora.
          </p>
          <br/>
          <p>
            En mi tiempo libre suelo hace deporte, me gusta caminar, y descubrir musica nueva. Leo de todo y amo la tecnología y sus posibilidades. 
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
          <h2 className="major">Diseño UI/UX</h2>
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
          <p>Si quieres mas informacion enviame un mensaje directo por telegram, tambien puedes ver mis repositorios en github o checkear mi perfil en linkedin. ¡Que tengas un lindo día! </p>
          <br/>
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
