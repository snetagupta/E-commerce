import React from "react";

const Wallet = () => {
  return (
    <div>
      <p className="text-xl font-medium text-gray-800 border-b">
      Select a Wallet
      </p>
      <div className="flex items-center gap-4 w-[60%] pt-3 pb-2 border-b">
        <img
          src="https://assets.juspay.in/hyper/images/internalPP/jp_ic_amazon_pay.png"
          className="w-[50px]"
        />
        <p>Amazon Pay Balance</p>
      </div>
      <div className="flex items-center gap-4 w-[60%] py-2 border-b">
        <img
          src="https://assets.juspay.in/hyper/images/internalPP/ic_phonepe.png"
          className="w-[50px]"
        />
        <p>PhonePe</p>
      </div>
      <div className="flex items-center gap-4 w-[60%] py-2 border-b">
        <img
          src="https://assets.juspay.in/hyper/images/internalPP/ic_mobikwik.png"
          className="w-[50px]"
        />
        <p>Mobikwik | zip(Pay later)</p>
      </div>
      <div className="flex items-center gap-4 w-[60%] py-2 border-b">
        <img
          src="https://assets.juspay.in/hyper/images/internalPP/ic_freecharge.png"
          className="w-[50px]"
        />
        <p>FreeCharge</p>
      </div>
      <div className="flex items-center gap-4 w-[60%] py-2 border-b">
        <img
          src="https://assets.juspay.in/hyper/images/internalPP/ic_airtelmoney.png"
          className="w-[50px]"
        />
        <p>Airtel| Payment bank</p>
      </div>
    </div>
  );
};

export default Wallet;
