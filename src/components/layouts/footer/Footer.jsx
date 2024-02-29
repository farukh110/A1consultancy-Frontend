import React from 'react';
import logo from '../../../assets/logo/logo.jpg';
import './index.scss';

const Footer = () => {
    return (
        <>
            <section className="d-flex mt-md-5" id="footer">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-md-3 mt-3 my-md-4 mb-0">
                        <a href="/" className="col-md-3 d-flex link-dark text-decoration-none">
                            <img
                                src={logo}
                                className="logo-footer"
                                alt=""
                            />
                        </a>
                        <ul className="nav footer-nav col-md-9 justify-content-start">


                            <li className="nav-item">
                                <a href="/success-stories/" className="nav-link px-2">
                                    Success Stories
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/faqs-on-outsourcing.php" className="nav-link px-2">
                                    FAQs
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="/articles/" className="nav-link px-2">
                                    Resources
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="/videos.php" className="nav-link px-2">
                                    Videos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/events/" className="nav-link px-2">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/careers/" className="nav-link px-2">
                                    Careers
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    href="/forms/contactform.php?#top"
                                    id="footer_cut"
                                    className="nav-link px-2"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-2 my-2">
                        <div className="col-md-3 mb-3">
                            <span className="social-media-text ms-2">Follow Us On</span>
                            <ul className="list-unstyled d-flex social-media-icons">
                                <li className="ms-2">
                                    <a
                                        href="https://www.linkedin.com"
                                        className="link-dark"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-linkedin-in" />
                                    </a>
                                </li>
                                <li className="ms-2">
                                    <a
                                        href="https://www.facebook.com"
                                        className="link-dark"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="ms-2">
                                    <a
                                        href="https://twitter.com"
                                        className="link-dark"
                                        target="_blank"
                                    >
                                        <img
                                            src="https://cdn.flatworldsolutions.com/images/icons/twitter-x.png"
                                            alt="Twitter"
                                            style={{ width: "57%" }}
                                        />
                                    </a>
                                </li>
                                <li className="ms-2">
                                    <a
                                        href="https://www.youtube.com"
                                        className="link-dark"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-youtube" />
                                    </a>
                                </li>
                                <li className="ms-2">
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 col-sm-12 mb-3 d-inline-flex">
                            <div className="row">
                                <div className="col-md-10">
                                    <p className="footer-note">
                                        The information on this website cannot be commercially used
                                        without the prior consent of A1 Consultancy.
                                    </p>
                                </div>
                                <div className="col-md-10">
                                    <p className="copyright">
                                        © 2023 A1 Consultancy. All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 col-sm-12 d-inline-flex">
                            <p className="footer-note" />
                            <p className="footer-note mb-md-0 mb-0">
                                Third-party logos displayed on the website are not owned by us, and
                                are displayed only for representation purpose. The ownership and
                                copyright of Logos belong to their respective organizations.
                            </p>
                            <p />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer;