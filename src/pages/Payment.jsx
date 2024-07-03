import { AiTwotoneCreditCard } from "react-icons/ai";
import upi from "../assets/upi.svg";
import netBanking from "../assets/netBanking.svg";
import paylater from "../assets/paylater.svg";
import payOnDelivery from "../assets/payOnDelivery.svg";
import pluxee from "../assets/pluxee.svg";
import wallet from "../assets/wallet.svg";

const Payment = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center gap-20 bg-green-600 text-white font-bold text-2xl py-8">
          <p>Order Summary</p>
          <p>Amount</p>
          <p>₹815.04</p>
        </div>
        <div className="px-80 py-4 bg-gray-200">
          <p className="text-xl font-semibold py-4">Payment Methods</p>
          <div className="flex justify-center border w-full h-[80vh]">
            <div className="bg-yellow-50 w-[30%] flex flex-col gap-6 p-4">
              <div className="flex gap-4">
                <img src={upi} />
                <p className="text-lg font-medium">UPI</p>
              </div>
              <div className="flex gap-4">
                <img src={pluxee} />
                <p className="text-lg font-medium">Pluxee</p>
              </div>
              <div className="flex items-center gap-4">
                <AiTwotoneCreditCard className="text-xl"/>
                <p className="text-lg font-medium">Credit/ Debit Card</p>
              </div>
              <div className="flex gap-4">
                <img src={paylater} />
                <p className="text-lg font-medium">PayLater</p>
              </div>
              <div className="flex gap-4">
                <img src={wallet} />
                <p className="text-lg font-medium">Wallets</p>
              </div>
              <div className="flex gap-4">
                <img src={netBanking} />
                <p className="text-lg font-medium">NetBanking</p>
              </div>
              <div className="flex gap-4">
                <img src={payOnDelivery} />
                <p className="text-lg font-medium">Pay On Delivrery</p>
              </div>
              
              <div className="flex justify-center mt-auto">
                {/* <p>Secured by</p> */}
                <img src="https://assets.juspay.in/hyper/images/common/jp_juspay_brand.png" className="w-[130px]"/>
                {/* <p className="text-lg font-medium">JUSTPAY</p> */}
              </div>
            </div>
            <div className="bg-white w-[70%] p-4">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
