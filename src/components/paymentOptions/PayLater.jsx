import React from 'react'

const PayLater = () => {
  return (
    <div>
      <p className="text-xl font-medium text-gray-800 border-b">Other pay later options</p>
      <div className="flex items-center gap-4 w-[60%] py-4 ">
        <img src='https://assets.juspay.in/hyper/images/internalPP/ic_lazypay.png' className='w-[50px]'/>
        <p>LazyPay</p>
        </div>
    </div>
  )
}

export default PayLater