import React from "react";

interface IBoxProps {
  children: React.ReactNode;
}

const Box: React.FunctionComponent<IBoxProps> = ({ children }) => {
  return (
    <div className=" w-full border border-gray-600 rounded-lg h-3/4 mt-6 bg-gray-950">
      {children}
    </div>
  );
};

export default Box;
