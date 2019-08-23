import React from 'react';

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



const Gallery = (props) => {
    return (
        <div className="row">
            { images.map(({id, thumb, image}) => 
                <figure className="col-md-2">
                    <a href={image}>
                        <img data-id={id} src={thumb} className="img-fluid" alt="19029 SW YORK ST" />
                    </a>
                </figure>
            ) } 
        </div> 
    )
}

export default Gallery;


