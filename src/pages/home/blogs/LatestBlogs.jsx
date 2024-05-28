import { useEffect, useState } from 'react';
import FancyHeading from '../../../components/controls/fancy-heading/FancyHeading';
import { Skeleton } from 'antd';
import './index.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_LINK, BACKEND_API } from '../../../constants';

const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        getBlogs();
    }, []);

    console.log('import.meta.env.VITE_API_URL: ', import.meta.env);
    console.log('API_LINK: ', API_LINK);

    const getBlogs = () => {
        axios.get(`${BACKEND_API}/blog/latest-post/3`)
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

    return (
        <>
            <div className="container blog_section mb-5">
                <FancyHeading title="Latest Blogs" />
                <div className='row justify-content-center'>
                    {loading ? ( // Conditionally render Skeleton while loading is true
                        <>
                            <div className='col-md-4 my-3'>
                                <Skeleton active />
                            </div>
                            <div className='col-md-4 my-3'>
                                <Skeleton active />
                            </div>
                            <div className='col-md-4 my-3'>
                                <Skeleton active />
                            </div>
                        </>
                    ) : (
                        // Render actual blog items when loading is false
                        blogs?.map((item) => (
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
        </>
    )
}

export default LatestBlogs;
