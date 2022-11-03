import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ serviceInfo }) => {
  const { img, price, title, _id } = serviceInfo;
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="h-48" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 text-lg">Price : ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/service/${_id}`}>
              <button className="btn btn-secondary btn-outline btn-sm">
                Buy Now <FaArrowRight className="ml-3" />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
