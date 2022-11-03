import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CHeekOut = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();

  const total = parseFloat(product.price) + 10;

  const handleSubmitProcess = (event) => {
    event.preventDefault();
    const form = event.target;

    const fullName = form.fullName.value;
    const number = form.number.value;
    const email = form.email.value;
    const city = form.city.value;
    const postCode = form.postCode.value;
    const description = form.description.value;

    const orderInfo = {
      serviceID: product._id,
      serviceName: product?.title,
      total,
      price: product.price,
      userName: fullName,
      email: email,
      city,
      number,
      postCode,
      description,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order placeed succesfully !!");
          form.reset();
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form
              onSubmit={handleSubmitProcess}
              className="justify-center w-full mx-auto"
            >
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4 w-">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Full Name
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      defaultValue={user?.displayName}
                      placeholder="Fullname"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 input-bordered input-secondary"
                      required
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="number"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Phone Number
                    </label>
                    <input
                      name="number"
                      type="number"
                      placeholder="Contact number"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 input-bordered input-secondary"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      defaultValue={user?.email}
                      placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 input-bordered input-secondary"
                      required
                    />
                  </div>
                </div>

                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="city"
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 input-bordered input-secondary"
                      required
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      name="postCode"
                      type="text"
                      placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 input-bordered input-secondary"
                      required
                    />
                  </div>
                </div>

                <div className="relative pt-3 xl:pt-6">
                  <label
                    htmlFor="description"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    {" "}
                    Product description (Optional)
                  </label>
                  <textarea
                    name="description"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 input-bordered input-secondary"
                    rows="4"
                    placeholder="Description"
                    required
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button type="submit" className="w-full btn btn-secondary">
                    COnfirm
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                  <div className="flex space-x-4">
                    <div>
                      <img src={product?.img} alt="" className="w-48" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold w-full">
                        {product?.title}
                      </h2>
                      <span className="text-red-600">Price</span> $
                      {product.price}
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-4 mt-4">
                <h2 className="text-xl font-bold">SERVICE </h2>
              </div>

              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span className="ml-2">$10.00</span>
              </div>
              {}
              <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2"> ${total}.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CHeekOut;
