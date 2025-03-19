import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "1. How do I place an order on LocalX?",
    answer:
      "Simply browse through the available stores, select the items you want, add them to your cart, and proceed to checkout. You can choose home delivery or store pickup.",
  },
  {
    question: "2. Can I schedule a delivery for later?",
    answer:
      "Yes! LocalX allows you to schedule deliveries at a time that is convenient for you.",
  },
  {
    question: "3. How do I track my order?",
    answer:
      "Once you place an order, you can track it in real-time from your profile under My Orders.",
  },
  {
    question: "4. What happens if an item is out of stock after I place an order?",
    answer:
      "If an item is unavailable, the store may offer a replacement or refund. You will be notified in such cases.",
  },
  {
    question: "5. Can I order from multiple stores in one go?",
    answer:
      "Currently, each order is placed per store, but you can place multiple orders from different stores at the same time.",
  },
  {
    question: "6. How can I register my store on LocalX?",
    answer:
      "Sign up as a seller, fill in your business details, upload product listings, and start receiving orders.",
  },
  {
    question: "7. What are the charges for selling on LocalX?",
    answer:
      "LocalX charges a small commission on each sale. Details of pricing and commissions are available in the seller dashboard.",
  },
  {
    question: "8. How do I manage my store and inventory?",
    answer:
      "You get access to an easy-to-use seller dashboard where you can add, update, and manage product listings, orders, and stock levels.",
  },
  {
    question: "9.  Can I offer discounts and special promotions?",
    answer:
      "Yes, sellers can create special offers, discounts, and coupons to attract more customers.",
  },
  {
    question: "10. How do I receive payments?",
    answer:
      "Payments are processed securely and transferred to your registered bank account based on LocalX’s payout cycle.",
  },
  {
    question: "11. Is LocalX available in my city?",
    answer:
      "LocalX is expanding rapidly. Check the app or website to see if we are available in your area.",
  }
];

export const FAQ = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Have any questions?</p>
          <h2 className="mb-16 block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
