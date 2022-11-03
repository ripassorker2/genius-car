import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderCard from "./OrderCard";

const Orders = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status ===402 || res.status === 403) {
          localStorage.removeItem("genius-token");
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user,logOut]);

  const handleRemoveItem = (id) => {
    const deleteConfirm = window.confirm(
      `Are you sure? You want to delete this item.`
    );
    if (deleteConfirm) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Item deleted succesfully !!");
            const remaining = orders.filter((or) => or._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10 m-auto">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {" "}
                {orders?.length} Items
              </h2>
            </div>
            <div className="flex justify-between mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-base uppercase w-2/5">
                Product Details
              </h3>
              {/* <h3 className="font-semibold  text-gray-600 text-base uppercase w-1/5 text-center">
                Quantity
              </h3> */}
              <h3 className="font-semibold  text-gray-600 text-base uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold  text-gray-600 text-base uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {orders.map((order) => (
              <OrderCard
                key={order._id}
                order={order}
                handleRemoveItem={handleRemoveItem}
              />
            ))}

            <Link className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
