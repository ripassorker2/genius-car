import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const BannarItrem = ({ bannarInfo }) => {
  const { next, prev, image, id } = bannarInfo;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carusel-img ">
        <img src={image} className="w-full rounded-xl" alt="" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-36">
        <h2 className="lg:text-5xl md:text-4xl text-3xl text-gray-200 font-bold">
          Affordable <br /> Price For Car <br /> Servicing
        </h2>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-72 w-1/2">
        <p className="text-gray-300 md:text-xl text-lg">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form passages of available, but the
          majority have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24  bottom-16 ">
        <button className="btn btn-secondary  mr-3">New Project</button>
        <button className="btn btn-secondary mx-3 btn-outline">
          Discover More
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn mx-2 btn-secondary btn-sm btn-circle"
        >
          <BsFillArrowLeftCircleFill />
        </a>
        <a
          href={`#slide${next}`}
          className="btn mx-2 btn-secondary btn-sm btn-circle"
        >
          <BsFillArrowRightCircleFill />
        </a>
      </div>
    </div>
  );
};

export default BannarItrem;
