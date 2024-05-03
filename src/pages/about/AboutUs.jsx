import Page from '../generic-page/Page';
import about from '../../assets/images/about/about.jpg';
import BpoServices from '../home/bpo-services/BpoServices';

const AboutUs = () => {
    return (
        <>
            <Page
                bannerImage={about}
                mediumText={null}
                mediumBelowText={`About Us`}
                bannerContent={null}
            />

            <div className="container py-md-5">

                <div className="row">

                    <div className="col-md-12">

                        <div className="content-area">

                            <p>
                                We are fully committed to ensuring your success.  Our professionals excel in contact center services, lead generation, and digital marketing. We strive for excellence, constantly pushing the boundaries of innovation and tailoring our solutions to meet our client's unique needs. We are here to help you achieve your goals and stay ahead in this constantly changing world. Our experienced consultants offer valuable industry insights and strategic guidance to propel your business to new heights.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <BpoServices />
        </>
    )
}

export default AboutUs;
