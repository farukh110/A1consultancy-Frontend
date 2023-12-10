import React from 'react'
import './index.scss';
import InnerServices from './innner-services/InnerServices';

const Services = () => {
    return (
        <>
            <div className='container py-md-5 py-4'>

                <div className='content'>

                    <div className='row justify-content-center'>

                        <div className='col-md-10'>

                            <h5>ALLOW</h5>

                            <h3 className='raven-heading1'>A1 Consultancy
                                <span> to </span></h3>

                        </div>

                    </div>

                    <h3 className="raven-heading raven-heading-h3 text-md-center text-left">
                        <span className="raven-heading-title">
                            <span className="raven-heading-title-inner elementor-inline-editing">
                                Reinforce Your Organization’s Infrastructure
                            </span>
                        </span>
                    </h3>

                    <p className='my-md-4'>Harness the transformative potential of Data and let it guide you to favorable outcomes with our business analytics</p>

                    <h3 className="raven-heading raven-heading-h3 text-md-center text-left">
                        <span className="raven-heading-title">
                            <span
                                className="raven-heading-title-inner elementor-inline-editing"
                                data-text="Maneuver & Oversee The Influx of Data"
                                data-elementor-setting-key="title"
                            >
                                Maneuver &amp; Oversee The Influx of Data
                            </span>
                        </span>
                    </h3>

                    <p className='my-md-4'>An immersive experience that fuels fact-based decision making for the operational excellence of business models</p>

                    <h3 className="raven-heading raven-heading-h3 text-md-center text-left">
                        <span className="raven-heading-title">
                            <span
                                className="raven-heading-title-inner elementor-inline-editing"
                                data-text="Stratify a Cloud-based Ecosystem"
                                data-elementor-setting-key="title"
                            >
                                Stratify a Cloud-based Ecosystem
                            </span>
                        </span>
                    </h3>

                    <p className='my-md-4'>Encourage Cloud-based reforms that streamline innovation and compliment the efficiency of your business’ output</p>

                </div>

                <div className='row'>

                    <div className='col-md-4'>

                        <div className='box'>



                        </div>

                    </div>

                </div>

            </div>

            <InnerServices />
        </>
    )
}

export default Services;