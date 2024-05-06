import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import Select from "react-select";
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import GlobeWorld from '../globe/GlobeWorld';

const ContactForm = () => {

    const YOUR_SERVICE_ID = 'service_2ksgqrm';
    const YOUR_TEMPLATE_ID = 'template_n933nx8';
    const YOUR_USER_ID = 'eNWLt7KJY04il3EZk';

    // const public_key = 'eNWLt7KJY04il3EZk';
    // const private_key = 'c-KX7uV9nVNpbFQylqI8E';

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({ label: "United States", value: "US" });  // Set default to USA
    const [phone, setPhone] = useState('');

    const validationSchema = Yup.object({
        FirstName: Yup.string().required('Name is required'),
        Email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),  // Add phone validation
        selectedCountry: Yup.object().shape({
            label: Yup.string().required('Country is required'),  // Add country validation
            value: Yup.string().required('Country is required'),
        }),
        description: Yup.string().required('Requirements are required'),
    });


    useEffect(() => {
        axios.get("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code")
            .then((response) => {
                const data = response.data;
                // Set all countries
                const formattedCountries = data.countries.map(country => ({
                    label: country.label.replace(/[\uD800-\uDFFF]./g, ''),  // Remove emoji
                    value: country.value
                }));
                setCountries(formattedCountries);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    const formik = useFormik({
        initialValues: {
            FirstName: '',
            Email: '',
            phone: '',  // Add phone to initialValues
            description: '',
            selectedCountry: { label: "United States", value: "US" },  // Add selectedCountry to initialValues
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            // Send email using EmailJS
            emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, {
                from_name: values.FirstName,
                reply_to: values.Email,
                phone: values.phone,
                country: values.selectedCountry.label,
                message: values.description,
            }, YOUR_USER_ID)
                .then((response) => {
                    console.log('Email sent successfully:', response);
                    // Reset form after successful submission
                    toast.success("Email sent successfully");
                    resetForm();
                })
                .catch((error) => {
                    console.error('Email sending failed:', error);
                    toast.error("Email sending failed");
                });
        },
    });

    return (
        <>
            <div className='container form-section my-5 py-md-0 py-5 pb-0'>

                <div className='row justify-content-center'>

                    <div className='col-md-6 col-10 shadow p-md-4 py-3 p-1'>

                        <form
                            name="smallform"
                            className="form-bg"
                            data-initialized="true"
                            onSubmit={formik.handleSubmit}  // Handle form submission
                        >
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="free-quote-head">
                                        <span>Talk to Our Experts</span> <br /> Schedule Your Free Consultation
                                    </h2>
                                </div>
                            </div>
                            <div className="row py-3 mx-2 pb-0">
                                <div className="col-md-6 mb-2">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name*"
                                        name="FirstName"
                                        id="FirstName"
                                        aria-label="Name"
                                        required=""
                                        value={formik.values.FirstName}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.FirstName && formik.touched.FirstName && (
                                        <div className="error text-danger fw-bold py-2">{formik.errors.FirstName}</div>
                                    )}
                                </div>
                                <div className="col-md-6 mb-2">
                                    <input
                                        className="form-control"
                                        name="Email"
                                        id="Email1"
                                        type="email"
                                        placeholder="Email*"
                                        aria-label="Email"
                                        required=""
                                        value={formik.values.Email}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.Email && formik.touched.Email && (
                                        <div className="error text-danger fw-bold py-2">{formik.errors.Email}</div>
                                    )}
                                </div>
                                <div className="col-md-6 mb-2">

                                    <PhoneInput
                                        country={'us'}
                                        value={formik.values.phone}
                                        onChange={(value) => formik.setFieldValue('phone', value)}
                                    />
                                    {formik.errors.phone && formik.touched.phone && (
                                        <div className="error text-danger fw-bold py-2">{formik.errors.phone}</div>
                                    )}

                                </div>
                                <div className="col-md-6 mb-2">

                                    <Select
                                        options={countries}
                                        value={formik.values.selectedCountry}
                                        onChange={(selectedOption) => formik.setFieldValue('selectedCountry', selectedOption)}
                                    />
                                    {formik.errors.selectedCountry && formik.touched.selectedCountry && (
                                        <div className="error text-danger fw-bold py-2">{formik.errors.selectedCountry.label}</div>
                                    )}

                                </div>
                                <div className="col-md-12 mb-2">
                                    <textarea
                                        className="form-control"
                                        cols={20}
                                        rows={5}
                                        name="description"
                                        id="description1"
                                        placeholder="Enter your requirements*"
                                        required=""
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                    />
                                    {/* 	 */}
                                    {formik.errors.description && formik.touched.description && (
                                        <div className="error text-danger fw-bold py-2">{formik.errors.description}</div>
                                    )}
                                </div>
                            </div>



                            <div className="col-md-12 m-auto mt-md-3 text-center">
                                <input type="submit" value="Submit Details" className="btn butn butn__new d-block m-auto px-4 mb-2" />
                            </div>

                        </form>
                    </div>

                    <div className='col-md-6'>

                        <GlobeWorld />

                    </div>

                    <div className='col-md-8 col-10 p-md-4 py-3 p-1'>

                        <div className='row justify-content-center mt-lg-3 mt-4'>

                            <div className='col-lg-4 col-md-6 col-sm-6 col-12 pe-lg-4'>

                                <div className='custom-detail-box'>
                                    <div className='custom-icon'>

                                        <i className="bi bi-geo-alt-fill"></i>
                                    </div>

                                    <h5 className='mt-md-2'> Location </h5>

                                    <p> E 1/1 Erum Heights, Block 13, Gulistan e Jauhar, Karachi </p>

                                </div>

                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-6 col-12 border-lg-start border-lg-end border-0'>

                                <div className='custom-detail-box'>
                                    <div className='custom-icon'>

                                        <i className="bi bi-telephone-fill"></i>
                                    </div>

                                    <h5 className='mt-md-2'> 24/7 Help </h5>

                                    <a className='text-dark text-decoration-none' href='tel: 923267862663'> 92 326 786 AONE (2663) </a>

                                </div>

                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>

                                <div className='custom-detail-box'>
                                    <div className='custom-icon'>

                                        <i className="bi bi-envelope-at-fill"></i>
                                    </div>

                                    <h5 className='mt-md-2'> Email Us </h5>

                                    <p> <a className='text-decoration-none text-dark' href="mailto: info@a1-consultancy.com"> info@a1-consultancy.com </a> </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <ToastContainer position="top-center" />
        </>
    )
}

export default ContactForm;