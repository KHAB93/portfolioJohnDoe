import React from "react";
import "./index.css";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

import Accueil from './pages/Accueil'; 
import Services from './pages/Services'; 
import Realisations from './pages/Realisations'; 
import Blog from './pages/Blog'; 
import Contact from './pages/Contact'; 
import Mentionslegales from './pages/Mentionslegales'; 
import Profilgithub from './pages/Profilgithub'; 
import Img1 from './images/github.png';
import Img2 from './images/twitter.png';
import Img3 from './images/linkedin.png';



export default function App() {

    
    

    return (
      

        <div className="App">

        
            <nav>

            

                <Link to= "/">JOHN DOE</Link>
                <Link to= "/">ACCUEIL</Link>
                <Link to= "/services">SERVICES</Link>
                <Link to= "/realisations">REALISATIONS</Link>
                <Link to= "/blog">BLOG</Link>
                <Link to= "/contact">ME CONTACTER</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Accueil/>}></Route>
                <Route path="/" element={<Accueil/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/realisations" element={<Realisations/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/mentionslegales" element={<Mentionslegales/>}></Route>
                <Route path="/profilgithub" element={<Profilgithub/>}></Route>
            </Routes>

            
            <footer>
                <div class="footer-columns">
                    <div class="footer-column">
                        <h4>John Doe</h4>
                        <ul>
                            <li>40 Rue Laure Diebold <br>
                            </br>
                                69009 Lyon, France </li>
                            <li>Téléphone: 06 20 30 40 50</li>
                            <a href="https://github.com/">
                                <img src={Img1} alt="" className="my-social-media" />
                            </a>
                            <img src={Img2} alt="" className="my-social-media" /> 
                            <img src={Img3} alt="" className="my-social-media" /> 
                            
                            
                        </ul>
                    </div>

                <div class="footer-column">
                        <h4>Liens utiles</h4>
                        <ul>
                            <li><Link to= "/">Accueil</Link></li>
                            <li><Link to= "/">A propos</Link></li>
                            <li><Link to= "/services">Services</Link></li>
                            <li><Link to= "/contact">Me contacter</Link></li>
                            <li><Link to= "/mentionslegales">Mentionslegales</Link></li>
                            <li><Link to= "/profilgithub">Profilgithub</Link></li>
                        </ul>
                </div>
    
                <div class="footer-column">
                        <h4>Mes dernières réalisations</h4>
                        <ul>
                            <li><Link to= "/realisations">Fresh food</Link></li>
                            <li><Link to= "/realisations">Restaurant Akira</Link></li>
                            <li><Link to= "/realisations">Espace bien-être</Link></li>
                        </ul>
                </div>

                <div class="footer-column">
                        <h4>Mes derniers articles</h4>
                        <ul>
                            <li><Link to= "/blog">Coder son site en HTML/CSS</Link></li>
                            <li><Link to= "/blog">Vendre ses produits sur le web</Link></li>
                            <li><Link to= "/blog">Espace bien-être</Link></li>
                        </ul>
                </div>

                
  
  
                </div>
                </footer>

               <div className="container-designed">

                    <p>&copy; Designed by John Doe</p>

               </div>
        

                

            </div>



        
    );
}


