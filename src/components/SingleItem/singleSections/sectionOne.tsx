import React from 'react';
import { MdOutlineIosShare } from 'react-icons/md';
import { RiHeartLine } from 'react-icons/ri';
import EnergyIcon from 'src/styles/icons/EnergyIcon.svg';
import EmissionIcon from 'src/styles/icons/EmissionIcon.svg';
import Image from 'next/image';

type Props = {};

const SectionOne = (props: Props) => {
  const energyBadgeSelector = (key) => {
    switch (key) {
      case 'A':
        return (
          <span className="bg-green-600 text-green-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            A
          </span>
        );
        break;
      case 'B':
        return (
          <span className="bg-green-400 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            B
          </span>
        );
        break;
      case 'C':
        return (
          <span className="bg-green-200 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            C
          </span>
        );
        break;
      case 'D':
        return (
          <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
            D
          </span>
        );
        break;
      case 'E':
        return (
          <span className="bg-orange-200 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
            E
          </span>
        );
        break;
      case 'F':
        return (
          <span className="bg-orange-300 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
            F
          </span>
        );
        break;
      case 'G':
        return (
          <span className="bg-red-500 text-red-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
            G
          </span>
        );
        break;

      default:
        return <div>nothing</div>;
        break;
    }
  };
  console.log(props);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4"></div>
      <div className="flex flex-wrap justify-between">
        <div>
          <h1 className="font-semibold text-xl font-display text-gray-800">
            4921 Shoreline St, Miami - Zip 49012
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
      <div className="flex my-2">
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
      <div>
        <div className="">
          <div className="flex mr-8 mb-6 items-center ">
            <div className="mr-8">
              <Image src={EnergyIcon} alt="energy" width={30} height={30} />
            </div>
            <div>
              <div className="font-display text-sm font-medium text-gray-800">
                Energy Consumption
              </div>
              <div>
                {energyBadgeSelector('A')}
              </div>
            </div>
          </div>
          <div className="flex mr-8 items-center">
            <div className="mr-8">
              <Image src={EmissionIcon} alt="energy" width={30} height={30} />
            </div>
            <div>
            <div className="font-display text-sm font-medium text-gray-800">
                Emissions
              </div>
              <div>
              {energyBadgeSelector('G')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-1 border-gray-200 rounded-full duration-500 my-8" />
    </div>
  );
};

export default SectionOne;
