import Banner from "../home/main-banner/Banner";
import bannerImage from '../../assets/images/services/outbound-calls.jpg';
import './index.scss';

const OutboundCalls = () => {

    const dynamicClass = {
        fontSize: '42px', // Example font size
        color: null, // Example color
    };

    return (
        <div>

            <Banner
                bannerImage={bannerImage}
                dynamicClass={dynamicClass}
                mediumText={'Outbound Calling'}
                mediumBelowText={null}
                bannerContent={null}
            />

            <div className="container py-md-5">

                <div className="row">

                    <div className="col-md-3">

                        <div
                            className="theiaStickySidebar">
                            <aside className="sidebar-widget-area">
                                <div id="finbuzz_address-3" className="widget widget_finbuzz_address">
                                    <div className="rt-widget-title-holder">
                                        <h3 className="widgettitle">
                                            Contact Us
                                            <span className="titleinner" />
                                        </h3>
                                    </div>{" "}
                                    <p className="rtin-des" />
                                    <ul className="corporate-address ps-0">
                                        <li>
                                            <i className="fas fa-map-marker-alt" />
                                            D7, Block F North Nazimabad Town, Karachi, Pakistan
                                        </li>
                                        <li>
                                            <i className="fas fa-phone-alt" />{" "}
                                            <a href="tel:(+92) 330 7827276">(+92) 330 7827276</a>
                                        </li>
                                        <li>
                                            <i className="far fa-envelope" />{" "}
                                            <a href="mailto:support@localhost">support@localhost</a>
                                        </li>{" "}
                                    </ul>
                                </div>{" "}
                            </aside>
                        </div>


                    </div>

                    <div className="col-md-9">

                        <div className="content-area">

                            <img
                                src="https://starbpo.com.pk/wp-content/uploads/2021/10/Call-Center.jpg"
                                className="img-fluid"
                                alt=""
                            />

                            <h2 className="mt-md-4"> Outbound Calling Services </h2>

                            <p>
                                An outbound call is a call made by a call center agent to a customer as a representative of a call center or client. An outbound call is one important component of business operations, where your customer support agents or sales representatives contact third parties. The calls are directed toward customers, prospects, and other businesses. Lead generation, telemarketing, and fundraising are the main goals of cold-calling potential clients.
                            </p>

                            <div className="row">

                                <div className="col-md-4">
                                    <img
                                        src="https://starbpo.com.pk/wp-content/uploads/2021/10/outbound-call-center-with-smart-features.svg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                </div>

                                <div className="col-md-8">

                                    <h2> Why Choose a1Consultancy Outbound Service? </h2>

                                    <p>
                                        At a1Consultancy real people manage your outgoing and incoming services, creating experiences that satisfy clients. Our specific solution, backed by the best specialists and partners, is perfect for your business model, guaranteeing that no target goes unsatisfied. Understanding the distinctive characteristics of each business, we work carefully to identify the best solution for your needs.
                                        Our highly trained team of experts, with considerable experience in sales, customer service, and marketing, ensures every customer interaction ends in fulfilment.
                                    </p>
                                </div>

                                <div className="col-md-12">
                                    <p>
                                        We provide a personalized, professional, and tailored B2B outbound call center experience aimed at achieving exceptional business success. With access to real-time databases and advanced equipment, our operations include live operator help for both inbound and outbound inquiries, telemarketing campaigns for cold calling and appointment setup, customer service, and IT support.

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

export default OutboundCalls;
