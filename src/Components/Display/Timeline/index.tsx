import React from "react";
import { animate, motion } from "framer-motion";

interface ITimelineProps {}

const connectVariant = {};

const variants = {
  hidden: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const circleVariants = {
  hidden: {
    opacity: 0,
    rotateZ: "-15deg",
    scale: -2,
  },
  animate: {
    opacity: 1,
    rotateZ: "0deg",
    scale: 1,
  },
};

const lineVariants = {
  hidden: {
    opacity: 0,
    height: "0",
  },
  animate: {
    opacity: 1,
    height: "12vh",
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const Timeline: React.FunctionComponent<ITimelineProps> = (props) => {
  return (
    <div className="p-8">
      <motion.div
        className="w-[4rem] flex flex-col justify-center items-center"
        variants={variants}
        animate={"animate"}
        initial={"hidden"}
      >
        <motion.div
          className="relative h-[4rem] w-[4rem] border-2 border-[#9333ea] text-[#c084fc] shadow shadow-[#9333ea] rounded-full flex justify-center items-center font-bold text-2xl"
          variants={circleVariants}
        >
          A
          <motion.div
            className="absolute left-[200%] border-[0.1px] border-gray-700 text-sm  tracking-tighter  text-gray-100 p-4 rounded-lg w-[250px]"
            variants={circleVariants}
          >
            Scan the QR Code 
          </motion.div>
        </motion.div>
        <motion.div
          className="w-[0.2rem] bg-[#c026d3]"
          variants={lineVariants}
        ></motion.div>
        <motion.div
          className="relative h-[4rem] w-[4rem] border-2 border-[#9333ea] text-[#c084fc] text-2xl shadow shadow-[#9333ea] rounded-full flex justify-center items-center font-bold "
          variants={circleVariants}
        >
          B
          <motion.div
            className="absolute  left-[200%] border-[0.1px] border-gray-700 text-sm  tracking-tighter text-gray-100 p-4 rounded-lg w-[250px]"
            variants={circleVariants}
          >
            Enter the Required Amount
          </motion.div>
        </motion.div>

        <motion.div
          className="w-[0.2rem] bg-[#c026d3]"
          variants={lineVariants}
        ></motion.div>
        <motion.div
          className="relative h-[4rem] w-[4rem] border-2 border-[#9333ea] text-[#c084fc] text-2xl shadow shadow-[#9333ea] rounded-full flex justify-center items-center font-bold "
          variants={circleVariants}
        >
          C
          <motion.div
            className="absolute  left-[200%] border-[0.1px] border-gray-700 p-4 rounded-lg w-[250px] text-sm  tracking-tighter text-gray-100"
            variants={circleVariants}
          >
            Make the payment
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Timeline;
