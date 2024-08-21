import React from 'react';
import { MdOutlineIosShare } from 'react-icons/md';
import { RiHeartLine } from 'react-icons/ri';

type Props = {};

const SectionOne = (props: Props) => {
console.log("🚀 ~ file: sectionOne.tsx ~ line 8 ~ SectionOne ~ props", props)


  return (
    <div>
      <div className="flex flex-wrap justify-between border">
        <div>
          <h1 className="font-bold text-4xl font-display text-gray-800">
            4921 Walnut St.
          </h1>
          <h1 className="font-regular text-sm font-display text-gray-400 my-1">
          Dorchester Center, MA 02124
          </h1>
        </div>
        <div className="hidden xl:flex">
          <button className="flex items-center space-x-1 mr-4 hover:underline decoration-solid">
            <MdOutlineIosShare />
            <span className="font-display text-sm text-gray-900">Share</span>
          </button>
          <button className="flex items-center space-x-1 hover:underline decoration-solid">
            <RiHeartLine />
            <span className="font-display text-sm text-gray-900">Save</span>
          </button>
        </div>
      </div>
      <div className="flex my-4">
        <h4 className="font-display text-sm font-regular text-gray-800 mr-2">
          2 Bedroom
        </h4>
        <div className="font-display text-sm font-regular text-gray-800 mr-2">
          •
        </div>
        <h4 className="font-display text-sm font-regular text-gray-800 mr-2">
          1 Bathroom
        </h4>
        <div className="font-display text-sm font-regular text-gray-800 mr-2">
          •
        </div>
        <h4 className="font-display text-sm font-regular text-gray-800 mr-2">
          569 Sqft.
        </h4>
      </div>
      {/* Mobile Buttons */}
      <div className="flex xl:hidden my-4">
        <button className="flex items-center space-x-1 mr-4 hover:underline decoration-solid">
          <MdOutlineIosShare />
          <span className="font-display text-sm text-gray-900">Share</span>
        </button>
        <button className="flex items-center space-x-1 hover:underline decoration-solid">
          <RiHeartLine />
          <span className="font-display text-sm text-gray-900">Save</span>
        </button>
      </div>
      <hr className="border-1 border-gray-200 rounded-full duration-500 my-8" />
    </div>
  );
};

export default SectionOne;
