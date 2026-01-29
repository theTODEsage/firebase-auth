import React from "react";
import HeroSlider from "../Components/HeroSlider";
import Service from "../Components/Service";
import WinterCareTips from "../Components/WinterCareTips";
import ExpertVets from "../Components/ExpertVets";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <section>
        <HeroSlider />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <WinterCareTips />
      </section>
      <section>
        <ExpertVets />
      </section>
      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;