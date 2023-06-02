import React from "react";
import Slider from "react-slick";
import Poster from "../poster/Poster.Components";

const PosterSlider = (props) => {
  const { title, subtitle, posters, isDark, config } = props;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    autoplayspeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark
              ? "text-white"
              : "text-black" /** if isDark is true then text-black else text-white */
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>

      {config && (
        <Slider {...config}>
          {posters.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
      {!config && (
        <Slider {...settings}>
          {posters.map((each, index) => (
            <Poster {...each} isDark={isDark} key={index} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default PosterSlider;
