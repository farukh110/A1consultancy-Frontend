import { Link } from "react-router-dom";
import FancyHeading from '../../../components/controls/fancy-heading/FancyHeading';
import ItemService from './ItemService';
import digital_marketing from '../../../assets/images/services/digital-marketing.jpg';
import lead_generation from '../../../assets/images/services/lead-generation.jpg';
import inbound from '../../../assets/images/services/inbound.jpg';
import outbound from '../../../assets/images/services/outbound.jpg';

import inboundIcon from '../../../assets/icons/inbound-calls.png';
import inboundIconActive from '../../../assets/icons/inbound-calls-active.png';

import outboundIcon from '../../../assets/icons/out-bound-calls.png';
import outboundIconActive from '../../../assets/icons/out-bound-calls-active.png';

import leadIcon from '../../../assets/icons/lead.png';
import leadIconActive from '../../../assets/icons/lead-active.png';

import digitalIcon from '../../../assets/icons/digital.png';
import digitalActive from '../../../assets/icons/digital-active.png';

import './index.scss';

const BpoServices = () => {

    const dataItems = [
        {
            id: 1,
            title: 'Inbound Calling Services',
            service_back_image: inbound,
            service_image: inboundIcon,
            service_image_hover: inboundIconActive,
            thumbnail_width: 110,
            thumbnail_height: 110,
            link: '/inbound-calls',
            description: `Inbound calls refer to customer phone calls to a company's customer service...`,
            btn_readmore: 'READ MORE'
        },
        {
            id: 2,
            title: 'Outbound Calling',
            service_back_image: outbound,
            service_image: outboundIcon,
            service_image_hover: outboundIconActive,
            thumbnail_width: 100,
            thumbnail_height: 100,
            link: '/outbound-calls',
            description: 'Outbound Calling System An outbound call is one initiated by...',
            btn_readmore: 'READ MORE'
        },
        {
            id: 3,
            title: 'Lead Generation',
            service_back_image: lead_generation,
            service_image: leadIcon,
            service_image_hover: leadIconActive,
            thumbnail_width: 100,
            thumbnail_height: 100,
            link: '/lead-generation',
            description: 'Do you want to improve your revenue? Utilizing our services is your best decision.',
            btn_readmore: 'READ MORE'
        },
        {
            id: 4,
            title: 'Digital Marketing',
            service_back_image: digital_marketing,
            service_image: digitalIcon,
            service_image_hover: digitalActive,
            thumbnail_width: 100,
            thumbnail_height: 100,
            link: '/software-development',
            description: `Boost your business with A1Consultancy digital marketing services.`,
            btn_readmore: 'READ MORE'
        }
    ];

    return (
        <>
            <section className='bpo-services py-lg-5 py-md-5 py-5 mb-lg-0 mb-md-0 mb-0'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                            <FancyHeading title="BPO Servicing" />
                            <h2 className="section-title">Services We Offer To Our Valued Customers</h2>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                            <div className="section-content mt-xl-5 mt-lg-5 mt-md-3">
                                <p>For Business Success, A1Consultancy offers results-focused services. Our team of dedicated customer care representatives strives to improve client satisfaction through strategic planning.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-xl-5 mt-lg-5 mt-md-3 mt-sm-2 mt-5 service-default service-layout1 service-grid-layout1'>
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
