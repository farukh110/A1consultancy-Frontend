import './index.scss';

const FancyHeading = ({ title }) => {
    return (
        <h4 className="subtitle style1">{title}<span className="title-bar1"></span><span className="title-bar2"></span></h4>
    )
}

export default FancyHeading;