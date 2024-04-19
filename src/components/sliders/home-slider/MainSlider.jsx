import React, { useState, useEffect } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.scss';
import b1 from '../../../assets/images/slider/b1.jpg';
import b2 from '../../../assets/images/slider/b2.jpg';
import './index.scss';

const content = [
    {
        title: 'AoneConsultancy<br/>On Mission To Shape Future Success',
        description:
            'Accessing a World of Diversified Solutions for Your Business Problems where Ambition, Collaboration, and Outstanding Skills come together with Affordability',
        button: 'About Us',
        image: b1,
    },
    {
        title: 'Experience Outstanding Customer Support With Us',
        description:
            'Collaborate with us to Experience exceptional Professionalism and Commitment to Excellence',
        button: 'About Us',
        image: b2,
    },
];

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            const nextSlideIndex = (currentSlide + 1) % content.length;
            setCurrentSlide(nextSlideIndex);
        }, 5000); // Change slide every 5 seconds

        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <Slider className="slider-wrapper">
            {content.map((item, index) => (
                <div
                    key={index}
                    className={`slider-content ${index === currentSlide ? 'active' : ''}`}
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner">
                        <h1 dangerouslySetInnerHTML={{ __html: item.title }}></h1>
                        <p>{item.description}</p>
                        <button className="btn btn-danger">{item.button}</button>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default MainSlider;
