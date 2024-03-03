import React from 'react';
import Page from '../generic-page/Page';

import banner from '../../assets/images/inner-services/web-development.jpg';


const Web = () => {

    return (
        <div>
            <Page
                bannerImage={banner}
                mediumText={null}
                mediumBelowText={`Website Development`}
                bannerContent={`Get our website development services to improve your site's online visibility. We specialize in creating custom designs and user-friendly layouts that ensure a seamless experience for your visitors.`}
            />
        </div>
    )
}

export default Web;