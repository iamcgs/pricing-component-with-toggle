import React from 'react';

function Cards({ toggle }) {
  return (
    <section className="mx-auto grid w-[325px] items-center gap-8 lg:w-[975px] lg:grid-cols-3 lg:gap-0 xl:w-[1050px]">
      <div className="h-[450px] w-full rounded-xl bg-white p-8 text-center drop-shadow-md lg:w-[325px] lg:rounded-r-none xl:w-[350px]">
        <h2 className="text-xl text-grayishBlue">Basic</h2>
        <h3 className="flex items-center justify-center gap-1 py-8 text-6xl text-darkGrayishBlue">
          <span className="text-4xl">$</span>
          {toggle ? <span>19.99</span> : <span>199.99</span>}
        </h3>
        <div className="mb-6 flex flex-col items-center justify-between">
          <span className="w-full border-t border-b border-lightGrayishBlue py-4 text-grayishBlue">
            500 GB Storage
          </span>
          <span className="w-full border-b border-lightGrayishBlue py-4 text-grayishBlue">
            2 Users Allowed
          </span>
          <span className="w-full border-b  border-lightGrayishBlue py-4 text-grayishBlue">
            Send up to 3 GB
          </span>
        </div>
        <button className="hover:bg-gradient-none w-full rounded-md bg-gradient-to-r from-gradientFrom to-gradientTo py-3 px-8 uppercase tracking-widest text-veryLightGrayishBlue hover:border-2 hover:border-gradientTo hover:bg-transparent hover:from-transparent hover:to-transparent hover:text-gradientTo">
          Learn More
        </button>
      </div>
      <div className="h-[450px] w-full rounded-xl bg-gradient-to-b from-gradientFrom to-gradientTo p-8 text-center drop-shadow-md lg:h-[500px] lg:w-[325px] lg:py-10 lg:pt-14 lg:drop-shadow-xl xl:w-[350px]">
        <h2 className="text-xl text-veryLightGrayishBlue">Professional</h2>
        <h3 className="flex items-center justify-center gap-1 py-8 text-6xl text-white">
          <span className="text-4xl">$</span>
          {toggle ? <span>24.99</span> : <span>249.99</span>}
        </h3>
        <div className="mb-6 flex flex-col items-center justify-between">
          <span className="w-full border-t border-b border-lightGrayishBlue py-4 text-veryLightGrayishBlue">
            1 TB Storage
          </span>
          <span className="w-full border-b border-lightGrayishBlue py-4 text-veryLightGrayishBlue">
            5 Users Allowed
          </span>
          <span className="w-full border-b  border-lightGrayishBlue py-4 text-veryLightGrayishBlue">
            Send up to 10 GB
          </span>
        </div>
        <button className="w-full rounded-md bg-white py-3 px-8 uppercase tracking-widest text-gradientTo hover:border-2 hover:border-white hover:bg-transparent hover:text-white">
          Learn More
        </button>
      </div>
      <div className="h-[450px] w-full rounded-xl bg-white p-8 text-center drop-shadow-md lg:w-[325px] lg:rounded-l-none xl:w-[350px]">
        <h2 className="text-xl text-grayishBlue">Master</h2>
        <h3 className="flex items-center justify-center gap-1 py-8 text-6xl text-darkGrayishBlue">
          <span className="text-4xl">$</span>
          {toggle ? <span>39.99 </span> : <span>399.99 </span>}
        </h3>
        <div className="mb-6 flex flex-col items-center justify-between">
          <span className="w-full border-t border-b border-lightGrayishBlue py-4 text-grayishBlue">
            2 TB Storage
          </span>
          <span className="w-full border-b border-lightGrayishBlue py-4 text-grayishBlue">
            10 Users Allowed
          </span>
          <span className="w-full border-b  border-lightGrayishBlue py-4 text-grayishBlue">
            Send up to 20 GB
          </span>
        </div>
        <button className="w-full  rounded-md bg-gradient-to-r from-gradientFrom to-gradientTo py-3 px-8 uppercase tracking-widest text-veryLightGrayishBlue hover:border-2 hover:border-gradientTo hover:bg-transparent hover:from-transparent hover:to-transparent hover:text-gradientTo">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Cards;
