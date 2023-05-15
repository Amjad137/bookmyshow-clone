import React, { useState } from "react";
import DefaultLayoutHoc from "../layout/Default.Layout";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Components";
import PosterSlider from "../components/PosterSlider/PosterSlider.Components";
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.Component";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState();
  const [premierMovies, setPremierMovies] = useState();
  const [onlineStreamEvents, setOnlineStreamEvents] = useState();

  return (
    <div>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subject="List of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex-col gap-3">
          {/* <div className="lg:hidden md:flex "> */}
          <div className="lg:hidden md:flex ">
            <img src="" alt="" className="w-full h-full" />
            <PosterSlider
              title="Premiers"
              subject="Brand New Releases Everyday "
              posters={premierMovies}
              isDark={true}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subject="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </div>
  );
};

export default DefaultLayoutHoc(HomePage);
