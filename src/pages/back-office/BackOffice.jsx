import React from 'react';
import Page from '../generic-page/Page';
import banner from '../../assets/images/inner-services/offices.jpg';

const BackOffice = () => {
    return (
        <div>
            <Page
                bannerImage={banner}
                mediumText={null}
                mediumBelowText={`Back Office Services`}
                bannerContent={`Make use of our back-office services to increase your operational efficiency. Let us handle the administrative responsibilities and data administration while you can focus on your core business operations.`}
            />
        </div>);
}

export default BackOffice;