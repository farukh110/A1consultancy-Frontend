import React, { useState } from 'react'
import './index.scss';
import digitalM from '../../../../assets/images/services/digital-campaign.png';
import contactCenter from '../../../../assets/images/services/customer-service.png';
import video from '../../../../assets/images/services/video.png';
import offices from '../../../../assets/images/services/back-office.png';

const InnerServices = () => {

    const servicesData = [
        {
            id: 1,
            icon: digitalM,
            title: "Digital Marketing"
        },
        {
            id: 2,
            icon: contactCenter,
            title: "Contact Center",
        },
        {
            id: 3,
            icon: video,
            title: "Video Surveillance",
        },
        {
            id: 4,
            icon: offices,
            title: "Back Office Services",
        }
    ];

    const [items, setItems] = useState(servicesData);

    return (
        <>
            <section className="service_types_section pt-md-5 pt-5 pb-md-5 pb-5">
                <div className="container mb-md-4">
                    <div className="row mt-md-3 mt-3 mb-md-0 mb-4">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
                            <h4 className="seprator_heading_navy_blue_full text-uppercase text-center">
                                {" "}
                                Additional{" "}
                            </h4>
                            <h4
                                className="heading_black text-uppercase text-center mt-md-3 animate__ animate__slideInDown animate__repeat-1 animate__delay-2s 1s wow  animated"
                                data-wow-duration="0.7s"
                                data-wow-delay="0.2s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "0.7s",
                                    animationDelay: "0.2s",
                                    animationName: "slideInDown"
                                }}
                            >
                                {" "}
                                web development services{" "}
                            </h4>
                        </div>
                    </div>
                    <div className="row mt-lg-5 mt-md-2 mt-4 justify-content-center">

                        {items.map((item, index) => <div
                            key={index}
                            className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-7 
                            mb-md-0 mb-4 text-center animate__ animate__slideInLeft animate__repeat-1 
                            animate__delay-2s 1s wow  animated"
                            data-wow-duration="0.7s"
                            data-wow-delay="0.2s"
                            style={{
                                visibility: "visible",
                                animationDuration: "0.7s",
                                animationDelay: "0.2s",
                                animationName: "slideInLeft"
                            }}
                        >
                            <div className="service_type_shadow mb-md-5 mb-4 mt-lg-0 mt-md-5">
                                <div className="inner_shadow pt-md-4 pt-4 pb-md-4 pb-3">
                                    <img
                                        className="mx-auto d-block mt-md-3 mb-md-3 mb-3"
                                        src={item.icon}
                                        alt={item.title}
                                    />
                                </div>
                            </div>
                            <strong className="text-uppercase"> {item.title} </strong>
                        </div>)}

                    </div>
                </div>
            </section>

        </>
    )
}

export default InnerServices;