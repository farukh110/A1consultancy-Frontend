import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import banner from '../../../assets/images/banner.jpg';
import './index.scss';

const Banner = (props) => {

    let { bannerImage, mediumText, mediumBelowText, bannerContent, dynamicClass } = props;

    return (
        <>
            {/* slider-start */}
            <div className="slider-area pos-relative">
                <div className="slider-active">
                    <div
                        className="single-slider slider-height d-flex align-items-center justify-content-center"
                        style={{
                            backgroundImage: `url(${bannerImage})`
                        }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="slider-content slider-content-2">
                                        <h1
                                            className="white-color f-700"
                                            data-animation="fadeInUp"
                                            data-delay=".2s"
                                        >
                                            <span style={{ fontSize: dynamicClass?.fontSize, color: dynamicClass?.color }}>{mediumText}</span>
                                            <br />
                                            {mediumBelowText}
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay=".4s">
                                            {bannerContent}
                                        </p>
                                        {/* <button
                                            className="theme-btn"
                                            data-animation="fadeInUp"
                                            data-delay=".6s"
                                        >
                                            <span className="btn-text">admit now</span>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* slider-end */}
        </>

    )
}

export default Banner