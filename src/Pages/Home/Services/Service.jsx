import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-8">
      <div className="text-center pb-7 ">
        <h2 className="text-4xl font-bold my-4 text-orange-600">
          Our Service Area
        </h2>
        <p className="text-lg">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-middle items-center justify-center gap-y-6 w-11/12 md:w-4/5 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} serviceInfo={service} />
        ))}
      </div>

      
    </div>
  );
};

export default Service;
