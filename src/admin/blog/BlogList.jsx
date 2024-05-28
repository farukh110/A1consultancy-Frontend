import { useEffect, useState } from "react";
import { Card, Typography, Table, Button, Space, message, Spin } from 'antd';
import axios from "axios";
import './index.scss';
import { deleteObject, getStorage, ref as storageRef } from "firebase/storage";
import { app } from '../../firebase';
import { useNavigate } from "react-router-dom";
import './index.scss';
import DOMPurify from 'dompurify';
import { parse, HTMLElement } from 'node-html-parser';
import { BACKEND_API } from "../../constants";

const BlogList = () => {

    const { Title } = Typography;
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null); // Track which item is being deleted
    const placeholderImage = 'https://via.placeholder.com/50'; // Placeholder image URL

    const navigate = useNavigate();

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = () => {
        setLoading(true);
        axios.get(`${BACKEND_API}/blog`)
            .then((res) => {
                console.log('blog res: ', res.data.blog);
                setBlogs(res.data.blog.reverse());
            })
            .catch((error) => {
                console.log('error: ', error);
                message.error('Failed to load blogs');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleEdit = (record) => {
        console.log('Edit record: ', record);
        navigate(`/admin/dashboard/edit-blog`, { state: { record: record } });
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
                return axios.delete(`${BACKEND_API}/blog/${record._id}`,
                    {
                        headers: {

                            Authorization: `Bearer ${sessionStorage.getItem('token')}`
                        }
                    }
                );
            })
            .then((res) => {
                console.log('deleted res: ', res);
                message.success('Blog deleted successfully');
                getBlogs(); // Refresh the categories list after deletion
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

    const shortenHTML = (htmlString, maxLength) => {
        const root = parse(htmlString);
        let length = 0;
        let result = '';

        const traverse = (node) => {
            if (length >= maxLength) return;

            if (node.nodeType === 3) { // text node
                const text = node.rawText;
                if (length + text.length > maxLength) {
                    result += text.slice(0, maxLength - length) + '...';
                    length = maxLength;
                } else {
                    result += text;
                    length += text.length;
                }
            } else if (node.nodeType === 1) { // element node
                result += `<${node.tagName}${Object.keys(node.attributes).map(attr => ` ${attr}="${node.attributes[attr]}"`).join('')}>`;
                node.childNodes.forEach(child => traverse(child));
                result += `</${node.tagName}>`;
            }
        };

        root.childNodes.forEach(child => traverse(child));

        return result;
    };


    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     key: 'description',
        //     render: (text) => (
        //         <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(shortenHTML(text, 100)) }} />
        //     ),
        // },
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
            <Title level={3}>Blogs</Title>
            <Card className='mt-md-4' bordered={false}>
                <Table
                    dataSource={blogs}
                    columns={columns}
                    rowKey="_id"
                    bordered
                    loading={loading}
                />
            </Card>
        </>
    );
}

export default BlogList;
