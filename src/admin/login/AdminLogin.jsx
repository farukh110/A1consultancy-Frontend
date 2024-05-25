import { useState } from 'react';
import './login.scss';
import logo from '../../assets/logo/a1-logo1.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const AdminLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const onSubmitLogin = (e) => {
        e.preventDefault();

        // Frontend validation
        if (!userName || !password) {
            message.error('Username and password are required.');
            return;
        }

        setLoading(true);
        axios.post('http://localhost:8000/auth/admin/login', {
            userName,
            password
        })
            .then((res) => {
                sessionStorage.setItem('email', res.data.email);
                sessionStorage.setItem('fullName', res.data.fullName);
                sessionStorage.setItem('token', res.data.token);
                navigate('/admin/dashboard');
            })
            .catch((error) => {
                console.log('error: ', error);
                message.error('Invalid username or password');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <div className='login-bg'>
                <div className='container pt-5'>
                    <div className='row justify-content-center mt-md-5'>
                        <div className='col-md-6'></div>
                        <div className='col-md-5 bg-white rounded shadow mt-md-5'>
                            <div className='row justify-content-center'>
                                <div className='col-md-9'>
                                    <form onSubmit={onSubmitLogin} className='my-5'>
                                        <div className='row justify-content-center'>
                                            <div className='col-md-6'>
                                                <img className='img-fluid' src={logo} alt="A1Consultancy" />
                                            </div>
                                        </div>
                                        <h1 className='text-center'>Admin Login</h1>
                                        <input
                                            type='text'
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            className='form-control my-3'
                                            placeholder='Username'
                                        />
                                        <input
                                            type='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className='form-control my-3'
                                            placeholder='Password'
                                        />
                                        <button type='submit' className='btn btn-dark' disabled={loading}>
                                            {loading ? 'Logging in...' : 'Login'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminLogin;
