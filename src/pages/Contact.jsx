import React, { useState } from 'react';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez envoyer les données du formulaire à votre serveur backend
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Numéro de téléphone:', phoneNumber);
    console.log('Sujet:', subject);
    console.log('Message:', message);
  };

  return (

    <div className="container-contact">

<div className="container">

<h2>ME CONTACTER</h2>
<p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>

<main>
<section className='contact-info'>

<section className="contact">

<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="name">Votre nom:</label>
  <input 
    type="text" 
    id="name" 
    value={name} 
    onChange={(e) => setName(e.target.value)} 
    required 
  />
</div>

<div className="form-group">
  <label htmlFor="email">Votre adresse email:</label>
  <input 
    type="email" 
    id="email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} 
    required 
  />
</div>

<div className="form-group">
  <label htmlFor="phoneNumber">Votre numéro de téléphone:</label>
  <input 
    type="tel" 
    id="phoneNumber" 
    value={phoneNumber} 
    onChange={(e) => setPhoneNumber(e.target.value)} 
  />
</div>

<div className="form-group">
  <label htmlFor="subject">Sujet:</label>
  <input 
    type="text" 
    id="subject" 
    value={subject} 
    onChange={(e) => setSubject(e.target.value)} 
  />
</div>

<div className="form-group">
  <label htmlFor="message"className='message'>Votre message:</label>
  <textarea 
    id="message" 
    value={message} 
    onChange={(e) => setMessage(e.target.value)} 
  />
</div>

<button type="submit"className='submit-button'>Envoyer</button>
</form>
</section>

<section className="info">
<div className="coordonnees">
<h3>Mes coordonnées</h3>
<p>40 Rue Laure Diebold, 69009 Lyon, France</p>
<p>06 20 30 40 50</p>
{/* Remplacer par une carte Google Maps */}
<div className="map">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.554879192211!2d4.837663315350787!3d45.76533497912757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f1b2613dd070a9%3A0x2196b7a7e0c460e!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1677744058494!5m2!1sfr!2sfr" 
    width="600" 
    height="450" 
    style={{ border: '0' }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
</div>


</section>



</section>



</main>


</div>





    </div>

    
    
  );
}

export default App;