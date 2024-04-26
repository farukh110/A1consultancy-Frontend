import ContactForm from "../home/contact-form/ContactForm";
import banner from '../../assets/images/inner-services/contact-center.jpg';
import Page from "../generic-page/Page";

const Contact = () => {

    return (
        <div>
            <Page
                bannerImage={banner}
                mediumText={null}
                mediumBelowText={`Contact Us`}
                bannerContent={null}
            />
            <ContactForm />
        </div>
    )
}

export default Contact;
