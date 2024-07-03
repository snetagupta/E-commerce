import React from 'react'

const Card = () => {
  return (
    <div>
    <p className="text-xl font-medium text-gray-800 border-b">Enter Credit / Debit card details</p>
        <div className="flex flex-col gap-4 w-[60%] py-4 px-2">
     
      <div className="flex flex-col gap-2">
      <label className="text-green-500">Card Number</label>
      <input type="text" placeholder="Enter card number" className="border border-green-500 py-3 px-2 rounded-md"/>
      </div>
      <div className="flex gap-4">
      <div className="flex flex-col gap-2">
      <label className="text-gray-600">Expiry</label>
      <input type="text" placeholder="MM/YY"  className="border py-3 px-2 rounded-md"/>
      </div>
      <div className="flex flex-col gap-2">
      <label className="text-gray-600">CVV</label>
      <input type="text" placeholder="CVV"  className="border py-3 px-2 rounded-md"/>
      </div>
      </div>
    <button className="text-white bg-green-600 rounded-md px-12 py-3">Proceed to Pay</button>
    </div>
    </div>
  )
}

export default Card