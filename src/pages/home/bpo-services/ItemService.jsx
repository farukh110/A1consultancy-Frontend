import { Link } from "react-router-dom";

const ItemService = (props) => {

    const { title, back_image, service_image, hover_image, width, height, link, content, read_more } = props;

    return (
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="service-item rt-animate wow fadeInUp animated">
                <div className="service-box-content">
                    <div className="service-figure" style={{ backgroundImage: `url(${back_image})` }}>
                        <div className="service-content">
                            <div className="service-img-wrap">
                                <div className="service-image">
                                    <span>
                                        <img
                                            loading="lazy"
                                            decoding="async"
                                            width={width}
                                            height={height}
                                            src={service_image}
                                            className="attachment-thumbnail size-thumbnail"
                                            alt={title}
                                        />
                                    </span>
                                </div>
                                <div className="service-hover-img">
                                    <span>
                                        <img
                                            loading="lazy"
                                            decoding="async"
                                            width={width}
                                            height={height}
                                            src={hover_image}
                                            className="attachment-thumbnail size-thumbnail"
                                            alt={title}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="service-info">
                                <h3 className="service-title">
                                    <Link className='text-decoration-none' to={link}>
                                        {title}
                                    </Link>
                                </h3>
                                <p>{content}</p>
                                <div className="service-button1">
                                    <Link
                                        className="btn-style1 text-decoration-none text-dark"
                                        to={link}
                                    >
                                        {read_more}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            className='ms-2'
                                        >
                                            <path
                                                fill="#FA360A"
                                                d="M11.998 23.997c-6.617 0-11.999-5.383-11.999-11.999 0-6.616 5.382-11.999 11.999-11.999 6.616 0 11.999 5.383 11.999 11.999 0 6.616-5.383 11.999-11.999 11.999Zm0-21.816c-5.414 0-9.818 4.404-9.818 9.817 0 5.414 4.404 9.817 9.818 9.817 5.413 0 9.817-4.403 9.817-9.817 0-5.413-4.404-9.817-9.817-9.817Zm5.37 10.234a1.11 1.11 0 0 1-.237.355l-4.362 4.362c-.213.214-.492.32-.771.32a1.09 1.09 0 0 1-.772-1.862l2.502-2.501H7.634a1.092 1.092 0 0 1 0-2.182h6.094l-2.502-2.501a1.091 1.091 0 0 1 1.543-1.543l4.362 4.363a1.095 1.095 0 0 1 .237 1.189Z"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemService;
