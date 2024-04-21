import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/a1-logo4.png';
import './index.scss';

const Footer = () => {
    return (
        <>
            <footer>

                <div className='footer-inner'>
                    <div className="footer-top-area">
                        <div className="container">
                            <div className="footer-top-widget">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-12">
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

                                        <div className="address-box">
                                            <div className="address-info w-75">

                                                A trusted outsourced call center equipped with a highly skilled team, ready to meet all of your call center requirements. Manage cold calling, virtual receptionists, inbound, and outbound calling.

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-12">
                                        <div
                                            id="nav_menu-4"
                                            className="widget widget_nav_menu"
                                            title="Shift-click to edit this widget."
                                        >
                                            <h3 className="widgettitle ">Our Services</h3>
                                            <div className="address-box">

                                                <div className="address-info">
                                                    <ul className='ps-0'>
                                                        <li> <Link className='text-decoration-none text-dark' to='/lead-generation'> Lead Generation </Link> </li>
                                                        <li> Contact Center </li>
                                                        <li> <Link className='text-decoration-none text-dark' to='/inbound-calls'> Inbound Calls </Link></li>
                                                        <li> <Link className='text-decoration-none text-dark' to='/outbound-calls'> Outbound Calls </Link></li>
                                                        <li> Digital Marketing </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div
                                            id="nav_menu-4"
                                            className="widget widget_nav_menu"
                                            title="Shift-click to edit this widget."
                                        >
                                            <h3 className="widgettitle ">Important Links</h3>
                                            <div className="address-box">

                                                <div className="address-info">
                                                    <ul className='ps-0'>
                                                        <li> <Link className='text-decoration-none text-dark' to='/'> Home </Link> </li>
                                                        <li> Service </li>
                                                        <li> <Link className='text-decoration-none text-dark'> About Us </Link></li>
                                                        <li> <Link className='text-decoration-none text-dark'> Blogs </Link></li>
                                                        <li> <Link to='/careers' className='text-decoration-none text-dark'> Careers </Link></li>
                                                    </ul>
                                                </div>
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
                                                    <br />
                                                    Locations: New Jersey, USA Karachi, Pak
                                                </p>
                                                <p className="rtin-des" />

                                            </div>
                                        </div>{" "}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='fotter_bottom bg-dark py-3'>

                    <div className='container'>

                        <div className='row'>

                            <div className='col-md-6'>

                                <p className="ps-lg-4 ps-md-0 ps-0 mb-0">
                                    <span className="follow-us text-light">Follow us: </span>
                                    <span className='ms-2'>
                                        <a className="bi bi-facebook text-light" href="/"></a>
                                    </span>

                                    <span className='ms-2'>
                                        <a className="bi bi-instagram text-light" href="/"></a>
                                    </span>

                                    <span className='ms-2'>
                                        <a className="bi bi-linkedin text-light" href="/"></a>
                                    </span>

                                    <span className='ms-2'>
                                        <a className="bi bi-pinterest text-light" href="/"></a>
                                    </span>

                                </p>

                            </div>

                            <div className='col-md-6'>

                                <div className="copyright text-light">
                                    © 2024 A1Consultancy. All Rights Reserved.
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