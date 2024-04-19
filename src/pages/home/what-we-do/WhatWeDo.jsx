import { useState } from 'react';
import './index.scss';
import InfoBox from './InfoBox';
import FancyHeading from '../../../components/controls/fancy-heading/FancyHeading';
import bpoPerson from '../../../assets/images/bpo-person.png';
import vision from '../../../assets/images/icons/vision.png';
import mission from '../../../assets/images/icons/mission.png';
import work from '../../../assets/images/icons/work.png';

const WhatWeDo = () => {


    const dataItems = [
        {
            id: 1,
            activeImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_active.svg',
            inActiveImg: null,
            thumbnail: vision,
            infoTitle: 'Specialized Expertise',
            infoText: `Stay ahead of the competition by Access industry experts and cutting-edge technology`
        },
        {
            id: 2,
            activeImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_active.svg',
            inActiveImg: null,
            thumbnail: mission,
            infoTitle: 'Cost-Efficiency',
            infoText: `Reduce operational costs and enhance return on investment with our highly effective outsourcing solutions`
        },
        {
            id: 3,
            activeImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_active.svg',
            inActiveImg: null,
            thumbnail: work,
            infoTitle: 'Enhanced Productivity',
            infoText: `Outsourcing non-core work to professionals streamlines corporate procedures and boosts productivity`
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

                                        We are an energetic, youthful company with expertise in recent trends. A1Consultancy created a quality-focused, friendly team. Capturing more leads and converting them into long-term customers. We prioritize your goals as our own to guarantee ongoing success.

                                    </p>
                                    <h4> Here's What Sets Us Unique </h4>
                                    <ul>
                                        <li>Use advanced technology</li>
                                        <li>Understand your needs</li>
                                        <li>100% satisfaction guaranteed</li>
                                        <li> Qualified leads </li>
                                        <li> Affordable solutions </li>
                                        <li> Building customer bond </li>
                                        <li> optimal benefit </li>
                                        <li> Enjoy security</li>
                                        <li> Provide excellent service.</li>

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