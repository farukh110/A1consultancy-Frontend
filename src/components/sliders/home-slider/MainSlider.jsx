import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import './slider-animations.scss';
import './index.scss';

const content = [
    {
        title: "BPO Solutions with A1Consultancy",
        description:
            "Help your Business grow with our Enthusiastic Expertise .A1 Consultancy provides excellent services designed to meet your specific demands.",
        button: "About Us",
        image: "https://starbpo.com.pk/wp-content/uploads/2022/11/11-1-min.png",
    },
    {
        title: "Experience Outstanding Customer Support With A1 Consultancy",
        description:
            "Collaborate with us to experience exceptional professionalism and commitment to excellence.",
        button: "About Us",
        image: "https://starbpo.com.pk/wp-content/uploads/2022/11/22-min.png",
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
