import React from 'react';
import Page from '../generic-page/Page';
import banner from '../../assets/images/inner-services/digital-marketing.jpg';

const Digital = () => {
    return (
        <div>
            <Page
                bannerImage={banner}
                mediumText={null}
                mediumBelowText={`Digital Marketing`}
                bannerContent={`Power up your business with A1 Consultancy's unmatched digital marketing services. From web design to SEO, we have supported many businesses in their success.`}
            />
        </div>);
}

export default Digital;