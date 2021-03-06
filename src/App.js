import React from 'react';
import './App.css';
import './styles.scss'
import Gallery from './components/Gallery';
const config_data = {
  agent: {
    name: "Aubrey Martin",
    phone: "503.443.8889",
    email: "aubrey@aubreymartin.com"
  },
  full_address: {street: "19029 SW YORK ST", city: "Beaverton", state:"Oregon", zipcode: "97003"},
  display_address: "19029 SW YORK ST",
  property: {
    listing_price: "$439,900",
    bedrooms: "4",
    baths: "2.5",
    sq_feet: "2200+",
    lot_size: "3900",
    rmls: "19448021",
    built_in: "2005",
    blurb: "Pristine 4 bedroom/2.5 bath home located on a quiet dead-end street, surrounded by protected greenspace and trails. Formal dining room, hardwood floors, huge living room, and gourmet kitchen. Kitchen includes granite countertops, cherry cabinets, breakfast bar, and stainless-steel appliances. Attached, 2-car garage and a private backyard with a trex deck, new deck stain, new interior and exterior paint, central vac, and central a/c. Master suite features gas fireplace, jetted tub, double sinks, large walk-in closet, and balcony!",
    ammenities: [
      {id:1 , item:"4 bedrooms with a huge master suite"},
      {id:2 , item:"Upgraded carpet, new paint, engineered hardwoods, cherry cabinets"},
      {id:3 , item:"Protected green space on three sides"},
      {id:4 , item:"Extra parking"},
      {id:5 , item:"Blocks from a newly-planned Park"},
      {id:6 , item:"Formal dining"},
      {id:7 , item:"Central a/c, central vac"}
    ]
  }
};

function App() {
  return (
    <div className="App">
      <nav className="site-header sticky-top py-1  font-weight-bold shadow-sm">
        <div className="container text-center display-5">
          <div className="">
            <div className="display-5 text-uppercase"><img src="/images/address.png" alt={config_data.display_address} /></div>
            <div className="display-6"><a href={"mailto:"+config_data.agent.email}><i className="far fa-envelope"></i> {config_data.agent.email}</a> <span className="d-none d-sm-inline"> |</span> <span className="d-none d-sm-inline"><i className="fas fa-phone"></i> {config_data.agent.phone}</span><span className="d-sm-block d-md-none"><br /><a href={"tel:"+config_data.agent.phone}><i className="fas fa-phone"></i> {config_data.agent.phone}</a></span></div>
          </div>
        </div>
      </nav>
      
      <div className="position-relative overflow-hidden text-center">
          <img src="/images/title-1.jpg" className="title-img" alt={config_data.display_address} />
      </div>


      <div className="position-relative overflow-hidden p-md-3 m-md-1 text-center">
        <div className="col-md-8 p-lg-8 mx-auto my-5"> 
          <h5 className="display-4 font-weight-bold">{config_data.display_address}</h5>
          <h4 className="display-5 font-weight-light text-muted">{config_data.full_address.city}, {config_data.full_address.state} {config_data.full_address.zipcode}</h4>
          <h6 className="display-4 text-secondary">{config_data.property.listing_price}</h6>
        </div>
      </div>
      
      <div className="position-relative overflow-hidden text-center">
        <div className="col-md-8 mx-auto my-5 blurb"> 
          <p className="pb-5">{config_data.property.blurb}</p>
          <ul>
            { config_data.property.ammenities.map(({item, id}) =>
                <li key={id}>{item}</li>
            ) }
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3  text-center overflow-hidden mb-3npm">
            <div className="mx-auto py-3 bg-light rounded">
            <div className="icon-holder">
              <i className="fas fa-bed"></i>
            </div>
            <div className="my-0">
                <p className="lead">{config_data.property.bedrooms} Bedrooms</p>
            </div>
            </div>
          </div>

          <div className="col-6 col-md-3   px-3 text-center overflow-hidden mb-3">
            <div className="mx-auto py-3 bg-light rounded">
            <div className="icon-holder">
            <i className="fas fa-bath"></i>
            </div>
            <div className="my-0">
                <p className="lead">{config_data.property.baths} bath</p>
            </div>
            </div>
          </div>

          <div className="col-6 col-md-3 text-center overflow-hidden mb-3">
            <div className="mx-auto py-3 bg-light rounded">
            <div className="icon-holder">
              <i className="fas fa-ruler-combined"></i>
            </div>
            <div className="my-0">
                <p className="lead">{config_data.property.sq_feet} Sq Ft</p>
            </div>
            </div>
          </div>

          <div className="col-6 col-md-3 text-center overflow-hidden mb-3">
            <div className="mx-auto py-3 bg-light rounded">
              <div className="icon-holder">
                <i className="fas fa-tree"></i>
              </div>
              <div className="my-0">
                  <p className="lead">{config_data.property.lot_size} sq ft lot</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="container">
        <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
          <Gallery config_data={config_data} />
        </div>

      <div className="row">
        <div className="col-6 col-md-6  text-center overflow-hidden mb-3npm">
          <div className="mx-auto py-3 bg-light rounded">
          <div className="icon-holder">
            <i className="fas fa-hammer"></i>
          </div>
          <div className="my-0">
              <p className="lead">Built in {config_data.property.built_in}</p>
          </div>
          </div>
        </div>

        <div className="col-6 col-md-6   px-3 text-center overflow-hidden mb-3">
          <div className="mx-auto py-3 bg-light rounded">
          <div className="icon-holder">
          <i className="fas fa-home"></i>
          </div>
          <div className="my-0">
              <p className="lead">RMLS# {config_data.property.rmls}</p>
          </div>
          </div>
        </div>
      </div>
      
      <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
          <iframe
            title="19029 SW YORK ST"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2825569169536!2d-122.87309166934422!3d45.504390362994286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950e537d9e8d51%3A0x1807512ed5a97b79!2s19029+SW+York+St%2C+Beaverton%2C+OR+97006!5e0!3m2!1sen!2sus!4v1565062436446!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen>
          </iframe>
      </div>

        <div className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
          <iframe width="100%" title="19029 SW YORK ST" height="685" src="https://www.youtube.com/embed/Emsa76EvOXU"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

      </div>

      <footer className="position-relative overflow-hidden p- p-md-3 m-md-1 text-center">
        <div className="row justify-content-md-center mb-5">
          <div className=" col col-12 col-lg-2">
            <img src="/images/face.jpg" className="img-fluid" alt="Aubrey Martin Real Estate Agent Portland Oregon" />
          </div>
          <div className=" col text-center col-md-7 display-5 font-weight-bold pt-4">
          <div className="row justify-content-md-center">
            <div className="col col-md-9">
              <img src="/images/Aubrey_logo.png" className="img-fluid" alt="Aubrey Martin Real Estate Agent Portland Oregon" />
            </div>
          </div>
            <h3><a href={"mailto:"+config_data.agent.email}>{config_data.agent.email}</a> | <span className="d-none d-sm-inline"><i className="fas fa-phone"></i> {config_data.agent.phone}</span><span className="d-sm-block d-md-none"><a href={"tel:"+config_data.agent.phone}><i className="fas fa-phone"></i> {config_data.agent.phone}</a></span></h3>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
