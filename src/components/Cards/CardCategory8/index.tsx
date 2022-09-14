import React from 'react';
import Image from 'next/image';

interface Props {
    id: number,
    preTitle: string,
    title: string,
    buttonText: string,
    imageUrl: string
  }


const CardCategory8 = ({id, preTitle, title, buttonText, imageUrl}: Props) => {
  return (
    <div className="h-full">
      <a
        href="#"
        className="group h-48 md:h-96 xl:h-full flex flex-col bg-gray-100 rounded-3xl shadow-lg overflow-hidden relative"
      >
        <Image
          src={imageUrl}
          loading="lazy"
          alt="Photo by Real State"
          className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
          layout="fill"
        />

        <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div className="relative p-6 xl:p-12 mt-auto">
          <span className="block text-gray-200 text-sm">{preTitle}</span>
          <h2 className="text-white text-2xl font-semibold transition duration-100 mb-2 xl:mb-6 xl:text-3xl">
            {title}
          </h2>

          {/* <span className="text-indigo-300 font-semibold">Read more</span> */}
          {/* <button
            className="inline-block px-12 py-3 text-sm font-medium text-black bg-gray-100 border border-gray-100 rounded active:text-gray-100 active:border-gray-100 hover:bg-gray-900 hover:text-gray-100 hover:border-gray-900 focus:outline-none"
          >
            {buttonText}
          </button> */}
        </div>
      </a>
    </div>
  );
};

export default CardCategory8;
