import React from 'react';
import './App.css';
import './styles.scss'
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <nav className="site-header sticky-top py-1  font-weight-bold shadow-sm">
        {/* <div className="container d-flex flex-column flex-md-row text-center display-5"> */}
        <div className="container text-center display-5">

          {/* <a className="py-2" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          </a> */}
          <div className="">
            <div className="display-5 text-uppercase"><img src="/images/address.png" alt="19029 SW YORK ST" /></div>
            <div className="display-6"><a href="mailto:aubrey@aubreymartin.com"><i class="far fa-envelope"></i> aubrey@aubreymartin.com</a> <span className="d-none d-sm-inline"> |</span> <span className="d-none d-sm-inline"><i class="fas fa-phone"></i> 503.443.8889</span><span className="d-sm-block d-md-none"><br /><a href="tel:5034438889"><i class="fas fa-phone"></i> 503.443.8889</a></span></div>
          </div>
        </div>
      </nav>
      
      <div className="position-relative overflow-hidden text-center">
          <img src="/images/title-1.jpg" className="title-img" alt="19029 SW YORK ST" />
      </div>


      <div className="position-relative overflow-hidden p-md-3 m-md-1 text-center">
        <div className="col-md-8 p-lg-8 mx-auto my-5"> 
          <h5 className="display-4 font-weight-bold">19029 SW YORK ST</h5>
          <h4 className="display-5 font-weight-light text-muted">Beaverton, Oregon 97003</h4>
          <h6 className="display-4 text-secondary">$439,900</h6>
        </div>
      </div>
      
      <div className="position-relative overflow-hidden text-center">
        <div className="col-md-8 mx-auto my-5 blurb"> 
          {/* <p className="display-5">4 bedrooms (with an amazing master suite), green space surrounding, 2 fireplaces, extra parking, and upgrades throughout.</p> */}
          <ul>
            <li>4 bedrooms with a huge master suite</li>
            <li>Upgraded carpet, new paint, engineered hardwoods, cherry cabinets</li>
            <li>Protected green space on three sides</li>
            <li>Extra parking</li>
            <li>Blocks from a newly-planned Park</li>
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-6 col-md-3 bg-light  text-center overflow-hidden">
            <div className="icon-holder">
              <i class="fas fa-bed"></i>
            </div>
            <div className="my-0">
                <p className="lead">4 Bedrooms</p>
            </div>
          </div>

          <div class="col-6 col-md-3 bg-light  px-3 text-center overflow-hidden">
            <div className="icon-holder">
            <i class="fas fa-bath"></i>
            </div>
            <div className="my-0">
                <p className="lead">2.5 bath</p>
            </div>
          </div>

          <div class="col-6 col-md-3 bg-light text-center overflow-hidden">
            <div className="icon-holder">
              <i class="fas fa-ruler-combined"></i>
            </div>
            <div className="my-0">
                <p className="lead">2200+ Sq Ft</p>
            </div>
          </div>

          <div class="col-6 col-md-3 bg-light  text-center overflow-hidden">
            <div className="icon-holder">
              <i class="fas fa-tree"></i>
            </div>
            <div className="my-0">
                <p className="lead">3900 sq ft lot</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
        <Gallery />
      </div>

      
      <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
          <iframe title="19029 SW YORK ST" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2825569169536!2d-122.87309166934422!3d45.504390362994286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950e537d9e8d51%3A0x1807512ed5a97b79!2s19029+SW+York+St%2C+Beaverton%2C+OR+97006!5e0!3m2!1sen!2sus!4v1565062436446!5m2!1sen!2sus" width="100%" height="450" frameborder="0"  allowfullscreen></iframe>
      </div>

      <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
        <iframe width="100%" title="19029 SW YORK ST" height="685" src="https://www.youtube.com/embed/Emsa76EvOXU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <footer className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
        <div className="row justify-content-md-center mb-5">
          <div className=" col col-12 col-lg-2">
            <img src="/images/face.jpg" className="img-fluid" alt="Aubrey Martin Real Estate Agent Portland Oregon" />
          </div>
          <div className=" col text-center col-md-7 display-5 font-weight-bold pt-4">
            <h2>Aubrey Martin, CEO</h2>
            <h3><a href="mailto:aubrey@aubreymartin.com">aubrey@aubreymartin.com</a> | <span className="d-none d-sm-inline"><i class="fas fa-phone"></i> 503.443.8889</span><span className="d-sm-block d-md-none"><a href="tel:5034438889"><i class="fas fa-phone"></i> 503.443.8889</a></span></h3>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col col-md-9">
            <img src="/images/Aubrey_logo.png" className="img-fluid" alt="Aubrey Martin Real Estate Agent Portland Oregon" />
          </div>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
