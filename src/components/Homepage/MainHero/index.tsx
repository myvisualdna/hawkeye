import React from 'react';
import Image from 'next/image';
import SearchModule from '../SearchModule';

type Props = {};

const MainHero = (props: Props) => {
  return (
    <div>
      <section className="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-3xl relative py-16 md:py-20 xl:py-48 xl:h-[750px]">
        <Image
          src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
          alt="Picture of the author"
          layout="fill"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <div className="bg-red-100 mix-blend-multiply absolute inset-0"></div>

        <div className="sm:max-w-6xl flex flex-col items-center relative p-4 border-4">
          {/* <p className="text-indigo-200 text-lg sm:text-xl text-center mb-4 md:mb-8">
            Very proud to introduce
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">
            Revolutionary way to build the web
          </h1> */}
          <SearchModule />
          {/* <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
            <a
              href="#"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Start now
            </a>

            <a
              href="#"
              className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Take tour
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default MainHero;
