import logo from '../../../assets/logo/logo.jpg';
import './index.scss';

const Footer = () => {
    return (
        <>
            <footer>

                <div className='custom-footer-padding py-5'>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-5 col-sm-6">
                                <div className="address-box">
                                    <h3 className="address-title">About Us</h3>
                                    <div className="address-info">
                                        Need ready-to-go solutions? Don't fret over this! Our team is here to assist you in ensuring efficient delivery while saving you time and costs. We are an energetic, youthful company with expertise in the most recent trends in the outsourcing industry.
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="address-box">
                                    <h3 className="address-title">Other Menu </h3>
                                    <div className="address-info">
                                        <ul className='ps-0'>
                                            <li> Lead Generation </li>
                                            <li> Digital Marketing </li>
                                            <li> Contact Center </li>
                                            <li> Inbound Calling </li>
                                            <li> Outbound Calling </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="address-box">
                                    <h3 className="address-title">Contact Details</h3>
                                    <div className="address-info">
                                        Location: USA <br /> Email: Info@a1consultancy.com <br />
                                        Phone: +123-456-7891

                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-2 col-sm-6">
                                <div className="address-box">
                                    <h3 className="address-title">North Karachi Branch</h3>
                                    <div className="address-info">
                                        SA-6, Sector 5A/2, North Karachi , Karachi, 75850 <br />{" "}
                                        +92-331-7827276
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="color-overlay1">
                            <img
                                src="https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/figure51.png"
                                alt="figure51"
                                width={287}
                                height={375}
                            />
                        </div>
                        <div className="color-overlay2">
                            <img
                                src="https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/figure52.png"
                                alt="figure52"
                                width={196}
                                height={563}
                            />
                        </div> */}
                    </div>

                </div>

                <div className='footer-inner'>
                    <div className="footer-top-area">
                        <div className="container">
                            <div className="footer-top-widget">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div
                                            id="media_image-5"
                                            className="widget widget_media_image"
                                            title="Shift-click to edit this widget."
                                        >
                                            <img
                                                width={200}
                                                height={115}
                                                src={logo}
                                                className="image wp-image-8078  attachment-medium size-medium"
                                                alt=""
                                                style={{ maxWidth: "100%", height: "auto" }}
                                                decoding="async"
                                                loading="lazy"
                                                srcSet=""
                                            />
                                            <h3 className="widgettitle " />{" "}
                                            <div className="textwidget">
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div
                                            id="nav_menu-4"
                                            className="widget widget_nav_menu"
                                            title="Shift-click to edit this widget."
                                        >
                                            <h3 className="widgettitle ">What We Do</h3>
                                            <div
                                                data-customize-partial-id="nav_menu_instance[cd315eb0f2c2a7eda248c52cd06cc041]"
                                                data-customize-partial-type="nav_menu_instance"
                                                data-customize-partial-placement-context='{"after":"","before":"","can_partial_refresh":true,"container":"div","container_aria_label":"","container_class":"","container_id":"","depth":0,"echo":true,"fallback_cb":"","item_spacing":"preserve","items_wrap":"<ul id=\"%1$s\" class=\"%2$s\">%3$s<\/ul>","link_after":"","link_before":"","menu":4,"menu_class":"menu","menu_id":"","theme_location":"","walker":"","args_hmac":"cd315eb0f2c2a7eda248c52cd06cc041"}'
                                                className="menu-quick-links-container"
                                                title="Shift-click to edit this element."
                                            >
                                                <span className="customize-partial-edit-shortcut customize-partial-edit-shortcut-nav_menu_instance-cd315eb0f2c2a7eda248c52cd06cc041">
                                                    <path d="M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z" />
                                                </span>
                                                <ul id="menu-quick-links" className="menu">
                                                    <li
                                                        id="menu-item-163"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-163"
                                                    >
                                                        <a
                                                            href="https://starbpo.com.pk/?customize_changeset_uuid=ab7fc707-8109-4d5b-b241-ad3dd4fcc36e&customize_messenger_channel=preview-0"
                                                            aria-current="page"
                                                        >
                                                            Home
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-164"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-164"
                                                    >
                                                        <a href="https://starbpo.com.pk/about-us/?customize_changeset_uuid=ab7fc707-8109-4d5b-b241-ad3dd4fcc36e&customize_messenger_channel=preview-0">
                                                            About
                                                        </a>
                                                    </li>
                                                    <li
                                                        id="menu-item-6133"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6133"
                                                    >
                                                        <a href="https://starbpo.com.pk/service/?customize_changeset_uuid=ab7fc707-8109-4d5b-b241-ad3dd4fcc36e&customize_messenger_channel=preview-0">
                                                            Service
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div
                                            id="text-4"
                                            className="widget widget_text"
                                            title="Shift-click to edit this widget."
                                        >
                                            <h3 className="widgettitle ">Get Updates!</h3>
                                            <div className="textwidget">
                                                <p>
                                                    Sign up for our latest news &amp; articles. We won’t give you
                                                    spam mails.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div
                                            id="finbuzz_address-9"
                                            className="widget widget_finbuzz_address"
                                            title="Shift-click to edit this widget."
                                        >
                                            <h3 className="widgettitle ">Contact Us</h3>{" "}
                                            <div className="textwidget">
                                                <p>
                                                    Cell : +123-456-7891 <br /> Email: Info@a1consultancy.com
                                                </p>{" "}
                                                <p className="rtin-des" />
                                                <ul className="corporate-address"></ul>
                                            </div>
                                        </div>{" "}
                                    </div>
                                </div>
                                <div className="footer-wrap">
                                    <div className="copyright_wrap">
                                        <span className="left-line" />
                                        <div className="copyright-img1 mt-md-3">
                                            <img
                                                src="https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/figure4.png"
                                                alt="figure"
                                                className='d-block mx-auto'
                                                width={20}
                                                height={20}
                                            />
                                        </div>
                                        <div className="copyright text-center">
                                            © 2024 A1Consultancy. All Rights Reserved.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer;