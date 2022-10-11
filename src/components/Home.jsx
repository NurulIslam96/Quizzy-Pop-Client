import React from "react";
import { Link } from "react-router-dom";
import Topics from "./Topics";

const Home = () => {
  return (
    <div>
      <div className="bg-slate-800">
          <div className="container text-center md:text-left mx-auto flex md:flex-row flex-col">
            <div className="flex flex-col px-4 pt-16 lg:pb-56 md:py-32 md:px-10 lg:px-32">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">
                QUIZZY POP
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-slate-200">
                Best E-commerce platform for buying high quality Smart Home
                Appliances at extremely affordable Price.
              </p>
              <div className="flex flex-wrap md:justify-start justify-between">
                <Link to="/topics">
                  <button
                    type="button"
                    className="px-8 py-3 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                  >
                    Topics
                  </button>
                </Link>
                <Link to="/blog">
                  <button
                    type="button"
                    className="px-8 py-3 text-lg md:mx-5 border rounded-full border-cyan-400 hover:border-white text-white"
                  >
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={`https://merakiui.com/images/header-image.svg`}
              alt=""
              className="md:w-1/3 w-2/3 mx-auto mb-5"
            />
          </div>
        </div>
      <Topics></Topics>
    </div>
  );
};

export default Home;
