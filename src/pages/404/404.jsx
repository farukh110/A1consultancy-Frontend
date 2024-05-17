import Page from '../generic-page/Page';
import ErrorImg from '../../assets/images/banner.jpg';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>

            <Helmet>

                <title>Error 404</title>
                <meta name="description" content="Error 404" />
                <meta name="keywords" content="error, 404" />
                <meta name="author" content="A1Consultancy" />
                <meta name="robots" content="all" />
                <meta name="revisit-after" content="1 Days" />
                <meta property="og:locale" content="en-US" />
                <meta property="og:site_name" content="A1Consultancy" />
                <meta property="og:image" content="https://a1-consultancy.com/assets/a1-logo1-IFYzz0lG.png" />
                <meta property="og:image:width" content="180" />
                <meta property="og:image:height" content="50" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="404 - " />
                <meta property="og:description" content="" />
                <meta property="og:url" content="https://a1-consultancy.com/" />
                <link rel="canonical" href="/404" />

            </Helmet>

            <Page
                className="text-center"
                bannerImage={ErrorImg}
                mediumText={null}
                mediumBelowText={`404 - Page NoT Found`}
                bannerContent={null}
            />

            <div className="container py-md-5 py-4">

                <div className="row">

                    <div className="col-md-12">

                        <div className="content-area">

                            <p className='text-center'>
                                The page you are looking for might have been removed
                                had its name changed or is temporarily unavailable.

                                <br /><br />

                                <Link to="/" className='btn btn-dark'> Go to Home page </Link>
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default NotFound;
