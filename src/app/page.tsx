import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Herosection";
import Featuresection from "./Components/Featuresection";
import Bentogridsection from "./Components/Bentogridsection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Featuresection />
      <Bentogridsection />
      <Footer />
    </div>
  );
}