import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import './slider-animations.scss';
import b1 from '../../../assets/images/slider/b1.jpg';
import b2 from '../../../assets/images/slider/b2.jpg';
import './index.scss';

const content = [
    {
        title: "BPO Solutions with A1Consultancy",
        description:
            "Help your Business grow with our Enthusiastic Expertise .A1 Consultancy provides excellent services designed to meet your specific demands.",
        button: "About Us",
        image: b1,
    },
    {
        title: "Experience Outstanding Customer Support With A1 Consultancy",
        description:
            "Collaborate with us to experience exceptional professionalism and commitment to excellence.",
        button: "About Us",
        image: b2,
    }
];

const MainSlider = () => {
    return (<>

        <Slider className="slider-wrapper">
            {content.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button className='btn btn-danger'>{item.button}</button>
                    </div>
                </div>
            ))}
        </Slider>

    </>)
}

export default MainSlider;
