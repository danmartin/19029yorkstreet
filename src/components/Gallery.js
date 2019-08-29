import React from 'react';
// import Lightbox from './components/Lightbox';

const images =[
    { id: 1, thumb: '/images/thumbs/image-1.jpg', image: '/images/image-1.jpg' },
    { id: 2, thumb: '/images/thumbs/image-2.jpg', image: '/images/image-2.jpg' },
    { id: 3, thumb: '/images/thumbs/image-3.jpg', image: '/images/image-3.jpg' },
    { id: 4, thumb: '/images/thumbs/image-4.jpg', image: '/images/image-4.jpg' },
    { id: 5, thumb: '/images/thumbs/image-5.jpg', image: '/images/image-5.jpg' },
    { id: 6, thumb: '/images/thumbs/image-6.jpg', image: '/images/image-6.jpg' },
    { id: 7, thumb: '/images/thumbs/image-7.jpg', image: '/images/image-7.jpg' },
    { id: 8, thumb: '/images/thumbs/image-8.jpg', image: '/images/image-8.jpg' },
    { id: 9, thumb: '/images/thumbs/image-9.jpg', image: '/images/image-9.jpg' },
    { id: 10, thumb: '/images/thumbs/image-10.jpg', image: '/images/image-10.jpg' },
    { id: 11, thumb: '/images/thumbs/image-11.jpg', image: '/images/image-11.jpg' },
    { id: 12, thumb: '/images/thumbs/image-12.jpg', image: '/images/image-12.jpg' },
    { id: 13, thumb: '/images/thumbs/image-13.jpg', image: '/images/image-13.jpg' },
    { id: 14, thumb: '/images/thumbs/image-14.jpg', image: '/images/image-14.jpg' },
    { id: 15, thumb: '/images/thumbs/image-15.jpg', image: '/images/image-15.jpg' },
    { id: 16, thumb: '/images/thumbs/image-16.jpg', image: '/images/image-16.jpg' },
    { id: 17, thumb: '/images/thumbs/image-17.jpg', image: '/images/image-17.jpg' },
    { id: 18, thumb: '/images/thumbs/image-18.jpg', image: '/images/image-18.jpg' },
    { id: 19, thumb: '/images/thumbs/image-19.jpg', image: '/images/image-19.jpg' },
    { id: 20, thumb: '/images/thumbs/image-20.jpg', image: '/images/image-20.jpg' },
    { id: 21, thumb: '/images/thumbs/image-21.jpg', image: '/images/image-21.jpg' },
    { id: 22, thumb: '/images/thumbs/image-22.jpg', image: '/images/image-22.jpg' },
    { id: 23, thumb: '/images/thumbs/image-23.jpg', image: '/images/image-23.jpg' },
    { id: 24, thumb: '/images/thumbs/image-24.jpg', image: '/images/image-24.jpg' },
    { id: 25, thumb: '/images/thumbs/image-25.jpg', image: '/images/image-25.jpg' },
];




class Gallery extends React.Component {
    constructor() {
        super();
        this.state = { show: false };
    }
     
    toggleModal = (id) => {
        this.setState({
            image_id: id,
            show: !this.state.show,
            image: images[(id -1)]
        });
    }
    previousImage = (id) => {
        if (id > 1) {
            this.setState({
                image_id: id - 1,
                show: true,
                image: images[(id - 2)]
            });
        }
        
    }

    nextImage = (id) => {
        if (id < images.length) {
            this.setState({
                image_id: id + 1,
                show: true,
                image: images[(id)]
            });
        }
        
    }

    render() {
        return (
            <div className="row">
                { images.map(({id, thumb, image}) => 
                    <figure key={id} className="col-6 col-sm-6 col-md-2">
                        <img data-id={id} src={thumb} className="img-fluid" alt={this.props.config_data.display_address} onClick={() => {this.toggleModal(id)}}/>
                    </figure>
                ) } 
                {this.state.show ? (
                    <div className="overlay overlay-effect">
                        {this.state.image_id > 1 ? (<button type="button" className="left-arrow" onClick={() => {this.previousImage(this.state.image_id)}}>Previous</button>) :null}
                        {this.state.image_id < images.length ? (<button type="button" className="right-arrow" onClick={() => {this.nextImage(this.state.image_id)}}>Forward</button>) :null}
                        <button type="button" className="close"  onClick={() => {this.toggleModal(0)}}>Close</button>
                        <div className="helper">
                            <img data-id={this.state.image_id} src={this.state.image.image}  alt={this.props.config_data.display_address} />
                        </div>
                    </div>
                ) : null}
            </div> 
        )
    }
}

export default Gallery;


