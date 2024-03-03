import React from 'react'
import Banner from '../home/main-banner/Banner';
import banner from '../../assets/images/inner-services/web-development.jpg';

const Page = (props) => {

    let { bannerImage, mediumText, mediumBelowText, bannerContent } = props;

    return (
        <div>

            <Banner
                bannerImage={bannerImage}
                mediumText={mediumText}
                mediumBelowText={mediumBelowText}
                bannerContent={bannerContent}
            />

        </div>
    )
}

export default Page;