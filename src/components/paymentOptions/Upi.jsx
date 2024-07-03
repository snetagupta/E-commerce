import React from "react";

const Upi = () => {
  return <div>
    <p className="text-xl font-medium text-gray-800 border-b">UPI</p>
    <div className="flex flex-col gap-4 w-[60%] py-4 px-2">
    <div className="flex flex-col gap-2">
      <label className="text-green-500">UPI ID / VPA</label>
      <input type="text" placeholder="e.g. rakesh@upi" className="border border-green-500 py-3 px-2 rounded-md"/>
      <p className="text-gray-500">A collect request will be sent to this UPI ID</p>
      </div>
      <button className="text-white bg-green-600 rounded-md px-12 py-3">Verify and Pay</button>
      </div>
  </div>;
};

export default Upi;
