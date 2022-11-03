import React from "react";
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div>
      <header className="bg-white dark:bg-gray-900 mb-20">
        <div className="container px-6 py-16 mx-auto">
          <h4 className="text-orange-600 font-bold text-4xl pb-11 text-center">
            About Us
          </h4>
          <div className="items-center lg:flex">
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 px-5 relative">
              <img
                className="w-full rounded-lg h-full lg:max-w-2xl "
                src={person}
                alt="Catalogue-pana.svg"
              />
              <img
                className="w-3/5 h-4/3 rounded-lg lg:max-w-2xl absolute -bottom-16 -right-3 "
                src={parts}
                alt="Catalogue-pana.svg"
              />
            </div>

            <div className="w-full lg:w-1/2 pl-7 md:pl-7 pt-8">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
                  We are qualified <br /> & of experience in <br /> this field
                </h1>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  LThere are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable.{" "}
                </p>

                <button className="w-full tracking-wider btn  btn-secondary mt-6 text-sm text-white uppercase  duration-300 transform  rounded-md lg:w-auto ">
                  Get More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default About;
