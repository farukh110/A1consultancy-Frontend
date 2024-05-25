import { Card, message, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { app } from '../../firebase';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {

    const { Title } = Typography;

    const [blogTitle, setBlogTitle] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [blog, setBlog] = useState('');
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

        console.log('location: ', location?.state?.record);

        getCategory();

        if (location?.state != null) {

            setBlogTitle(location?.state?.record?.title);
            setCategoryName(location?.state?.record?.category);
            setBlog(location?.state?.record?.description);
            setImageUrl(location?.state?.record?.imageUrl);
        }

    }, []);

    const getCategory = () => {

        axios.get('http://localhost:8000/category')
            .then((res) => {
                console.log('category res: ', res.data.category);
                setCategoryList(res.data.category);
            })
            .catch((error) => {
                console.log('error: ', error);
                message.error('Failed to load categories');
            });
    };

    const fileHandler = (e) => {

        setFile(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    }

    const handleBlog = (content, delta, source, editor) => {

        console.log('content: ', content);
        setBlog(content);
    }

    const onSubmitBlog = async (e) => {

        e.preventDefault();

        setIsLoading(true);

        console.log('blogTitle: ', blogTitle, 'file: ', file);

        if (location.state == null) {

            const storage = getStorage(app);

            const storage_ref = storageRef(storage, `blog/${blogTitle}-${Date.now()}`);

            await uploadBytes(storage_ref, file);

            const uploadedImageUrl = await getDownloadURL(storage_ref);

            console.log('uploadedImageUrl: ', uploadedImageUrl);

            axios.post('http://localhost:8000/blog', {

                title: blogTitle,
                category: categoryName,
                description: blog,
                imageUrl: uploadedImageUrl
            }, {
                headers: {

                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
                .then((res) => {

                    setIsLoading(false);
                    console.log('res: ', res.data);
                    navigate('/admin/dashboard/blogs')
                })
                .catch((error) => {

                    console.log('error: ', error);
                })

        } else {

            if (file == null) {

                axios.put(`http://localhost:8000/blog/${location?.state?.record?._id}`, {

                    title: blogTitle,
                    category: categoryName,
                    description: blog,
                    imageUrl: location?.state?.record?.imageUrl
                }, {
                    headers: {

                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                })
                    .then((res) => {

                        setIsLoading(false);
                        console.log('res: ', res.data);

                        navigate('/admin/dashboard/blogs')
                    })
                    .catch((error) => {

                        console.log('error: ', error);
                    })

            } else {

                const storage = getStorage(app);

                const storage_ref = storageRef(storage, `${location?.state?.record?.imageUrl}`);

                await uploadBytes(storage_ref, file);

                const uploadedImageUrl = await getDownloadURL(storage_ref);

                console.log('uploadedImageUrl: ', uploadedImageUrl);

                axios.put(`http://localhost:8000/blog/${location?.state?.record?._id}`, {

                    title: blogTitle,
                    category: categoryName,
                    description: blog,
                    imageUrl: uploadedImageUrl
                }, {
                    headers: {

                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                })
                    .then((res) => {

                        setIsLoading(false);
                        console.log('res: ', res.data);

                        navigate('/admin/dashboard/blogs')
                    })
                    .catch((error) => {

                        console.log('error: ', error);
                    })
            }
        }

    }

    return (
        <>
            <Title level={3}>Add Blog</Title>

            <Card className='mt-md-4' bordered={false}>

                <div className='row'>

                    <div className='col-md-8'>

                        <form onSubmit={onSubmitBlog}>

                            <input
                                type="text"
                                value={blogTitle}
                                className="form-control"
                                name="blog_title"
                                onChange={(e) => setBlogTitle(e.target.value)}
                                placeholder="Please enter Blog Title"
                            />

                            {/* <input
                                type="text"
                                value={blog}
                                className="form-control mt-md-3"
                                name="blog"
                                onChange={(e) => setBlog(e.target.value)}
                                placeholder="Please enter Blog"
                            /> */}

                            <ReactQuill
                                style={{ 'height': '300px' }}
                                theme="snow" className='mt-md-3'
                                onChange={handleBlog}
                                value={blog}
                            />

                            {/* <input
                                type="text"
                                value={categoryName}
                                className="form-control mt-md-3"
                                name="category_name"
                                onChange={(e) => setCategoryName(e.target.value)}
                                placeholder="Please enter Category"
                            /> */}

                            <br />

                            <select value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className='form-control mt-md-5'>

                                <option> Select Category </option>

                                {categoryList.map((item) => (

                                    <option key={item._id} value={item.name}> {item.name} </option>
                                ))}


                            </select>

                            <div className="mt-md-3">
                                <input onChange={(e) => fileHandler(e)} className="form-control" type="file" />
                            </div>

                            <div className='row'>

                                <div className='col-md-4 mt-md-3'>

                                    {imageUrl !== null && <img className='img-fluid' alt={blogTitle} src={imageUrl} />}

                                </div>

                            </div>

                            <button className='btn btn-dark mt-md-3' type="submit"> {isLoading && < Spin />} Submit </button>

                        </form>

                    </div>

                </div>


            </Card>

        </>
    )
}

export default AddBlog;
