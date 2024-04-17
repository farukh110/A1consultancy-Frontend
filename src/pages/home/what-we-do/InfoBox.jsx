const InfoBox = (props) => {

    const { activeImg, inActiveImg, thumbnail, infoTitle, infoText } = props;

    return (
        <div className='col-md-4 p-0'>

            <div className="info-box info-style4 show-border">
                <div className="info-item media-image">
                    <div className="info-content media-body">
                        <div className="icon-circle-image">
                            <div className="hover-image">
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src={activeImg}
                                    height={82}
                                    width={82}
                                    alt="figure"
                                />
                            </div>

                            {inActiveImg !== null ?
                                <img
                                    loading="lazy"
                                    decoding="async"
                                    src={inActiveImg}
                                    height={82}
                                    width={82}
                                    alt="figure"
                                    className="icon-small"
                                /> : null}

                            <div className="icon-image">
                                <span className="info-img">
                                    <img
                                        loading="lazy"
                                        decoding="async"
                                        width={150}
                                        height={150}
                                        src={thumbnail}
                                        className="attachment-thumbnail size-thumbnail wp-image-8318"
                                        alt=""
                                    />
                                </span>
                            </div>
                        </div>
                        <h3 className="info-title">{infoTitle}</h3>
                        <p className="info-text">
                            {infoText}
                            <br />
                            <br />{" "}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default InfoBox;