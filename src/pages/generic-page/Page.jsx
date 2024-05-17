import Banner from '../home/main-banner/Banner';

const Page = (props) => {

    let { bannerImage, mediumText, mediumBelowText, bannerContent, dynamicClass } = props;

    return (
        <div>

            <Banner
                bannerImage={bannerImage}
                dynamicClass={dynamicClass}
                mediumText={mediumText}
                mediumBelowText={mediumBelowText}
                bannerContent={bannerContent}
            />

        </div>
    )
}

export default Page;