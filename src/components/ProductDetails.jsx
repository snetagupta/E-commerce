import { IoMdArrowDropright } from "react-icons/io";

const ProductDetails = () => {
  return (
    <>
      <div className="px-20 flex w-full">
        <div className=" w-[70%] p-10 overflow-y-scroll scrollbar-hide h-screen ">
          <div className="border-r border-b p-24 ">
            <img
              className="w-[400px]"
              src="https://minutebag.com/wp-content/uploads/2018/04/butter_cream_1100_1-1024x1024.jpg"
            />
          </div>
          <div className="mt-10 flex flex-col gap-2 border-r">
            <p className="text-2xl mb-2 font-semibold">Product Details</p>
            <p className="font-semibold text-sm">Salted Butter</p>
            <p className="text-gray-500">Type</p>
            <p className="font-semibold text-sm">Salted</p>
            <p className="text-gray-500">Flavour</p>
            <p className="font-semibold text-sm">Ingredients</p>
            <p className="text-gray-500">Butter, Common Salt</p>
            <p className="font-semibold text-sm">Unit</p>
            <p className="text-gray-500">500 g</p>
            <p className="font-semibold text-sm">Key Features</p>
            <p className="text-gray-500">
              Made from the finest cream <br />
              Natural and pure
            </p>
            <p className="font-semibold text-sm">Shelf Life</p>
            <p className="text-gray-500">12 months</p>
            <p className="font-semibold text-sm">Manufacturer Details</p>
            <p className="text-gray-500">
              Kaira District Co-operative Milk Producers' Union Limited, Anand
              388 001. At Food
              <br /> Complex Mogar, Mogar. Lic. No. - 10014021001010.
            </p>
            <p className="font-semibold text-sm">Country Of Origin</p>
            <p className="text-gray-500">India</p>
            <p className="font-semibold text-sm">FSSAI License</p>
            <p className="text-gray-500">10012021000071</p>
            <p className="font-semibold text-sm">Customer Care Details</p>
            <p className="text-gray-500">Email: info@blinkit.com</p>
            <p className="font-semibold text-sm">Return Policy</p>
            <p className="text-gray-500">
              This Item is non-returnable. For a damaged, defective, incorrect
              or expired item, you <br /> can request a replacement within 72
              hours of delivery.
              <br />
              In case of an incorrect item, you may raise a replacement or
              return request only if <br /> the item is sealed/ unopened/ unused
              and in original condition.
            </p>
            <p className="font-semibold text-sm">Expiry Date</p>
            <p className="text-gray-500">
              Please refer to the packaging of the product for expiry date.
            </p>
            <p className="font-semibold text-sm">Seller</p>
            <p className="text-gray-500">TAMS GLOBAL PRIVATE LIMITED</p>
            <p className="font-semibold text-sm">Seller FSSAI</p>
            <p className="text-gray-500">13323999000106</p>
            <p className="font-semibold text-sm">Description</p>
            <p className="text-gray-500">
              Made from the freshest of cream, the Amul butter has lovely taste
              which is delicate <br /> and slightly salty. This finely processed
              butter is natural, pure and tastes best
              <br /> overwith toasts and sandwiches. Has a natural and pure
              formulation that gives it a <br /> great taste. Made from fresh
              cream that has a wonderful flavour. Spread it over
              <br /> toast or cook your curries in it for a heavenly taste.
            </p>
            <p className="font-semibold text-sm">Disclaimer</p>
            <p className="text-gray-500">
              Every effort is made to maintain accuracy of all information.
              However, actual product
              <br /> packaging and materials may contain more and/or different
              information. It is
              <br /> recommended not to solely rely on the information
              presented.
            </p>
          </div>
        </div>
        <div className="px-10 py-12 flex flex-col gap-4">
          <p className="text-sm">Home/ Butter & More/ Amul Salted butter</p>
          <p className="text-2xl font-bold">Amul Salted butter</p>
          <p className="bg-gray-100 text-xs w-fit px-2 rounded-sm font-semibold">
            15 MINS
          </p>
          <div className="flex items-center border-b pb-4">
            <button className="text-green-700 text-lg ">
              View All By Amul
            </button>
            <IoMdArrowDropright className="text-green-800" />
          </div>
          <p>Select unit</p>
          <div className="flex items-center gap-4">
            <button className="border border-green-500 bg-[#F6FFF8] px-4 py-2 rounded-2xl text-[14px] font-semibold shadow-lg">
              500 g<br /> MRP $58
            </button>
            <button className="border border-gray-300 bg-[#F3F4F6] px-4 py-2 rounded-2xl text-[14px] font-semibold">
              1000 g<br /> Out of stock
            </button>
          </div>
          <p className="text-gray-500 text-xs">(inclusive of all taxes)</p>
          <button className="px-4 py-1 border border-green-600 bg-[#F6FFF8] rounded-md w-fit">
            Add
          </button>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Why shop from blinkit?</p>
            <div className="flex items-center gap-4">
              <img
                className="w-[50px]"
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
              />
              <div>
                <p className="text-sm">Superfast Delivery</p>
                <p className="text-sm text-gray-600">
                  Get your order delivered to your doorstep at the earliest from
                  dark stores near you.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="w-[50px]"
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
              />
              <div>
                <p className="text-sm">Best Prices & Offers</p>
                <p className="text-sm text-gray-600">
                  Best price destination with offers directly from the
                  manufacturers.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                className="w-[50px]"
                src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"
              />
              <div>
                <p className="text-sm">Wide Assortment</p>
                <p className="text-sm text-gray-600">
                  Choose from 5000+ products across food, personal care,
                  household & other categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
