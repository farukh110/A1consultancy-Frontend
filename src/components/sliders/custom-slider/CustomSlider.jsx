import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import b1 from '../../../assets/images/slider/b1.jpg';
import b2 from '../../../assets/images/slider/b2.jpg';

import './index.scss';


const CustomSlider = () => {

    const swiperRef = useRef(null);

    const content = [
        {
            title: 'AoneConsultancy <br/> On Mission To Shape Future Success',
            description:
                'Accessing a World of Diversified Solutions for Your Business Problems where Ambition, Collaboration, and <br/> Outstanding Skills come together with Affordability',
            button: 'About Us',
            image: b1,
        },
        {
            title: 'Experience Outstanding<br> Customer Support With Us',
            description:
                'Collaborate with us to Experience exceptional Professionalism and Commitment to Excellence',
            button: 'About Us',
            image: b2,
        },
    ];

    const handleSwiperInit = (swiper) => {
        swiper.on('slideChange', () => {
            animateSlideContent();
        });
    };

    const animateSlideContent = () => {
        const slideContents = document.querySelectorAll('.swiper-slide-active .slide-content');
        slideContents.forEach((content) => {
            content.querySelector('h2')?.classList?.add('slideInH2');
            content.querySelector('p')?.classList?.add('slideInP');
            content.querySelector('button')?.classList?.add('slideInButton');
        });
    };

    return (
        <>
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                rewind={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                onSwiper={handleSwiperInit}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                effect="fade"
            >
                {content.map((slide, index) => (
                    <SwiperSlide key={index} style={{ backgroundImage: `url(${slide?.image})` }}>
                        <div className="slide-content">
                            <h1 dangerouslySetInnerHTML={{ __html: slide?.title }}></h1>
                            <p dangerouslySetInnerHTML={{ __html: slide?.description }}></p>
                            <button className='btn btn-primary'>{slide?.button}</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CustomSlider;
