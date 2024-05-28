import { Card, message, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { app } from '../../firebase';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { BACKEND_API } from '../../constants';

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
    }, [location]);

    const getCategory = () => {
        axios.get(`${BACKEND_API}/category`)
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

    const handleBlog = (content) => {
        console.log('content: ', content);
        setBlog(content);
    }

    const validateAndSubmit = () => {

        if (!blogTitle.trim()) {
            message.error('Please enter blog title');
            return false;
        }

        if (!blog.trim()) {
            message.error('Please enter blog content');
            return false;
        }

        if (!categoryName) {
            message.error('Please select a category');
            return false;
        }

        if (!file && !location.state) {
            message.error('Please select an image for the blog');
            return false;
        }

        return true;
    }

    const onSubmitBlog = async (e) => {

        e.preventDefault();

        if (!validateAndSubmit()) {
            return;
        }

        setIsLoading(true);

        if (location.state == null) {
            const storage = getStorage(app);
            const storage_ref = storageRef(storage, `blog/${blogTitle}-${Date.now()}`);
            await uploadBytes(storage_ref, file);
            const uploadedImageUrl = await getDownloadURL(storage_ref);

            axios.post(`${BACKEND_API}/blog`, {
                title: blogTitle,
                category: categoryName,
                description: blog,
                imageUrl: uploadedImageUrl
            },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                }
            )
                .then((res) => {
                    setIsLoading(false);
                    navigate('/admin/dashboard/blogs');
                })
                .catch((error) => {
                    console.log('error: ', error);
                    setIsLoading(false);
                });

        } else {
            const uploadAndFetchUrl = async () => {
                if (file) {
                    const storage = getStorage(app);
                    const storage_ref = storageRef(storage, `${location?.state?.record?.imageUrl}`);
                    await uploadBytes(storage_ref, file);
                    return await getDownloadURL(storage_ref);
                } else {
                    return location?.state?.record?.imageUrl;
                }
            };

            const uploadedImageUrl = await uploadAndFetchUrl();

            axios.put(`${BACKEND_API}/blog/${location?.state?.record?._id}`, {
                title: blogTitle,
                category: categoryName,
                description: blog,
                imageUrl: uploadedImageUrl
            },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                }
            )
                .then((res) => {
                    setIsLoading(false);
                    navigate('/admin/dashboard/blogs');
                })
                .catch((error) => {
                    console.log('error: ', error);
                    setIsLoading(false);
                });
        }
    }

    return (
        <>
            <Title level={3}> {location.state == null ? 'Add Blog Post' : 'Update Blog Post'} </Title>
            <Card className='mt-md-4' bordered={false}>
                <div className='row'>
                    <div className='col-md-8'>
                        <form onSubmit={onSubmitBlog}>
                            <input
                                type="text"
                                value={blogTitle}
                                className="form-control mb-md-3"
                                name="blog_title"
                                onChange={(e) => setBlogTitle(e.target.value)}
                                placeholder="Please enter Blog Title"
                            />

                            <Editor
                                apiKey='gjjrt4ubdp29ymkb9o20l1imcbwd6y6fjszifzy5pxyl9kia'
                                init={{
                                    directionality: 'ltr',
                                    encoding: 'UTF-8', // Ensure UTF-8 encoding
                                    plugins: 'lists link image charmap print preview anchor',
                                    toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
                                    setup: (editor) => {
                                        editor.on('init', () => {
                                            editor.getBody().setAttribute('dir', 'ltr');
                                        });
                                    },
                                    height: '340px', // Adjust the height as needed
                                    max_height: '500px' // Set maximum height if needed
                                }}
                                value={blog}
                                onEditorChange={handleBlog}
                                className="mt-md-3"
                            />

                            <select value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className='form-control mt-md-5'>
                                <option>Select Category</option>
                                {categoryList.map((item) => (
                                    <option key={item._id} value={item.name}>{item.name}</option>
                                ))}
                            </select>

                            <div className="mt-md-3">
                                <input onChange={(e) => fileHandler(e)} className="form-control" type="file" />
                            </div>

                            <div className='row'>
                                <div className='col-md-4 mt-md-3'>
                                    {imageUrl && <img className='img-fluid' alt={blogTitle} src={imageUrl} />}
                                </div>
                            </div>

                            <button className='btn btn-dark mt-md-3' type="submit">
                                {isLoading && <Spin />} Submit
                            </button>
                        </form>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default AddBlog;
