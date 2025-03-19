import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import dashboard from "../assets/images/dashboard.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen  flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-2xl sm:text-xl  mb-6 sm:mt-32 mt-16  font-bold">
            Your local marketplace, reimagined.
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold tracking-wide  text-primaryText  px-8 sm:px-8 md:px-20 lg:px-4">
            <h4 className="inline md:hidden">Welcome to LocalX – Your Local Marketplace, Faster & Smarter!</h4>
            <h4 className="hidden md:inline">Welcome to LocalX – Your Local Marketplace, Faster & Smarter!</h4>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10  ">
            LocalX is a smart local marketplace that connects customers with nearby stores, making local shopping faster, easier, and more convenient. Whether you need groceries, fashion, electronics, or daily essentials, LocalX brings your favorite stores to your fingertips.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button
              className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
              aria-label="Get started"
            >
              Get Started
            </button>
            <button
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid  flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
              onClick={() => setIsModalOpen(true)}
              aria-label="Live demo"
            >
              Live demo
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
         
          <div className="flex flex-col lg:flex-row  items-center mt-10">
                        <div className="w-[350px] sm:w-[380px] lg:w-1/3  px-4 mb-8 lg:mb-0">
                          <div className="p-8 bg-bgDark3 rounded-3xl">
                            <h3 className="mb-4 text-xl font-bold font-heading text-primaryText text-left">
                            How is LocalX Different?
                            </h3>
                            
                            
                            <ul className="mb-2 2xl:mb-6 text-primaryText">
                                <li className="mb-4 flex" >
                                  <CheckArrowIcon />
                                  <span>{"Faster Deliveries – Products reach customers in minutes or hours or max 1 day."}</span>
                                </li>
                                <li className="mb-4 flex" >
                                  <CheckArrowIcon />
                                  <span>{"More Product Categories – Covers a wider range of businesses than most quick-commerce apps."}</span>
                                </li>
                                <li className="mb-4 flex" >
                                  <CheckArrowIcon />
                                  <span>{"Lower Commission for Businesses – Supports local sellers by charging lower fees than traditional platforms."}</span>
                                </li>
                                <li className="mb-4 flex" >
                                  <CheckArrowIcon />
                                  <span>{"Seamless Shopping Experience – One app for all daily needs, home services, food, and essentials."}</span>
                                </li>
                            </ul>
                            
                          </div>
                        </div>
                        <div className=" w-[350px] sm:w-[380px] lg:w-1/3  px-4 mb-8 lg:mb-0">
                          <div className="px-8 py-8 bg-bgDark3 rounded-3xl">
                            <h3 className="mb-4 2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-left">
                            How LocalX Works?
                            </h3>
                            
                            <ul className="mb-14 text-primaryText">
                                <li className="mb-4 flex" >
                                  <CheckArrowIcon />
                                  <span>{"Stores & Service Providers List Their Products – Businesses create a profile, upload products/services, and set pricing."}</span>
                                </li>
                                <li className="mb-4 flex" >
                                  <CheckArrowIcon />
                                  <span>{"Customers Browse & Order – Users find nearby stores, compare prices, and place orders."}</span>
                                </li>
                                <li className="mb-4 flex" >
                                  <CheckArrowIcon />
                                  <span>{"Fast Delivery & Pickup – Stores can self-deliver, use LocalX’s fleet, or allow in-store pickup."}</span>
                                </li>
                                <li className="mb-4 flex" >
                                  <CheckArrowIcon />
                                  <span>{"Secure Payments & Support – Integrated UPI, Cards, Wallets, and Cash-on-Delivery options."}</span>
                                </li>
                            </ul>
                            
                          </div>
                        </div>
                        <div className="w-[350px] sm:w-[380px] lg:w-1/3  px-4 mb-8 lg:mb-0">
                          <div className="p-8 bg-bgDark3 rounded-3xl">
                            <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                            Who Can Use LocalX?
                            </h3>
                            
                            <ul className="mb-2 2xl:mb-6 text-primaryText">
                                <li className="mb-4 flex">
                                  <CheckArrowIcon />
                                  <span>{"Local businesses & retailers (Grocery, Electronics, Fashion, etc.)"}</span>
                                </li>
                                <li className="mb-4 flex">
                                  <CheckArrowIcon />
                                  <span>{"Service providers (Electricians, Plumbers, AC Repair, etc.)"}</span>
                                </li>
                                <li className="mb-4 flex">
                                  <CheckArrowIcon />
                                  <span>{"Restaurants & food outlets"}</span>
                                </li>
                                <li className="mb-4 flex">
                                  <CheckArrowIcon />
                                  <span>{"Local Businesses & Sellers"}</span>
                                </li>
                                <li className="mb-4 flex">
                                  <CheckArrowIcon />
                                  <span>{"Delivery Partners"}</span>
                                </li>
                            </ul>
                            
                          </div>
                        </div>
                      </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-bgDark1  fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
