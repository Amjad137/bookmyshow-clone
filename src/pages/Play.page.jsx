import React from "react";
import DefaultLayoutHoc from "../layout/Default.Layout";
import Poster from "../components/poster/Poster.Components";
import PlayFilter from "../components/PlayFilter/PlayFilter.component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in SriLanka</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src=""
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">filters</h2>
          <div>
            <PlayFilter
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilter
              title="Language"
              tags={["English", "Tamil", "Sinhala"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
