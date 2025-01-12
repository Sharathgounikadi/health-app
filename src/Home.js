import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 font-[sans-serif] ">
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl h-screen mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
              Welcome to
              <br className="xl:hidden" />
              <span className="text-indigo-400"> our <strong>HEALTH</strong></span>
            </h1>
            <p className="max-w-md mx-auto text-lg text-gray-300 sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
              Elevate your culinary experience with our exclusive premium services. Your health is our priority.
            </p>

            <div className="mt-12 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
              <div className="rounded-md shadow">
                <button onClick={()=>navigate("/about")} className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out">
                  Get Started
                </button>
              </div>
              <div>
                <button onClick={()=>navigate("/contact")} className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition duration-150 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
