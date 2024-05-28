import { useEffect, useState } from "react";
import { Card, Typography, Table, Button, Space, message, Spin } from 'antd';
import axios from "axios";
import './index.scss';
import { deleteObject, getStorage, ref as storageRef } from "firebase/storage";
import { app } from '../../firebase';
import { useNavigate } from "react-router-dom";
import { BACKEND_API } from "../../constants";

const CategoryList = () => {

    const { Title } = Typography;
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null); // Track which item is being deleted
    const placeholderImage = 'https://via.placeholder.com/50'; // Placeholder image URL

    const navigate = useNavigate();

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        setLoading(true);
        axios.get(`${BACKEND_API}/category`)
            .then((res) => {
                console.log('category res: ', res.data.category);
                setCategories(res.data.category);
            })
            .catch((error) => {
                console.log('error: ', error);
                message.error('Failed to load categories');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleEdit = (record) => {
        console.log('Edit record: ', record);
        navigate(`/admin/dashboard/edit-category`, { state: { record: record } });
        // Add your edit logic here
    };

    const handleDelete = (record) => {

        console.log('Delete record ID: ', record._id);
        // setLoading(true);
        setDeletingId(record._id);

        const storage = getStorage(app);
        const encodedImageUrlPath = record.imageUrl.split('/o/')[1].split('?')[0];
        const decodedImageUrlPath = decodeURIComponent(encodedImageUrlPath); // Decode URL-encoded path
        const storage_ref = storageRef(storage, decodedImageUrlPath);

        deleteObject(storage_ref)
            .then(() => {
                return axios.delete(`${BACKEND_API}/category/${record._id}`,
                    {
                        headers: {

                            Authorization: `Bearer ${sessionStorage.getItem('token')}`
                        }
                    }
                );
            })
            .then((res) => {
                console.log('deleted res: ', res);
                message.success('Category deleted successfully');
                getCategory(); // Refresh the categories list after deletion
            })
            .catch((error) => {
                console.log('error: ', error);
                message.error('Failed to delete category');
            })
            .finally(() => {
                // setLoading(false);
                setDeletingId(null);
            });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: (text) => (
                <img
                    src={text}
                    alt="Category"
                    style={{ width: '80px' }}
                    onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
                />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>
                    <Button
                        type="danger"
                        className="custom-delete-button"
                        onClick={() => handleDelete(record)}
                        disabled={loading && deletingId === record._id}
                    >
                        {loading && deletingId === record._id ? <Spin /> : 'Delete'}
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Title level={3}>Categories</Title>
            <Card className='mt-md-4' bordered={false}>
                <Table
                    dataSource={categories}
                    columns={columns}
                    rowKey="_id"
                    bordered
                    loading={loading}
                />
            </Card>
        </>
    );
}

export default CategoryList;
