import React from 'react'
import './index.scss';
import InnerServices from './innner-services/InnerServices';
import { Avatar, List } from 'antd';
import checkedIcon from '../../../assets/icons/icon.svg';

const Services = () => {

    const data = [
        {
            title: 'Use the latest tools and technologies',
        },
        {
            title: 'Fully grasp your needs.',
        },
        {
            title: 'Guaranteed to be 100% satisfied',
        },
        {
            title: 'Affordable solutions.',
        },
        {
            title: 'Coordinators communicated with promptness and effectiveness.',
        },
        {
            title: 'Dedicated project managers provide personalized assistance.',
        },
        {
            title: 'Timely completion of excellent work.',
        },
        {
            title: 'Establishing lasting relationships with customers.',
        },
        {
            title: 'Collaborating for your greatest possible advantage.',
        },
        {
            title: 'Work together on winning designs and popular companies.',
        },
        {
            title: 'Experience uniqueness, security, and customer service.',
        },
        {
            title: 'Outstanding service that meets expectations.'
        }
    ];

    return (
        <>
            <div className='container py-md-5 py-4'>

                <div className='content'>

                    <div className='row justify-content-center'>

                        <div className='col-md-10'>

                            <h5>WHY</h5>

                            <h3 className='raven-heading1'>CHOOSE
                                <span> US </span></h3>

                        </div>

                    </div>

                    <div className='row justify-content-center'>

                        <div className='col-md-10'>

                            <h3 className="raven-heading raven-heading-h3 text-left">
                                <span className="raven-heading-title">
                                    <span className="raven-heading-title-inner elementor-inline-editing">
                                        (Because Great ideas need a great platform to shine)
                                    </span>
                                </span>
                            </h3>


                            <p className='my-md-4'>At A1 Consultancy, we're here to visually bring your ideas to life. Our expert
                                teams handle complex problems with advanced digital solutions and a
                                smooth process. We offer extensive services like web development, video
                                monitoring, digital marketing, contact center, and back office services. Here's
                                what sets us unique:</p>

                            <List
                                itemLayout="horizontal"
                                className='custom-list'
                                dataSource={data}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            key={index}
                                            avatar={<Avatar src={checkedIcon} />}
                                            title={<h4>{item.title}</h4>}
                                        />
                                    </List.Item>
                                )}
                            />

                        </div>

                    </div>


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