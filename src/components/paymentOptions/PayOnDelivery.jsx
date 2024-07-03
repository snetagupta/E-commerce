import React from "react";

const PayOnDelivery = () => {
  return (
    <div>
     
      <p className="text-xl font-medium text-gray-800 border-b">
      Cash On Delivery
      </p>
      <div className="flex items-center gap-4 w-[60%] py-4 ">
        <img
          src="https://assets.juspay.in/hyper/images/geddit/jp_ic_cod.png"
          className="w-[50px]"
        />
        <p>Cash On Delivery</p>
      </div>
      <p>Pay By Cash/UPI On Delivery</p>
    </div>
  );
};

export default PayOnDelivery;
