import React from 'react';
import Img1 from '../images/fresh-food.jpg';
import Img2 from '../images/restaurant-japonais.jpg';
import Img3 from '../images/espace-bien-etre.jpg';



const Realisations = () => {
    return (
    <div className='containerrealisations'>

        <div className='realisationsheader'>

        </div>

        <div className='Titleportfolio'>

        <h1>PORTFOLIO</h1>
        <p>Voici quelques-unes de mes réalisations.</p>

        </div>

       <div className='container-portfolio'>

            <div>
                <img src={Img1} alt="" className="my-image" /> 
                <br />
                <h1>Fresh food</h1>
                <br />
                <p>Réalisation d'un site avec commande en ligne.</p>
                <br />
                <a href="#">Voir</a>
                <h2>Site réalisé avec PHP et MySQL</h2>
            </div>


            <div>
                <img src={Img2} alt="" className="my-image" /> 
                <h1>Restaurant Akira</h1>
                <br />
                <p>Réalisation d'un site vitrine.</p>
                <br />
                <a href="#">Voir</a>
                <h2>Site réalisé avec Wordpress</h2>
            </div>



            <div>
                <img src={Img3} alt="" className="my-image" /> 
                <h1>Espace bien-être</h1>
                <br />
                <p>Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                <br />
                <a href="#">Voir</a>
                <h2>Site réalisé en HTML/CSS</h2>
            </div>



       </div>
        






    </div>
        








   
    )
}

export default Realisations;