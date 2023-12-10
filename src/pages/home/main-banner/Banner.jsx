import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../../../assets/images/banner.jpg';
import './index.scss';

const Banner = () => {
    return (
        <>
            {/* slider-start */}
            <div className="slider-area pos-relative">
                <div className="slider-active">
                    <div
                        className="single-slider slider-height d-flex align-items-center justify-content-center"
                        style={{
                            backgroundImage: `url(${banner})`
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-md-12">
                                    <div className="slider-content slider-content-2">
                                        <h1
                                            className="white-color f-700"
                                            data-animation="fadeInUp"
                                            data-delay=".2s"
                                        >
                                            <span>A1 Consultancy on</span>
                                            <br />
                                            Digitalization
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay=".4s">
                                            A1 consultancy is a versatile IT and BPO firm specializing in providing comprehensive solutions for Customer Relationship Management (CRM) and Accounts management. With a dedicated team of professionals, they leverage cutting-edge technology to streamline business processes, ensuring efficiency and client satisfaction in every aspect of their services.
                                        </p>
                                        <button
                                            className="theme-btn"
                                            data-animation="fadeInUp"
                                            data-delay=".6s"
                                        >
                                            <span className="btn-text">admit now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div
                        className="single-slider slider-height d-flex align-items-center justify-content-center"
                        style={{
                            backgroundImage:
                                "url(https://wphix.com/template/sikkha-prv/sikkha/img/slider/2.jpg)"
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-md-12 offset-xl-2">
                                    <div className="slider-content slider-content-2 text-center">
                                        <h1
                                            className="white-color f-700"
                                            data-animation="fadeInUp"
                                            data-delay=".2s"
                                        >
                                            <span>Admition Going On</span>
                                            <br />
                                            Eduara University
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay=".4s">
                                            Sorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                            eiusmod tempor <br /> incididunt ut labore et dolore magna
                                            aliqua enim ad minime.
                                        </p>
                                        <button
                                            className="theme-btn"
                                            data-animation="fadeInUp"
                                            data-delay=".6s"
                                        >
                                            <span className="btn-text">admit now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="single-slider slider-height d-flex align-items-center justify-content-center"
                        style={{
                            backgroundImage:
                                "url(https://wphix.com/template/sikkha-prv/sikkha/img/slider/3.jpg)"
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-md-12">
                                    <div className="slider-content slider-content-2">
                                        <h1
                                            className="white-color f-700"
                                            data-animation="fadeInUp"
                                            data-delay=".2s"
                                        >
                                            <span>Admition Going On</span>
                                            <br />
                                            Eduara University
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay=".4s">
                                            Sorem ipsum dolor sit amet consectetur adipisicing elit sed do
                                            eiusmod tempor <br /> incididunt ut labore et dolore magna
                                            aliqua enim ad minime.
                                        </p>
                                        <button
                                            className="theme-btn"
                                            data-animation="fadeInUp"
                                            data-delay=".6s"
                                        >
                                            <span className="btn-text">admit now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* slider-end */}
        </>

    )
}

export default Banner