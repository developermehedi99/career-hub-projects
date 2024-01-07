import Banner from "../Banner/Banner";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import Category from "../category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;