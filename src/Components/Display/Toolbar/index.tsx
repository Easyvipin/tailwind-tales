import React from "react";

interface IToolbarProps {}

const Toolbar: React.FunctionComponent<IToolbarProps> = (props) => {
  return (
    <div className="p-8 relative">
      <div className="border p-8 rounded-xl border-gray-700 w-[60%] m-auto mt-[10%] group">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit
        consequatur laboriosam unde, non ea, sit molestias tempora illo fuga
        assumenda corrupti labore accusantium dolorem repellat. Sint excepturi
        quod nam quo deserunt fuga, repellendus veritatis quos dicta quis
        pariatur atque.
        <DivToolbar />
      </div>
    </div>
  );
};

export const DivToolbar = () => {
  return (
    <div className="hidden absolute top-10 right-0 bg-gray-500 group-hover:block p-4">
      <div>
        
      </div>
      <div className="flex justify-center gap-4">
        <button className="border px-6 py-2 rounded-md">+ Add</button>
        <button className="border px-6 py-2 rounded-md">radius</button>
        <button className="border px-6 py-2 rounded-md">Change content</button>
      </div>
    </div>
  );
};

export default Toolbar;
