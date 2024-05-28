import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Page from '../generic-page/Page';
import axios from 'axios';
// import blogsBg from '../../assets/images/blog/blogs.jpg';
import './index.scss';
import { Skeleton } from 'antd';
import { useParams } from 'react-router-dom';
import { BACKEND_API } from '../../constants';

const BlogDetail = () => {

    const params = useParams();

    console.log('params: ', params);

    const [blogDetail, setBlogDetail] = useState({});

    const [loading, setLoading] = useState(true); // State to manage loading status



    useEffect(() => {

        getBlogDetail();

    }, []);

    const getBlogDetail = () => {

        setLoading(true);
        axios.get(`${BACKEND_API}/blog/title/${params.title}`)
            .then((res) => {
                console.log('blog detail: ', res.data.blog);
                setBlogDetail(res.data.blog[0]); // Assuming there will always be one blog detail
            })
            .catch((error) => {
                console.log('error: ', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            {blogDetail.title && (
                <Helmet>

                    <title> {blogDetail.title} </title>
                    <meta name="description" content="Welcome to the A1Consultancy blog, where we provide insights, tips, and updates on contact center services, lead generation, and digital marketing strategies. Stay tuned for valuable information to help boost your business success." />
                    <meta name="keywords" content="A1Consultancy, blog, contact center services, lead generation, digital marketing, business success, tips, insights" />
                    <meta name="author" content="A1Consultancy" />
                    <meta name="robots" content="all" />
                    <meta name="revisit-after" content="1 day" />
                    <meta property="og:locale" content="en-US" />
                    <meta property="og:site_name" content="A1Consultancy" />
                    <meta property="og:image" content="https://a1-consultancy.com/assets/a1-logo1-IFYzz0lG.png" />
                    <meta property="og:image:width" content="180" />
                    <meta property="og:image:height" content="50" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={blogDetail.title} />
                    <meta property="og:description" content="Welcome to the A1Consultancy blog, where we provide insights, tips, and updates on contact center services, lead generation, and digital marketing strategies. Stay tuned for valuable information to help boost your business success." />
                    <meta property="og:url" content="https://a1-consultancy.com/" />
                    <link rel="canonical" href={`/blog/${blogDetail.title}`} />

                </Helmet>
            )}

            <Page
                bannerImage={blogDetail.imageUrl}
                mediumText={blogDetail.category}
                mediumBelowText={blogDetail.title}
                bannerContent={null}
            />

            <div className="container blog-list py-md-5 py-4">
                {loading ? (
                    <Skeleton active />
                ) : (
                    <div className='row'>
                        <div className='col-md-12'>
                            <p dangerouslySetInnerHTML={{ __html: blogDetail?.description }}></p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default BlogDetail;
