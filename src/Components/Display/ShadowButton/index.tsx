import React from "react";
import { GiKnockedOutStars } from "react-icons/gi";
import { motion } from "framer-motion";

interface IShadowButtonProps {}

const ShadowButton: React.FunctionComponent<IShadowButtonProps> = (props) => {
  return (
    <div className="p-8">
      <button className="relative py-4 px-8 border text-gray-200 border-gray-400 rounded-full font-bold uppercase tracking-tighter hover:text-gray-900 hover:bg-yellow-400  hover:shadow-yellow-400">
        Shop Now
        <motion.div
          className="absolute -top-4 right-0 text-4xl text-gray-200"
          animate={{
            scale: 1.5,
          }}
          initial={{
            scale: 0,
          }}
        >
          <GiKnockedOutStars />
        </motion.div>
      </button>
    </div>
  );
};

export default ShadowButton;
