import Page from '../generic-page/Page';
import about from '../../assets/images/about/about.jpg';

const AboutUs = () => {
    return (
        <>
            <Page
                bannerImage={about}
                mediumText={null}
                mediumBelowText={`About Us`}
                bannerContent={null}
            />
        </>
    )
}

export default AboutUs;
