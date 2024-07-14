import React from 'react';
import Img1 from '../images/ecran-bleu.png';
import Img2 from '../images/dossier.png';
import Img3 from '../images/referencement.png';


const Services = () => {
    return (

    <div className='containerservices'>

        <div className='servicesheader'>

        </div>


        <div className='servicescontent'>

            <div className='Titleservices'>

             
            <h1>MON OFFRE DE SERVICES</h1>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>

            </div>

           
            <div className='container-services'>

                <div>
                    <img src={Img1} alt="" className="my-image-service" /> 
                    <br />
                    <h1>UX DESIGN</h1>
                    <br />
                    <p>L'UX Design est une méthode de conception centrée sur l'utilisation. Son but est d'offrir une expérience de navigation optimale à l'internaute</p>

                </div>

                <br/>

                <div>
                    <img src={Img2} alt="" className="my-image-service" /> 
                    <br />
                    <h1>DEVELOPPEMENT WEB</h1>
                    <br />
                    <p>Le développement de sites web repose sur l'utilisation des langages HTML,CSS, Javascript et PHP.</p>

                </div>
                <br/>

                <div>
                    <img src={Img3} alt="" className="my-image-service" /> 
                    <br />
                    <h1>REFERENCEMENT</h1>
                    <br />
                    <p>Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>

                </div>
                <br/>

            </div>
                


        </div>

        

    </div>
        
    )
}

export default Services;