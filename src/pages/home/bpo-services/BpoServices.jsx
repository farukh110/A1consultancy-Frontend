import FancyHeading from '../../../components/controls/fancy-heading/FancyHeading';
import './index.scss';

const BpoServices = () => {
    return (
        <>
            <section className='bpo-services py-5'>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-6'>

                            <FancyHeading title="BPO Servicing" />

                            <h2 className="section-title">Services We Offer To Our Valued Customers</h2>


                        </div>

                        <div className='col-md-6'>

                            <div className="section-content mt-md-5">
                                <p>For Business Success, A1Consultancy offers results-focused services. Our team of dedicated customer care representatives strives to improve client satisfaction through strategic planning.</p>
                            </div>

                        </div>

                    </div>

                    <div className='row'>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div
                                className="service-item rt-animate wow fadeInUp animated"
                                data-wow-delay="0.1s"
                                data-wow-duration="0.6s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "0.6s",
                                    animationDelay: "0.1s",
                                    animationName: "rt-fadeInUp"
                                }}
                            >
                                <div className="service-box-content">
                                    <div
                                        className="service-figure"
                                        data-bg-image="https://starbpo.com.pk/wp-content/uploads/2021/10/inbound-call-center-690x375.jpg"
                                        style={{
                                            backgroundImage:
                                                'url("https://starbpo.com.pk/wp-content/uploads/2021/10/inbound-call-center-690x375.jpg")'
                                        }}
                                    >
                                        <div className="service-content">
                                            <div className="service-img-wrap">
                                                <div className="service-image">
                                                    <span>
                                                        <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            width={150}
                                                            height={150}
                                                            src="https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-150x150.png"
                                                            className="attachment-thumbnail size-thumbnail"
                                                            alt=""
                                                            srcSet="https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-150x150.png 150w, https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-300x297.png 300w"
                                                            sizes="(max-width: 150px) 100vw, 150px"
                                                        />
                                                    </span>
                                                </div>
                                                <div className="service-hover-img">
                                                    <span>
                                                        <img
                                                            loading="lazy"
                                                            decoding="async"
                                                            width={150}
                                                            height={150}
                                                            src="https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-w-150x150.png"
                                                            className="attachment-thumbnail size-thumbnail"
                                                            alt=""
                                                            srcSet="https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-w-150x150.png 150w, https://starbpo.com.pk/wp-content/uploads/2021/10/Inbond-calling-w-300x297.png 300w"
                                                            sizes="(max-width: 150px) 100vw, 150px"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="service-info">
                                                <h3 className="service-title">
                                                    <a href="https://starbpo.com.pk/service/inbound-calling/">
                                                        Inbound Calling
                                                    </a>
                                                </h3>
                                                <p>Inbound Calling System An inbound call is one that a</p>
                                                <div className="service-button1">
                                                    <a
                                                        className="btn-style1"
                                                        href="https://starbpo.com.pk/service/inbound-calling/"
                                                    >
                                                        READ MORE{" "}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24px"
                                                            height="24px"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="#FA360A"
                                                                d="M11.998 23.997c-6.617 0-11.999-5.383-11.999-11.999 0-6.616 5.382-11.999 11.999-11.999 6.616 0 11.999 5.383 11.999 11.999 0 6.616-5.383 11.999-11.999 11.999Zm0-21.816c-5.414 0-9.818 4.404-9.818 9.817 0 5.414 4.404 9.817 9.818 9.817 5.413 0 9.817-4.403 9.817-9.817 0-5.413-4.404-9.817-9.817-9.817Zm5.37 10.234a1.11 1.11 0 0 1-.237.355l-4.362 4.362c-.213.214-.492.32-.771.32a1.09 1.09 0 0 1-.772-1.862l2.502-2.501H7.634a1.092 1.092 0 0 1 0-2.182h6.094l-2.502-2.501a1.091 1.091 0 0 1 1.543-1.543l4.362 4.363a1.095 1.095 0 0 1 .237 1.189Z"
                                                            />
                                                        </svg>{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}

export default BpoServices;