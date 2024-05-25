import { Card, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { app } from '../../firebase';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddCategory = () => {

    const { Title } = Typography;

    const [categoryName, setCategoryName] = useState('');
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

        console.log('location: ', location?.state?.record);

        if (location?.state != null) {

            setCategoryName(location?.state?.record?.name);
            setImageUrl(location?.state?.record?.imageUrl);
        }

    }, []);

    const fileHandler = (e) => {

        setFile(e.target.files[0]);
        setImageUrl(URL.createObjectURL(e.target.files[0]));
    }

    const onAddCategory = async (e) => {

        e.preventDefault();

        console.log('categoryName: ', categoryName, 'file: ', file);

        if (location.state == null) {

            const storage = getStorage(app);

            const storage_ref = storageRef(storage, `category/${categoryName}-${Date.now()}`);

            await uploadBytes(storage_ref, file);

            const uploadedImageUrl = await getDownloadURL(storage_ref);

            console.log('uploadedImageUrl: ', uploadedImageUrl);

            axios.post('http://localhost:8000/category', {

                name: categoryName,
                imageUrl: uploadedImageUrl
            }, {
                headers: {

                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
                .then((res) => {

                    console.log('res: ', res.data);

                    navigate('/admin/dashboard/categories')
                })
                .catch((error) => {

                    console.log('error: ', error);
                })

        } else {

            if (file == null) {

                axios.put(`http://localhost:8000/category/${location?.state?.record?._id}`, {

                    name: categoryName,
                    imageUrl: location?.state?.record?.imageUrl
                }, {
                    headers: {

                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                })
                    .then((res) => {

                        console.log('res: ', res.data);

                        navigate('/admin/dashboard/categories')
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

                axios.put(`http://localhost:8000/category/${location?.state?.record?._id}`, {

                    name: categoryName,
                    imageUrl: uploadedImageUrl
                }, {
                    headers: {

                        Authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
                })
                    .then((res) => {

                        console.log('res: ', res.data);

                        navigate('/admin/dashboard/categories')
                    })
                    .catch((error) => {

                        console.log('error: ', error);
                    })
            }
        }

    }

    return (
        <>
            <Title level={3}>Add Category</Title>

            <Card className='mt-md-4' bordered={false}>

                <div className='row'>

                    <div className='col-md-6'>

                        <form onSubmit={onAddCategory}>

                            <input
                                type="text"
                                value={categoryName}
                                className="form-control"
                                name="category_name"
                                onChange={(e) => setCategoryName(e.target.value)}
                                placeholder="Please Category"
                            />

                            <div className="mt-md-3">
                                <input onChange={(e) => fileHandler(e)} className="form-control" type="file" />
                            </div>

                            <div className='row'>

                                <div className='col-md-4 mt-md-3'>

                                    {imageUrl !== null && <img className='img-fluid' alt={categoryName} src={imageUrl} />}

                                </div>

                            </div>

                            <button className='btn btn-dark mt-md-3' type="submit"> Add Category </button>

                        </form>

                    </div>

                </div>


            </Card>

        </>
    )
}

export default AddCategory;
