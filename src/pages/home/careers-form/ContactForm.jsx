import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import Select from "react-select";
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.scss';

const ContactForm = () => {

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
        onSubmit: (values) => {
            // Handle form submission logic here
            console.log('Form values:', values);
        },
    });

    return (
        <>
            <div className='container form-section my-5'>

                <div className='row justify-content-center'>

                    <div className="col-md-6 p-lg-5 p-4 btn-form-bord">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <i className="fa-solid fa-phone-volume fa-2xl contact-email header-call-icon" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <a href="tel:123-456-7891" className="h3 text-decoration-none">
                                    123-456-7891
                                </a>
                            </div>
                        </div>
                        <div className="space30" />
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <i className="far fa-comments contact-email" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <p className="tex-dark float-left text-left h4">
                                    <a className="tex-dark h4 text-decoration-none" href='!#'>
                                        Live chat with us
                                    </a>
                                </p>
                            </div>
                        </div>{" "}
                        <div className="space30" />
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <i className="fa-regular fa-envelope  contact-email" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <a href="mailto:info@a1consultancy.com" className="h3 text-decoration-none">
                                    Info@a1consultancy.com
                                </a>
                            </div>
                        </div>
                        <div className="space30" />
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <i className="fa-solid fa-location-dot contact-email" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h3>USA</h3>
                                <p className="desc-sec mb-1 text-left">A1Consultancy</p>
                                <p></p>
                                <hr />
                            </div>
                        </div>
                    </div>


                    <div className='col-md-6 col-10 shadow p-md-4 py-3 p-1 rounded-3'>

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
                            <div className="row py-3 mx-3 pb-0">
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

                </div>

            </div>
        </>
    )
}

export default ContactForm;