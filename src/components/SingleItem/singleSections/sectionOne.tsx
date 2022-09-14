import React from 'react';
import { MdOutlineIosShare } from 'react-icons/md';
import { RiHeartLine } from 'react-icons/ri';

type Props = {};

const SectionOne = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
      </div>
      <div className="flex flex-wrap justify-between">
        <div>
          <h1 className="font-semibold text-2xl font-display">
            4921 Shoreline St, Miami - Zip 49012
          </h1>
        </div>
        <div className="hidden xl:flex">
          <button className="flex items-center space-x-1 mr-4 hover:underline decoration-solid">
            <MdOutlineIosShare />
            <span className="font-body text-sm text-gray-900">Share</span>
          </button>
          <button className="flex items-center space-x-1 hover:underline decoration-solid">
            <RiHeartLine />
            <span className="font-body text-sm text-gray-900">Save</span>
          </button>
        </div>
      </div>
      <div className="flex my-2">
        <h4 className="font-body text-base font-regular text-gray-400 mr-2">
          2 Bedroom
        </h4>
        <div className="font-body text-base font-regular text-gray-400 mr-2">
          •
        </div>
        <h4 className="font-body text-base font-regular text-gray-400 mr-2">
          1 Bathroom
        </h4>
        <div className="font-body text-base font-regular text-gray-400 mr-2">
          •
        </div>
        <h4 className="font-body text-base font-regular text-gray-400 mr-2">
          569 Sqft.
        </h4>
      </div>
      {/* Mobile Buttons */}
      <div className="flex xl:hidden">
        <button className="flex items-center space-x-1 mr-4 hover:underline decoration-solid">
          <MdOutlineIosShare />
          <span className="font-body text-sm text-gray-900">Share</span>
        </button>
        <button className="flex items-center space-x-1 hover:underline decoration-solid">
          <RiHeartLine />
          <span className="font-body text-sm text-gray-900">Save</span>
        </button>
      </div>
      <hr className="border-1 border-gray-200 rounded-full duration-500 my-8" />
    </div>
  );
};

export default SectionOne;
