import { Navbar } from "./components/NavBar.jsx";
import { CarouselSection } from "./components/CrouselSection.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { LatestMovies } from "./components/LatestMoviesSection.jsx";
import { LatestSeries } from "./components/LatestSeriesSection.jsx";
import { LatestCartoons } from "./components/LatestCartoonsSection.jsx";
import { BottomCrousel } from "./components/BottomCrousel.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="relative z-10">
        <CarouselSection />
      </section>
      <section className="relative z-20 flex flex-col gap-12 px-4">
        <HeroSection />
        <LatestMovies />
        <LatestSeries />
        <LatestCartoons />
        <BottomCrousel />
      </section>
    </div>
  );
};

export default App;
