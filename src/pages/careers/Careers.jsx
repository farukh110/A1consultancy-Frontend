import banner from '../../assets/images/inner-services/contact-center.jpg';
import Page from "../generic-page/Page";
import CareersForm from '../home/careers-form/CareersForm';

const Careers = () => {

    return (
        <div>
            <Page
                bannerImage={banner}
                mediumText={null}
                mediumBelowText={`Careers`}
                bannerContent={null}
            />
            <CareersForm />
        </div>
    )
}

export default Careers;
