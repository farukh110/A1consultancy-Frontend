import React from 'react';
import Page from '../generic-page/Page';
import banner from '../../assets/images/inner-services/contact-center.jpg';

const ContactCenter = () => {
    return (
        <div>
            <Page
                bannerImage={banner}
                mediumText={null}
                mediumBelowText={`Contact Center Services`}
                bannerContent={`Enhance your customer service and engagement with our contact center solutions. From handling inbound calls to executing outbound campaigns, we're committed to boosting customer satisfaction.`}
            />
        </div>);
}

export default ContactCenter;