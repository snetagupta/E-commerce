import React from "react";

const NetBanking = () => {
  return (
    <div>
      <p className="text-xl font-medium text-gray-800 border-b">
      Net Banking
      </p>
      <div className="flex gap-6 ">
      <div className="flex flex-col  gap-4  py-4 ">
        <img
          src="https://assets.juspay.in/hyper/images/geddit/jp_ic_bank_508548.png"
          className="w-[50px]"
        />
        <p className="">SBI</p>
      </div>
      <div className="flex flex-col  gap-4  py-4 ">
        <img
          src="https://assets.juspay.in/hyper/images/geddit/jp_ic_bank_607152.png"
          className="w-[50px]"
        />
        <p className="">HDFC</p>
      </div>
      <div className="flex flex-col  gap-4  py-4 ">
        <img
          src="https://assets.juspay.in/hyper/images/geddit/jp_ic_bank_508534.png"
          className="w-[50px]"
        />
        <p className="">ICIC</p>
      </div>
      <div className="flex flex-col  gap-4 py-4 ">
        <img
          src="https://assets.juspay.in/hyper/images/geddit/jp_ic_bank_607153.png"
          className="w-[50px]"
        />
        <p className="">Axis</p>
      </div>
      </div>
    </div>
  );
};

export default NetBanking;
