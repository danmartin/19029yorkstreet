import React from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App container">
      <nav className="site-header sticky-top py-1  font-weight-bold shadow-sm">
        {/* <div className="container d-flex flex-column flex-md-row text-center display-5"> */}
        <div className="container text-center display-5">

          {/* <a className="py-2" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          </a> */}
          <div className="py12 d-none d-md-inline-block">
            <div className="display-5 text-uppercase"><img src="/images/address.jpg" alt="19029 SW YORK ST" /></div>
            <div className="display-6"><a href="mailto:aubrey@aubreymartin.com">aubrey@aubreymartin.com</a> | 503.443.8889</div>
          </div>
        </div>
      </nav>
      
      <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
          <img src="/images/title-1.jpg" className="title-img" alt="19029 SW YORK ST" />
      </div>


      <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
        <div className="col-md-8 p-lg-8 mx-auto my-5">
          <h5 className="display-4 font-weight-bold">19029 SW YORK ST</h5>
          <h4 className="display-5 font-weight-light text-muted">Beaverton, Oregon 97203</h4>
          <h6 className="display-4 text-secondary">$449,900</h6>
        </div>
      </div>



      <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
        <div className="row">
          <div className="col">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div className="my-3 py-3">
                <p className="lead">4 Bedrooms</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div className="my-3 py-3">
                <p className="lead">2.5 Bathrooms</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div className="my-3 py-3">
                <p className="lead">2200+ Sq Ft</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="bg-light  pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
              <div className="my-3 py-3">
                <p className="lead">3900 sq ft lot</p>
              </div>
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
          <div className=" col col-md-2">
            <img src="/images/face.jpg" className="img-fluid" alt="Aubrey Martin Real Estate Agent Portland Oregon" />
          </div>
          <div className=" col text-center col-md-7 display-5 font-weight-bold pt-4">
            <h2>Aubrey Martin, CEO</h2>
            <h3><a href="mailto:aubrey@aubreymartin.com">aubrey@aubreymartin.com</a> | 503.443.8889</h3>
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
