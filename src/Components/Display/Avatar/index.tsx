import React from "react";
import { motion } from "framer-motion";

interface IAvatarProps {}

const Avatar: React.FunctionComponent<IAvatarProps> = (props) => {
  return (
    <div className="flex  h-full justify-center items-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5 },
        }}
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{
          scale: 1.1,
        }}
        className="w-20 h-20 bg-violet-500 rounded-full flex justify-center items-center"
      >
        <span className=" text-xl font-bold">V</span>
      </motion.div>
    </div>
  );
};

export default Avatar;
