import React from 'react';
import Img1 from '../images/coder.jpg';
import Img2 from '../images/croissance.jpg';
import Img3 from '../images/google.jpg';
import Img4 from '../images/screens.jpg';
import Img5 from '../images/seo.jpg';
import Img6 from '../images/technos.png';


const Blog = () => {
    return (

    <div className='containerblog'>

        <div className='blogheader'>
        
        </div>

        <div className='Titleblog'>
            <h1>BLOG</h1>
            <p>Retrouvez ici quelques articles sur le développement web.</p>
        </div>

<div className='container-blog'>

    <div>
        <img src={Img1} alt="" className="my-image-class" /> 
        <h1>Coder son site en HTML/CSS</h1>
        <br />
        <p>Some quick example text to build on the card title and make up the bulk ok the card's content.</p>
        <br />
        <a href="#">Lire la suite</a>
        <br />
    </div>


    <div>
        <img src={Img2} alt="" className="my-image-class" /> 
        <h1>Vendre ses produits sur le web</h1>
        <br />
        <p>Some quick example text to build on the card title and make up the bulk ok the card's content.</p>
        <br />
        <a href="#">Lire la suite</a>
    </div>


    <div>
        <img src={Img3} alt="" className="my-image-class" /> 
        <h1>Se positionner sur Google</h1>
        <br />
        <p>Some quick example text to build on the card title and make up the bulk ok the card's content.</p>
        <br />
        <a href="#">Lire la suite</a>
    </div>


    <div>
        <img src={Img4} alt="" className="my-image-class" /> 
        <h1>Coder en responsive design</h1>
        <br />
        <p>Some quick example text to build on the card title and make up the bulk ok the card's content.</p>
        <br />
        <a href="#">Lire la suite</a>
    </div>


    <div>
        <img src={Img5} alt="" className="my-image-class" /> 
        <h1>Techniques de référencement</h1>
        <br />
        <p>Some quick example text to build on the card title and make up the bulk ok the card's content.</p>
        <br />
        <a href="#">Lire la suite</a>
    </div>


    <div>
        <img src={Img6} alt="" className="my-image-class" /> 
        <h1>Apprendre à coder</h1>
        <br />
        <p>Some quick example text to build on the card title and make up the bulk ok the card's content.</p>
        <br />
        <a href="#">Lire la suite</a>

    </div>



</div>

</div>



    )
}

export default Blog;