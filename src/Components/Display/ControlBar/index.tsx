import React from "react";
interface IControlBarProps {}

const ControlBar: React.FunctionComponent<IControlBarProps> = (props) => {
  const renderArrow = () => (
    <div className="absolute hidden top-1 right-0 group-hover:block">
      <img src="/arrowgt.svg" />
    </div>
  );

  return (
    <div className="flex justify-center items-center w-full h-full bg-[url('/2120.png')] bg-cover">
      <div className="w-[21rem] h-[25rem] border-[0.4px]  rounded-2xl bg-gray-900 bg-opacity-30 shadow-inner-light  shadow-gray-300 border-gray-500 backdrop-contrast-60 backdrop-blur-md box-border">
        <div className="flex gap-3 h-[42%] py-2 px-2">
          <div className="h-[100%] border-[0.1px] border-black flex-1 rounded-xl backdrop-blur-sm shadow-inner-light shadow-gray-300 px-2 py-3">
            <div className="flex justify-start gap-2">
              <div className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center bg-[#0C87F2]">
                <img src="/wifi.svg" className="m-auto" />
              </div>
              <div className="relative flex-1 group">
                <h5 className=" text-gray-200 text-sm font-semibold">Wi-Fi</h5>
                <span className="text-gray-400 text-xs font-semibold block">
                  Jio
                </span>
                {renderArrow()}
              </div>
            </div>
            <div className="flex justify-start gap-2 mt-2">
              <div className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#0C87F2]">
                <img src="/bluetooth.svg" className="m-auto" />
              </div>
              <div className="relative flex-1 group">
                <h5 className=" text-gray-200 text-sm font-semibold">
                  Bluetooth
                </h5>
                <span className="text-gray-400 text-xs font-semibold block">
                  On
                </span>
                {renderArrow()}
              </div>
            </div>
            <div className="flex justify-start gap-2 mt-2">
              <div className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-gray-500">
                <img src="/airdrop.svg" className="m-auto" />
              </div>
              <div className="relative flex-1 group">
                <h5 className=" text-gray-200 text-sm font-semibold">
                  AirDrop
                </h5>
                <span className="text-gray-400 text-xs font-semibold block">
                  Off
                </span>
                {renderArrow()}
              </div>
            </div>
          </div>
          <div className="h-[100%] flex-1 flex gap-2 flex-col">
            <div className="border-[0.1px]border-black flex-1 rounded-xl backdrop-blur-sm shadow-inner-light shadow-gray-300"></div>
            <div className="flex flex-1 gap-2">
              <div className="flex-1 border-[0.1px] border-black rounded-xl backdrop-blur-sm shadow-inner-light shadow-gray-300"></div>
              <div className="flex-1 border-[0.1px] border-black rounded-xl backdrop-blur-sm shadow-inner-light shadow-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="h-[17%] px-2">
          <div className="h-[100%] border-[0.1px] border-black flex-1 rounded-xl backdrop-blur-sm  shadow-inner-light shadow-gray-300"></div>
        </div>
        <div className="h-[17%] mt-2 px-2">
          <div className="h-[100%] border-[0.1px] border-black flex-1 rounded-xl  backdrop-blur-sm shadow-inner-light shadow-gray-300"></div>
        </div>
        <div className="h-[17%] mt-2 px-2">
          <div className="h-[100%] border-[0.1px] border-black flex-1 flex justify-start  rounded-xl backdrop-blur-sm  shadow-inner-light shadow-gray-300 py-3 px-2 gap-2">
            <img className="rounded-md" src="/benee.jpg" alt="" />
            <div className="relative flex-2">
              <h5 className=" text-gray-200 text-sm font-semibold">
                Find an Island
              </h5>
              <span className="text-gray-400 text-xs font-semibold block">
                BENEE
              </span>
            </div>
            <div className="flex justify-center gap-2 flex-1">
              <button className="block">
                <img src="/play.svg" alt="" />
              </button>
              <button className="block">
                <img src="/nextplay.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlBar;
