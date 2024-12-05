import About from '../components/About';
import Accommodation from '../components/Accommodation';
import BookingForm from '../components/BookingForm';
import Faqs from '../components/Faqs';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import InteractiveMap from '../components/InteractiveMap';
import CalltoAction from "../components/CalltoAction"
import Pricing from '../components/Pricing';
import SafetyandSecuritySection from '../components/SafetyandSecuritySection';
import Testimonial from '../components/Testimonial';
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Accommodation />
      <SafetyandSecuritySection />
      <Testimonial />
      <Pricing />
      <Gallery />
      <InteractiveMap />
      <BookingForm />
      <Faqs />
      <CalltoAction />
    </div>
  );
};

export default Home;
