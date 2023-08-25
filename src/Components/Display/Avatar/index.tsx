import React from "react";
import { easeInOut, motion } from "framer-motion";

interface IAvatarProps {}

const Avatar: React.FunctionComponent<IAvatarProps> = (props) => {
  const variants = {
    initial: {
      scale: 1,
    },
    whileTap: {
      scale: 1.6,
    },
  };

  const detail = {
    initial: {
      scale: 1,
      opacity: 0,
      x: 0,
      display: "none",
    },
    whileTap: {
      scale: 1,
      opacity: 1,
      x: 120,
      display: "block",
    },
  };

  const content = {
    initial: {
      display: "block",
    },
    whileTap: {
      display: "block",
    },
  };

  return (
    <div className="flex  h-full justify-center items-center">
      <div className="">
        <motion.div
          initial="initial"
          whileHover="whileTap"
          variants={variants}
          transition={{
            ease: easeInOut,
            duration: 0.8,
          }}
          className="w-20 h-20 bg-violet-500 rounded-full  flex justify-center items-center cursor-pointer shadow-3xl shadow-violet-400 border-2 border-violet-300"
          style={{
            background: "url('https://i.pravatar.cc/100')",
            backgroundSize: "cover",
          }}
        >
          <motion.div className="" variants={detail}>
            <h1 className="text-[0.6rem] font-semibold">John Doe</h1>
            <h2 className="text-[0.4rem]">Software Engineer</h2>
            <div className="border border-violet-500 rounded p-2 mt-1 shadow-2xl shadow-violet-400">
              <div className="flex justify-start gap-2 items-center">
                <span className=" bg-blue-500 text-white text-[0.4rem] p-[0.2rem]">
                  Reactjs
                </span>
                <span className=" bg-blue-500 text-white text-[0.4rem] p-[0.2rem]">
                  Nextjs
                </span>
                <span className=" bg-blue-500 text-white text-[0.4rem] p-[0.2rem]">
                  Typescript
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Avatar;
