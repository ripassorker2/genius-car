import React, { useEffect, useState } from "react";


const OrderCard = ({ order,handleRemoveItem }) => {
  const { price, total, serviceName, serviceID, _id } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceID}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderService(data);
      });
  }, [serviceID]);

 

  return (
    <div>
      <div className="flex items-center justify-between hover:bg-gray-300 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-24">
            <img className="h-16 rounded-md" src={orderService?.img} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm"> {serviceName}</span>

            <p
              onClick={() => handleRemoveItem(_id)}
              className="font-semibold text-orange-600 text-xs"
            >
              Remove
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center w-1/5">
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>

          <p className="mx-2 border text-center w-8">1</p>

          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div> */}
        <span className="text-center w-1/5 font-semibold text-sm">
          ${price}.00
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          ${total}.00
        </span>
      </div>
    </div>
  );
};

export default OrderCard;
