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
                Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
                at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
                urna nisi, fringila lorem et vehicula lacinia quam. Integer
                sollicitudin mauris nec lorem luctus ultrices.
              </p>
              <div className={mainStyle.boton}>
                <a href="#"> Visitar</a>
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
                Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
                at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
                urna nisi, fringila lorem et vehicula lacinia quam. Integer
                sollicitudin mauris nec lorem luctus ultrices.
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
                Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
                at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
                urna nisi, fringila lorem et vehicula lacinia quam. Integer
                sollicitudin mauris nec lorem luctus ultrices.
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
                Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
                at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
                urna nisi, fringila lorem et vehicula lacinia quam. Integer
                sollicitudin mauris nec lorem luctus ultrices.
              </p>
              <div className={mainStyle.boton}>
                <a href="#"> Visitar</a>
              </div>
              <br/>
        </div>
    </div>
    
)

export default Cards