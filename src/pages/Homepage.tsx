import { useEffect, useState } from 'react';
import HomepageCard from '../components/HomepageCard';
import Testimonial from '../components/Testimonial';
import Animation from '../components/Animation';

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setPageLoaded(true);
    }, 5500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading && (
        <div style={{ height: '100vh', position: 'relative', marginTop: 60 }}>
          <Animation path="../src/assets/animations/loading_animation.json" />
        </div>
      )}
      {pageLoaded && (
        <div className="container-fluid homepage">
          <div className="row mt-5 overflow-hidden">
            <div className="col">
              <div className="cards-homepage">
                <HomepageCard
                  animationPath="../src/assets/animations/bracelet_animation.json"
                  title="Unique Handcrafted Jewelry"
                  btnText="Shop Now"
                  textPosition="text-end"
                  positionEnd="end-0"
                  right="100px"
                  linkPath="/product-page"
                />
                <HomepageCard
                  animationPath="../src/assets/animations/bee_animation.json"
                  title="Custom Made Orders"
                  btnText="Order Now"
                  textPosition="text-start"
                  right="-130px"
                  linkPath="/custom-orders"
                />
                <HomepageCard
                  animationPath="../src/assets/animations/helmet_animation.json"
                  title="Exceptional Home Decor"
                  btnText="Discover"
                  textPosition="text-end"
                  positionEnd="end-0"
                  right="100px"
                  linkPath="/product-page-home-decor"
                />
              </div>
            </div>
          </div>
          <div className="row bg-butterfly">
            <div className="col">
              <h1>Always unique, never exactly the same!</h1>
              <p>Each piece is handcrafted with meticulous attention to detail in our workshop in Ohrid.</p>
            </div>
          </div>
          <div className="row">
            <div className="razglednica"></div>
            <div className="col ">
              <div>
                <h1>Over a century old tradition</h1>
                <p>As time unfolds, our family business has been growing and evolving, adapting to the changing tides while remaining rooted in our heritage.</p>
                <button className="button-cs-brown">See Our Story</button>
                <img className="px-5 mt-5" src="../../public/images/Home-Page/butterfly-dots.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row mt-5 old-town">
            <div className="col">
              <div className=" old-town-text ">
                <h1>Visit Our Shop</h1>
                <p>Come meet us at the heart of Ohrid’s old town and experience the art of craftsmanship firsthand!</p>
                <button className="button-cs-brown">Contact Details</button>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col ">
              <h1 className="mb-5">What Our Clients Say</h1>
              <Testimonial
                text={`“I stumbled upon Marinov during my trip to Ohrid, and I'm so glad I did. Their shop is a hidden gem filled with beautifully handcrafted copper pieces. I bought a pair of
          earrings, and every time I wear them, I receive compliments. The unique designs and the warmth of the staff make Marinov an unforgettable experience. Highly recommended!”`}
                person="- Elsa Johansson, Sweden"
              />
              <img className="py-5" style={{ width: 40, margin: 'auto' }} src="../../public/images/Home-Page/leaf_divider.svg" alt="" />
              <Testimonial
                text={`I recently purchased a copper necklace from Marinov, and I couldn't be happier with my choice. The craftsmanship is impeccable, and the attention to detail is evident in every link. The necklace not only complements my style perfectly but also garners admiration wherever I go. Marinov's jewelry isn't just an accessory; it's a work of art that adds elegance to any outfit. I'm genuinely impressed and will definitely be returning for more pieces!`}
                person="- Sofia Oliveira, Portugal"
              />
              <img className="py-5" style={{ width: 40, margin: 'auto', transform: 'rotate(180deg)' }} src="../../public/images/Home-Page/leaf_divider.svg" alt="" />
              <Testimonial
                text={`Marinov's copper products reflect the essence of Ohrid's rich heritage. I ordered a custom-made copper lamp for my home, and it exceeded my expectations. The team at Marinov went above and beyond to ensure every detail was perfect. Their dedication to preserving tradition while creating modern masterpieces is truly commendable. I am immensely satisfied with my purchase!`}
                person="- Matthias Schneider, Austria"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
