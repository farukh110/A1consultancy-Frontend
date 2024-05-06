import Banner from "../home/main-banner/Banner";
import bannerImage from '../../assets/images/services/inbound-calls.jpg';
import './index.scss';
import ContactDetails from "../../components/contact-details/ContactDetails";

const InboundCalls = () => {

    const dynamicClass = {
        fontSize: '42px', // Example font size
        color: null, // Example color
    };

    return (
        <div>

            <Banner
                bannerImage={bannerImage}
                dynamicClass={dynamicClass}
                mediumText={'Inbound Calling'}
                mediumBelowText={null}
                bannerContent={null}
            />

            <div className="container py-md-5 py-4">

                <div className="row">

                    {/* <div className="col-md-3">

                        <ContactDetails />

                    </div> */}

                    <div className="col-md-12">

                        <div className="content-area">

                            <h2 className="mt-md-0"> Inbound Calling Services </h2>

                            <p>
                                Inbound calls refer to customer phone calls to a company's customer service or support team. These calls are usually managed by the organization's call center or help desk, which then addresses the consumer's complaint or request. Handling incoming calls is fundamental for customer service teams aiming to enhance the customer experience.
                                <br /><br />
                                Inbound calls play a crucial role in customer service and support call centers. Many companies offer a dedicated phone line for customers to voice their concerns or make requests. These organizations possess either an in-house call center or a remote one that handles the calls. Some companies offer the convenience of remote call centers, allowing employees to work from home. This facilitates customer service teams in delivering 24/7 assistance by employing staff in various time zones.
                            </p>

                            <div className="row">

                                <div className="col-md-12">

                                    <h2> Why Choose a1Consultancy Inbound Service?  </h2>

                                    <p>
                                        Need expert assistance to handle customer inquiries and convert them into leads? Go with a1Consultancy a leading provider of extensive services that provide modern technology. With a worldwide customer base, our committed team boasts a demonstrated history of satisfying and happy numerous clients. Due to our dedicated team, we are glad to serve a wide range of global clients and have thousands of delighted customers. Let us bring our enthusiastic expertise to help your business thrive.

                                    </p>
                                </div>

                                <div className="col-md-12">
                                    <p>
                                        A1Consultancy partners with clients worldwide, overcoming language barriers and geographic obstacles. Our services excel in handling customer inquiries and managing sales leads, ensuring personalized, high-quality interactions. With skilled professionals, comprehensive training, and extensive industry experience, we deliver exceptional service that makes your customers feel valued and satisfied. Don't delay—experience the difference and improve your business today!

                                    </p>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default InboundCalls;