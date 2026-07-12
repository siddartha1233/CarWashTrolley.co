import Hero from "../components/home/Hero";
import Statistics from "../components/home/Statistics";
import CompanyOverview from "../components/home/CompanyOverview";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <CompanyOverview />
      <FeaturedProducts />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;