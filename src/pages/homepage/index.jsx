import PosterSection from './PosterSection';
import CustomerLoveSection from './CustomerLoveSection';
import ArtSection from './ArtSection';
import ExploreServiceSection from './ExploreServiceSection';

const HomePage = () => {
    return (
        <div>
            <PosterSection />
            <ExploreServiceSection />
            <CustomerLoveSection />
            <ArtSection />
        </div>
    );
};

export default HomePage;
