import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Page from '../generic-page/Page';
import axios from 'axios';
import FancyHeading from '../../components/controls/fancy-heading/FancyHeading';
import blogsBg from '../../assets/images/blog/blogs.jpg';
import './index.scss';
import { Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { BACKEND_API } from '../../constants';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        getBlogs();
        getCategories();
    }, []);

    const getBlogs = () => {
        setLoading(true);
        axios.get(`${BACKEND_API}/blog`)
            .then((res) => {
                console.log('latest blogs: ', res.data.blog);
                setBlogs(res.data.blog);
            })
            .catch((error) => {
                console.log('error: ', error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when data fetching is done
            });
    }

    const getCategories = () => {

        axios.get(`${BACKEND_API}/category`)
            .then((res) => {
                console.log('categories: ', res.data.category);
                setCategories(res.data.category);
            })
            .catch((error) => {
                console.log('error: ', error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when data fetching is done
            });
    }

    const getBlogByCategory = (category) => {

        setLoading(true); // Set loading to true when starting to fetch blogs by category
        axios.get(`${BACKEND_API}/blog/category/${category}`)
            .then((res) => {
                console.log('blogs by category: ', res.data.blog);
                setBlogs(res.data.blog);
            })
            .catch((error) => {
                console.log('error: ', error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false when data fetching is done
            });
    }


    return (
        <>
            <Helmet>

                <title>Blogs</title>
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
                <meta property="og:title" content="Blog - A1Consultancy" />
                <meta property="og:description" content="Welcome to the A1Consultancy blog, where we provide insights, tips, and updates on contact center services, lead generation, and digital marketing strategies. Stay tuned for valuable information to help boost your business success." />
                <meta property="og:url" content="https://a1-consultancy.com/" />
                <link rel="canonical" href="/blogs" />

            </Helmet>

            <Page
                bannerImage={blogsBg}
                mediumText={null}
                mediumBelowText={`Blogs`}
                bannerContent={null}
            />

            <div className="container blog-list py-md-5 py-4">
                <div className='row'>
                    <div className='col-md-9'>
                        <FancyHeading title="Blogs List" />
                        <div className='row'>
                            {loading ? (
                                // Render Skeletons while loading
                                Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className='col-md-4 my-3'>
                                        <Skeleton active paragraph={{ rows: 2 }} />
                                    </div>
                                ))
                            ) : (
                                blogs.map((item) => (
                                    <div key={item._id} className='col-md-4 my-3'>
                                        <div className="blog_container2">
                                            <img src={item.imageUrl} className="img-fluid" alt={item.title} />
                                            <div className="blog_content2">
                                                <div className="team_content pb-4 ps-4 pe-4">
                                                    <h1 className='mt-md-3 text-capitalize'>{item.title}</h1>
                                                    <div className="row">
                                                        <div className="buttons_con2">
                                                            <div className="col-md-12 col-12">
                                                                <Link to={`/blog/${item.title}`} className="btn btn-dark">
                                                                    Read More
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <FancyHeading title="Categories" />

                        <div onClick={() => { getBlogs() }} className='shadow pt-md-3 p-2 my-md-3 rounded categories'>
                            <div className='row'>
                                <div className='col-md-12 d-flex align-items-center'>
                                    <h4> All Categories </h4>
                                </div>
                            </div>
                        </div>

                        {loading ? (
                            // Render Skeletons while loading
                            Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className='shadow p-2 my-md-3 rounded categories'>
                                    <Skeleton active title={false} paragraph={{ rows: 1 }} />
                                </div>
                            ))
                        ) : (
                            categories.map((item) => (
                                <div key={item._id} onClick={() => { getBlogByCategory(item.name) }} className='shadow p-2 my-md-3 rounded categories'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <img className='img-fluid' src={item.imageUrl} alt={item.name} />
                                        </div>
                                        <div className='col-md-9 d-flex align-items-center'>
                                            <h4> {item.name} </h4>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs;
