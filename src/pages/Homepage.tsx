import Header from '../components/Header';
import HomepageCard from '../components/HomepageCard';

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="cards-homepage">
              <HomepageCard
                animationPath="../src/assets/animations/bracelet_animation.json"
                title="Unique Handcrafted Jewelry"
                btnText="Shop Now"
                textPosition="text-end"
                positionEnd="end-0"
              />
              <HomepageCard animationPath="../src/assets/animations/bee_animation.json" title="Custom Made Orders" btnText="Order Now" textPosition="text-start" />
              <HomepageCard
                animationPath="../src/assets/animations/helmet_animation.json"
                title="Exceptional Home Decor"
                btnText="Discover"
                textPosition="text-end"
                positionEnd="end-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
