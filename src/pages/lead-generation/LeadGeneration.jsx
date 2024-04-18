import Banner from "../home/main-banner/Banner";
import bannerImage from '../../assets/images/services/lead-generation-2.jpg';
import lead from '../../assets/images/services/lead.jpg';
import './index.scss';

const LeadGeneration = () => {

    const dynamicClass = {
        fontSize: '42px', // Example font size
        color: null, // Example color
    };

    return (
        <div>

            <Banner
                bannerImage={bannerImage}
                dynamicClass={dynamicClass}
                mediumText={'Lead Generation'}
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
                                src={lead}
                                className="img-fluid"
                                alt=""
                            />

                            <h2 className="mt-md-4"> Lead Generation - The First Step For Business Growth </h2>

                            <p>
                                Do you want to improve your revenue? Utilizing our services is your best decision. We offer an ongoing flow of high-quality leads with greater conversion rates because we specialize in smart lead-generation strategies that fit your company.
                            </p>

                            <h2> Why Your Business Requires Business Process Outsourcing for Lead Generation  </h2>

                            <p> Your company excels in its core competencies, whether it's in accounting, healthcare, manufacturing, or technology. However, call center management and lead generation may not be your field of expertise. Business process outsourcing can be a strategic move in such circumstances. Lead generation isn't your strength? Outsource it to experts to boost efficiency and outcomes.
                            </p>

                            <div className="row">

                                <div className="col-md-3">
                                    <img
                                        src="https://starbpo.com.pk/wp-content/uploads/2021/10/outbound-call-center-with-smart-features.svg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                </div>

                                <div className="col-md-8">

                                    <h2> A1Consultantancy Lead Generation Services </h2>

                                    <p>
                                        A1Consaltancy, a global outsourcing company, is committed to supporting businesses in sales, lead generation, and marketing services. Our approach to every call of every engagement is characterized by a highly structured and efficient methodology. Our goal is to provide our clients with a clear understanding of the criteria for success. From the start of every call, campaign, and every day, A1Consaltancy collaborates closely with clients to build, sustain, and enhance the value of every venture.
                                    </p>
                                </div>

                                <div className="col-md-12">
                                    <p>
                                        Moreover, A1Consaltancy significantly boosts clients' profitability by implementing a tried-and-true approach that strengthens and elevates their brand. We deliver the highest quality solutions, driving top-line growth and maximizing revenue.
                                        If you're interested in exploring potential collaborations in our lead generation and other BPO services, take steps to contact us via phone or email. We'd love to discuss the exciting possibilities with you. We are excited to explore the various ways we can enhance your business.

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

export default LeadGeneration;