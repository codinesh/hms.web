import React from "react";

const Page: React.FC = (props) => {
  return (
    <div>
      <div className='print:hidden px-4 mx-auto max-w-7xl sm:px-6 md:px-8'>
        <h1 className='text-2xl font-semibold text-gray-900'>Dashboard</h1>
      </div>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 md:px-8'>
        <div className='py-4'>{props.children}</div>
      </div>
    </div>
  );
};

export default Page;
