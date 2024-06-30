import { RiFacebookCircleFill } from "react-icons/ri";
import { FaSquareInstagram, FaSquareThreads } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="px-20 mt-16">
        <div className="flex justify-start gap-16">
          <div>
            <div>
              <p className="text-lg font-semibold">Useful Links</p>
            </div>
            <div className="flex items-center justify-between gap-24 mt-6 text-gray-500 text-[14.5px]">
              <div className="flex flex-col gap-2">
                <p>About</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Press</p>
                <p>Lead</p>
                <p>Value</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Privacy</p>
                <p>Terms</p>
                <p>FAQs</p>
                <p>Security</p>
                <p>Mobile</p>
                <p>Contact</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Partner</p>
                <p>Express</p>
                <p>Seller</p>
                <p>Warehouse</p>
                <p>Deliver</p>
                <p>Resources</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-start gap-4">
              <p className="text-lg font-semibold">Categories</p>
              <p className="text-green-700 ">See All</p>
            </div>
            <div className="flex items-center justify-between gap-28 mt-6 text-gray-500 text-[14.5px]">
              <div className="flex flex-col gap-2 ">
                <p>Vegetables & Fruits</p>
                <p>Cold Drinks & Juices</p>
                <p>Bakery & Biscuits</p>
                <p>Dry Fruits, Masala & Oil</p>
                <p>Paan Corner</p>
                <p>Pharma & Wellness</p>
                <p>Ice Creams & Frozen Desserts</p>
                <p>Beauty & Cosmetics</p>
                <p>Print Store</p>
              </div>
              <div className="flex flex-col gap-2 ">
                <p>Dairy & Breakfast</p>
                <p>Instant & Frozen Food</p>
                <p>Sweet Tooth</p>
                <p>Sauces & Spreads</p>
                <p>Organic & Premium</p>
                <p>Cleaning Essentials</p>
                <p>Personal Care</p>
                <p>Books</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Munchies</p>
                <p>Tea, Coffee & Health Drinks</p>
                <p>Atta, Rice & Dal</p>
                <p>Chicken, Meat & Fish</p>
                <p>Baby Care</p>
                <p>Home & Office</p>
                <p>Pet Care</p>
                <p>Toys & Games</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between  mt-16">
          <div className="flex items-center justify-between gap-16">
            <div>
              <p className="text-xs w-[380px] text-gray-600">
                © Blink Commerce Private Limited (formerly known as Grofers
                India Private Limited), 2016-2024{" "}
              </p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-gray-600">Download App</p>
              <img
                className="w-[100px]"
                src="https://blinkit.com/d61019073b700ca49d22.png"
              />
              <img
                className="w-[100px]"
                src="https://blinkit.com/8ed033800ea38f24c4f0.png"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 text-5xl">
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaSquareInstagram />
            <FaLinkedin />
            <FaSquareThreads />
          </div>
        </div>
        <div className="mt-6 px-4">
          <p className="text-gray-500">
            “Blinkit” is owned & managed by "Blink Commerce Private Limited"
            (formerly known as Grofers India Private Limited) and is not
            related, linked or interconnected in whatsoever manner or nature, to
            “GROFFR.COM” which is a real estate services business operated by
            “Redstone Consultancy Services Private Limited”.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
