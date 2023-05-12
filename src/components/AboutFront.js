import '../style/AboutFront.css'
import arrow from '../images/arrow.png'

function AboutFront() {
    return (
      <div className="AboutFront">
        <div className="cover-box">
            <h1 className="group-name-title">E-Telligence</h1>
            <h2 className="catch-phrase">Scraping The Web For The Best Products</h2>
            <p className='description'>
            Our web crawling API finds and returns links to online 
            retailers where the queried product is available, simplifying 
            the process of comparing prices and finding the best deals for shoppers</p>
        </div> 



        <div className="arrow bounce">
            <img className='arrow-img' src= {arrow}/>
        </div> 
      </div>
    );
  }
  
  export default AboutFront;