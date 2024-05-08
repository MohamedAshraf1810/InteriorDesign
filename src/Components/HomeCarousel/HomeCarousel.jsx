import React from 'react'
import './HomeCarousel.scss'
import Carousel from 'react-bootstrap/Carousel';

import TravelImage1 from '../../static/Images/Carousel/travel-slider-01.jpg'
import TravelImage2 from '../../static/Images/Carousel/travel-slider-02.jpg'
import TravelImage3 from '../../static/Images/Carousel/travel-slider-03.jpg'

const HomeCarousel = () => {
    return (
        <>
            <Carousel data-bs-theme="dark" indicators={true} interval={20000} className="custom-carousel">
                {carouselItems.map(({ id, img, caption }) => (
                    <Carousel.Item key={id}>
                        <div className='sliderCaptionSquare'>
                            <p className='sliderCaption'>{caption}</p>
                            <button className='sliderMoreButton'>LOOK MORE</button>
                        </div>

                        <img
                            className="d-block w-100 sliderImage"
                            src={img}
                            alt="img"
                        />
                    </Carousel.Item>
                ))}

            </Carousel>
        </>
    )
}

export default HomeCarousel

// Carousel Data
const carouselItems = [
    { id: "1", img: TravelImage1, caption: 'IMAGINATION, INNOVATION, WORK COLLABORATION.' },
    { id: "2", img: TravelImage2, caption: 'COLLECTIVE DESIGN, INTERIOR DESIGN PRACTICE' },
    { id: "3", img: TravelImage3, caption: ' COMMERCIAL INTERIORS, OFFICE DESIGN & FIT OUT' },
];
