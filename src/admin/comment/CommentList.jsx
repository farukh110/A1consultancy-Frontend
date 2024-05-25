import { useEffect, useState } from "react";
import { Card, Typography, Table, Button, Space, message, Spin } from 'antd';
import axios from "axios";
import './index.scss';
import { deleteObject, getStorage, ref as storageRef } from "firebase/storage";
import { app } from '../../firebase';

const CommentList = () => {

    const { Title } = Typography;
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null); // Track which item is being deleted

    useEffect(() => {
        getComments();
    }, []);

    const getComments = () => {
        axios.get('http://localhost:8000/comment')
            .then((res) => {
                console.log('comments res: ', res.data.comments);
                setComments(res.data.comments);
            })
            .catch((error) => {
                console.log('error: ', error);
                message.error('Failed to load categories');
            });
    };

    const handleDelete = (record) => {

        console.log('Delete record ID: ', record._id);
        setLoading(true);
        setDeletingId(record._id);

        axios.delete(`http://localhost:8000/comment/${record._id}`, {
            headers: {

                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then((res) => {
                console.log('deleted res: ', res);
                message.success('Comment deleted successfully');
                getComments(); // Refresh the comments list after deletion
            })
            .catch((error) => {
                console.log('error: ', error);
                message.error('Failed to delete comment');
            })
            .finally(() => {
                setLoading(false);
                setDeletingId(null);
            });

    };

    const columns = [
        {
            title: 'Comment',
            dataIndex: 'commentText',
            key: 'commentText',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Date',
            dataIndex: 'timestamp',
            key: 'timestamp',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
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
            <Title level={3}>Comments</Title>
            <Card className='mt-md-4' bordered={false}>
                <Table
                    dataSource={comments}
                    columns={columns}
                    rowKey="_id"
                    bordered
                />
            </Card>
        </>
    );
}

export default CommentList;
