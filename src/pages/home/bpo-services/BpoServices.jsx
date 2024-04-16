import React from 'react';
import { Link } from "react-router-dom";
import FancyHeading from '../../../components/controls/fancy-heading/FancyHeading';
import ItemService from './ItemService';
import './index.scss';

const BpoServices = () => {

    const dataItems = [
        {
            id: 1,
            title: 'Inbound Calling Services',
            service_back_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/inbound-call-center-690x375.jpg',
            service_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-150x150.png',
            service_image_hover: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-w-150x150.png',
            thumbnail_width: 150,
            thumbnail_height: 150,
            link: '/inbound',
            description: `Inbound calls refer to customer phone calls to a company's customer service...`,
            btn_readmore: 'READ MORE'
        },
        {
            id: 2,
            title: 'Outbound Calling',
            service_back_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Call-Center-690x375.jpg',
            service_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Outbond-Calling-150x150.png',
            service_image_hover: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Outbond-Calling-w-150x150.png',
            thumbnail_width: 150,
            thumbnail_height: 150,
            link: '/outbound',
            description: 'Outbound Calling System An outbound call is one initiated by...',
            btn_readmore: 'READ MORE'
        },
        {
            id: 3,
            title: 'Data Scrubing',
            service_back_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/8927229869-1280x720-1-690x375.jpeg',
            service_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Data-150x150.png',
            service_image_hover: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Data-w-150x150.png',
            thumbnail_width: 150,
            thumbnail_height: 150,
            link: '/data-scrubing',
            description: 'Data Scrubbing Data scrubbing is the process of fixing errors...',
            btn_readmore: 'READ MORE'
        },
        {
            id: 4,
            title: 'Software Development',
            service_back_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Software_Developer_Getty_RossHelen-690x375.jpg',
            service_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Software-Development-150x150.png',
            service_image_hover: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Software-Development-w-150x150.png',
            thumbnail_width: 150,
            thumbnail_height: 150,
            link: '/software-development',
            description: 'Software Development Website design and development is not confined to...',
            btn_readmore: 'READ MORE'
        }
    ];

    return (
        <>
            <section className='bpo-services py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <FancyHeading title="BPO Servicing" />
                            <h2 className="section-title">Services We Offer To Our Valued Customers</h2>
                        </div>
                        <div className='col-md-6'>
                            <div className="section-content mt-md-5">
                                <p>For Business Success, A1Consultancy offers results-focused services. Our team of dedicated customer care representatives strives to improve client satisfaction through strategic planning.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-md-5 service-default service-layout1 service-grid-layout1'>
                        {dataItems.map((item) =>
                            <ItemService
                                key={item.id}
                                title={item.title}
                                back_image={item.service_back_image}
                                service_image={item.service_image}
                                hover_image={item.service_image_hover}
                                width={item.thumbnail_width}
                                height={item.thumbnail_height}
                                link={item.link}
                                content={item.description}
                                read_more={item.btn_readmore}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BpoServices;
