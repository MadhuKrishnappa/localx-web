import { motion } from "framer-motion";

import feature1 from "../assets/images/feature1.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-10 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-10"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle text-primaryColor">Your Local Marketplace, Simplified.</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              LocalX Features
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
              LocalX aims to digitise local commerce by creating an ecosystem where users can discover and support local businesses while enjoying the convenience of modern e-commerce. It’s a perfect blend of technology and community-driven shopping!
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Nearby Stores, Instantly – Shop from trusted local businesses around you.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Fast & Flexible Delivery – Get your orders delivered instantly or schedule them at your convenience.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Seamless Payments – Choose from UPI, cards, wallets, or cash on delivery.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Real-Time Order Tracking – Stay updated on your deliveries with live tracking.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Exclusive Local Deals – Unlock special discounts from your favorite neighborhood stores.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Wide Product Range – Groceries, fashion, electronics, and more—all in one app</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Empower Local Businesses – Helping stores go digital with easy inventory & order management.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={feature1.src}
                  alt="Feature image 1"
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="Feature image 1"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={feature2.src}
                  alt="Feature image 2"
                  className="rounded-xl  main-border-gray mx-auto sm:mx-unset"
                  aria-label="Feature image 2"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature3.src}
                  alt="Feature image 3"
                  className="rounded-xl  main-border-gray"
                  aria-label="Feature image 3"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature4.src}
                  alt="Feature image 4"
                  className="rounded-xl  main-border-gray"
                  aria-label="Feature image 4"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
