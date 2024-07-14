import React from 'react';
import Img1 from '../images/john-doe-about.jpg';
import Img2 from '../images/graphique.png';


function Accueil() {
  return (

    <div className="containerheader">


      <section className="containerhead">

        <div className="content">

        <h1>Bonjour, je suis John Doe</h1>
        <p>Développeur web full stack</p>
        <a href="#">En savoir plus</a>

        </div>

      </section>


      <div className="apropos-columns">

        <div className='containercolumns'>

        <div class="apropos-column">
          <h4>A propos</h4>
          
          <ul>
            <li>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF.
            <br />
            Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.
            <br />
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeur web full stack.
            <br />
              J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
            </li>
          </ul>
        </div>

        <div class="apropos-column">

          <img src={Img1} alt="" className="my-image-img1" /> 
          <img src={Img2} alt="" className="my-image-img2" /> 
          
          <ul>
            
          </ul>
        </div>
      </div>



        </div>

        

    </div>





  )
}

export default Accueil

