import { Link } from "react-router-dom";
import FancyHeading from '../../../components/controls/fancy-heading/FancyHeading';
import ItemService from './ItemService';
import digital_marketing from '../../../assets/images/services/digital-marketing.jpg';
import lead_generation from '../../../assets/images/services/lead-generation.jpg';
import inbound from '../../../assets/images/services/inbound.jpg';
import outbound from '../../../assets/images/services/outbound.jpg';

import './index.scss';

const BpoServices = () => {

    const dataItems = [
        {
            id: 1,
            title: 'Inbound Calling Services',
            service_back_image: inbound,
            service_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-150x150.png',
            service_image_hover: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-w-150x150.png',
            thumbnail_width: 150,
            thumbnail_height: 150,
            link: '/inbound-calls',
            description: `Inbound calls refer to customer phone calls to a company's customer service...`,
            btn_readmore: 'READ MORE'
        },
        {
            id: 2,
            title: 'Outbound Calling',
            service_back_image: outbound,
            service_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Outbond-Calling-150x150.png',
            service_image_hover: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Outbond-Calling-w-150x150.png',
            thumbnail_width: 150,
            thumbnail_height: 150,
            link: '/outbound-calls',
            description: 'Outbound Calling System An outbound call is one initiated by...',
            btn_readmore: 'READ MORE'
        },
        {
            id: 3,
            title: 'Lead Generation',
            service_back_image: lead_generation,
            service_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Data-150x150.png',
            service_image_hover: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Data-w-150x150.png',
            thumbnail_width: 150,
            thumbnail_height: 150,
            link: '/lead-generation',
            description: 'Do you want to improve your revenue? Utilizing our services is your best decision.',
            btn_readmore: 'READ MORE'
        },
        {
            id: 4,
            title: 'Digital Marketing',
            service_back_image: digital_marketing,
            service_image: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Software-Development-150x150.png',
            service_image_hover: 'https://starbpo.com.pk/wp-content/uploads/2021/10/Software-Development-w-150x150.png',
            thumbnail_width: 150,
            thumbnail_height: 150,
            link: '/software-development',
            description: `Boost your business with A1Consultancy digital marketing services.`,
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
