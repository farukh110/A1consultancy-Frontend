import { useState } from 'react';
import './index.scss';
import InfoBox from './InfoBox';
import FancyHeading from '../../../components/controls/fancy-heading/FancyHeading';
import vision from '../../../assets/images/icons/icons8-call-center-50.png';
import mission from '../../../assets/images/icons/icons8-money-bag-50.png';
import work from '../../../assets/images/icons/icons8-positive-dynamic-50.png';
import GlobeWorld from '../globe/GlobeWorld';

const WhatWeDo = () => {


    const dataItems = [
        {
            id: 1,
            activeImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_active.svg',
            inActiveImg: null,
            boxBg: '#C15D65',
            iconColor: '#fff',
            titleColor: '#fff',
            contentColor: '#fff',
            thumbnail: vision,
            infoTitle: 'Specialized Expertise',
            infoText: `Stay ahead of the competition by Access industry experts and cutting-edge technology`
        },
        {
            id: 2,
            activeImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_active.svg',
            inActiveImg: null,
            boxBg: '#fff',
            iconColor: '#fff',
            titleColor: '#000',
            contentColor: '#000',
            thumbnail: mission,
            infoTitle: 'Cost-Efficiency',
            infoText: `Reduce operational costs and enhance return on investment with our highly effective outsourcing solutions`
        },
        {
            id: 3,
            activeImg: 'https://starbpo.com.pk/wp-content/themes/finbuzz/assets/element/circle_active.svg',
            inActiveImg: null,
            boxBg: '#54527F',
            iconColor: '#fff',
            titleColor: '#fff',
            contentColor: '#fff',
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

                        <div className='row justify-content-center mission-vision-container'>

                            {
                                items.map((item) => <InfoBox
                                    key={item.id}
                                    id={item.id}
                                    activeImg={item.activeImg}
                                    inActiveImg={item.inActiveImg}
                                    boxBg={item.boxBg}
                                    iconColor={item.iconColor}
                                    titleColor={item.titleColor}
                                    contentColor={item.contentColor}
                                    thumbnail={item.thumbnail}
                                    infoTitle={item.infoTitle}
                                    infoText={item.infoText}
                                />)
                            }

                        </div>

                        <div className='row mt-5 pb-4 justify-content-center'>

                            <div className='col-lg-6 col-md-6 col-12'>

                                <FancyHeading className="mx-auto d-table" title="What We Do" />

                                <div className="section-content mt-md-5">

                                    <div className='row'>

                                        <div className='col-md-6'>

                                            <ul className="list-unstyled mx-auto d-table">
                                                <li> <i className="bi bi-check-circle"></i> Use advanced technology</li>
                                                <li> <i className="bi bi-check-circle"></i> Understand your needs</li>
                                                <li> <i className="bi bi-check-circle"></i> 100% satisfaction guaranteed</li>
                                                <li> <i className="bi bi-check-circle"></i> Qualified leads </li>
                                                <li> <i className="bi bi-check-circle"></i> Affordable solutions </li>
                                            </ul>

                                        </div>

                                        <div className='col-md-6'>

                                            <ul className="list-unstyled mx-auto d-table">
                                                <li> <i className="bi bi-check-circle"></i> Building customer bond </li>
                                                <li> <i className="bi bi-check-circle"></i> optimal benefit </li>
                                                <li> <i className="bi bi-check-circle"></i> Enjoy security</li>
                                                <li> <i className="bi bi-check-circle"></i> Provide excellent service.</li>

                                            </ul>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default WhatWeDo;