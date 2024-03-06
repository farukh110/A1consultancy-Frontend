import React from 'react';
import Page from '../generic-page/Page';
import banner from '../../assets/images/inner-services/video.jpg';

const VideoMonitoring = () => {
    return (
        <div>
            <Page
                bannerImage={banner}
                mediumText={null}
                mediumBelowText={`Video Monitoring Surveillance`}
                bannerContent={`Guarantees the safety and security of your highly prized possessions with A1 Consultancy provides excellent video monitoring services designed to meet your specific demands.`}
            />
        </div>);
}

export default VideoMonitoring