import React from 'react';
import Img1 from '../images/fleche-deroulante.png';


const Mentionslégales = () =>{

  


  return (

    <div className="containerMentions">

        <div className='TitleMentions'>
            <h1>MENTIONS LEGALES</h1>
        </div>

    <div class="dropdown">
      <button class="dropdown-button">
        <span>Éditeur du site</span>
        <img src={Img1} alt="" className="my-image-mentions" /> 
      </button>

  <div class="dropdown-content">
    <ul>
      <li>
        <h4>John Doe</h4>
        <ul>
          <li>40 Rue Laure Diebold</li>
          <li>69009 Lyon, France</li>
          <li>06 20 30 40 50</li>
          <li>john.doe@gmail.com</li>
        </ul>
      </li>
    </ul>
  </div>

</div>

<div class="dropdown">
      <button class="dropdown-button">
        <span>Hébergeur</span>
        <img src={Img1} alt="" className="my-image-mentions" /> 
      </button>

  <div class="dropdown-content">
    <ul>
      <li>
        <h4>Always Data</h4>
        <ul>
          <li>91 rue du Faubourg Saint Honoré</li>
          <li>75008 Paris</li>
        </ul>
      </li>
    </ul>
  </div>

</div>

<div class="dropdown">
      <button class="dropdown-button">
        <span>Crédits</span>
        <img src={Img1} alt="" className="my-image-mentions" /> 
      </button>

  <div class="dropdown-content">
    <ul>
      <li>
        <h4>Crédits</h4>
        <ul>
          <li>Site développé par John Doe, étudiant du CEF.</li>
          <li>les images libres de droit sont issues du site</li>
        </ul>
      </li>
    </ul>
  </div>

</div>

</div>

 
      
  )}

export default Mentionslégales
