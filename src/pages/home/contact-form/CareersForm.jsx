import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.scss';

const CareersForm = () => {

    const validationSchema = Yup.object({
        FirstName: Yup.string().required('First Name is required'),
        Email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),  // Add phone validation
        selectedCountry: Yup.object().shape({
            label: Yup.string().required('Country is required'),  // Add country validation
            value: Yup.string().required('Country is required'),
        }),
        description: Yup.string().required('Your message is required'),
    });

    const formik = useFormik({
        initialValues: {
            FirstName: '',
            Email: '',
            phone: '',  // Add phone to initialValues
            description: '',
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

                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Call Center Agents | BPO Agents
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>Content 1</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo">

                                        Frontend Developer
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>Content 2</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Sales Executive
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>Content 3</strong>
                                    </div>
                                </div>
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
                                        <span>Fill Out This Form And Tell Us <br /> A Little About Yourself.</span>

                                    </h2>
                                </div>
                            </div>
                            <div className="row py-3 mx-3 pb-0">
                                <div className="col-md-6 mb-2">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="First Name*"
                                        name="FirstName"
                                        id="FirstName"
                                        aria-label="First Name"
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
                                        type="text"
                                        placeholder="Last Name*"
                                        name="LastName"
                                        id="LastName"
                                        aria-label="Last Name"
                                        required=""
                                        value={formik.values.LastName}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.LastName && formik.touched.LastName && (
                                        <div className="error text-danger fw-bold py-2">{formik.errors.LastName}</div>
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

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected="">Select Education</option>
                                        <option value={1}>Intermediate</option>
                                        <option value={2}>Bachelor's</option>
                                        <option value={3}>Masters</option>
                                        <option value={4}>Others</option>
                                    </select>

                                </div>

                                <div className="col-md-6 mb-2">

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected="">Select Experience</option>
                                        <option value={1}>Fresh or less than one year</option>
                                        <option value={2}>Upto three years or less</option>
                                        <option value={3}>Upto five years</option>
                                        <option value={4}>More than five years</option>
                                    </select>

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
                                    <label htmlFor="formFile" className="form-label">
                                        Upload CV (Max File Size: 2MB) *
                                    </label>
                                    <input className="form-control" type="file" id="formFile" />
                                </div>

                                <div className="col-md-12 mb-2">
                                    <textarea
                                        className="form-control"
                                        cols={20}
                                        rows={5}
                                        name="description"
                                        id="description1"
                                        placeholder="Write your cover letter (optional)"
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

export default CareersForm;