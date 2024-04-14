import { useState } from 'react';
import './index.scss';
import InfoBox from './InfoBox';
import FancyHeading from '../../../components/controls/fancy-heading/FancyHeading';
import bpoPerson from '../../../assets/images/bpo-person.png';

const WhatWeDo = () => {


    const dataItems = [
        {
            id: 1,
            activeImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_active.svg',
            inActiveImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_inactive.svg',
            thumbnail: 'https://starbpo.com.pk/wp-content/uploads/2022/09/Vission-150x150.png',
            infoTitle: 'Our Vision',
            infoText: `For A1 Consultancy, putting our clients first is core value and mission. Every member of our team is competent and professional.`
        },
        {
            id: 2,
            activeImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_active.svg',
            inActiveImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_inactive.svg',
            thumbnail: 'https://starbpo.com.pk/wp-content/uploads/2022/09/Mission-150x150.png',
            infoTitle: 'Our Mission',
            infoText: `Offering first-rate support to our customers is our top priority.  We have experts to meet your needs.`
        },
        {
            id: 3,
            activeImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_active.svg',
            inActiveImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_inactive.svg',
            thumbnail: 'https://starbpo.com.pk/wp-content/uploads/2022/09/Expertise-150x150.png',
            infoTitle: 'Working For Excellence',
            infoText: `We value excellence in our service delivery. We are very satisfied with the work we provide to you.`
        }
    ]

    const [items, setItems] = useState(dataItems);

    return (
        <>
            <section className='what-we-do'>

                <div className='inner-img'>

                    <div className='container'>

                        <div className='row mission-vision-container'>

                            {
                                items.map((item) => <InfoBox
                                    key={item.id}
                                    id={item.id}
                                    activeImg={item.activeImg}
                                    inActiveImg={item.inActiveImg}
                                    thumbnail={item.thumbnail}
                                    infoTitle={item.infoTitle}
                                    infoText={item.infoText}
                                />)
                            }

                        </div>

                        <div className='row mt-5'>

                            <div className='col-md-6'>

                                <FancyHeading title="What We Do" />

                                <h2 className="section-title">A1Consultancy And IT Services</h2>

                                <div className="section-content">
                                    <p>
                                        Need ready-to-go solutions? Don't fret over this! Our team is here to assist you in ensuring efficient delivery while saving you time and costs.

                                        We are an energetic, youthful company with expertise in the most recent trends in the outsourcing industry. A1 Consultancy built a strong, sociable team focused on quality. Capturing more leads and converting them into long-term customers. We serve businesses to excel and satisfy demanding customers. We prioritize your goals as our own to guarantee ongoing success.

                                    </p>
                                    <h4> Here's What Sets Us Unique </h4>
                                    <ul>
                                        <li>Use the latest tools and technologies</li>
                                        <li>Fully grasp your needs.</li>
                                        <li>Guaranteed to be 100% satisfied</li>
                                        <li>
                                            Qualified leads from distinct sources
                                        </li>
                                        <li>
                                            Affordable solutions.
                                        </li>
                                        <li>
                                            Building customer relationships.
                                        </li>
                                        <li>
                                            Collaboration for maximum benefit.
                                        </li>
                                        <li>
                                            Collaborate on successful designs and companies.
                                        </li>
                                        <li>
                                            Enjoy security, originality, and service.
                                        </li>
                                        <li>
                                            Meeting expectations with excellent service.
                                        </li>
                                    </ul>

                                </div>


                            </div>

                            <div className='col-md-6'>

                                <img className='img-fluid' src={bpoPerson} alt="" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default WhatWeDo;