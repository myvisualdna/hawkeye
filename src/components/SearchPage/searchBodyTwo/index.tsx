import React from 'react';
import SortingSelector from '../SearchComponents/sortingSelector';
import { properties } from './properties';
import SearchResultCard from 'src/components/Cards/SearchResultCard';
import MobileSearchMenu from 'src/components/SearchPage/SearchComponents/mobileSearchMenu';
import SearchResultCardTwo from 'src/components/Cards/SearchResultCardTwo';

type Props = {};

const SearchBodyTwo = (props: Props) => {
  return (
    <div className="flex">
      <div className="w-full lg:w-4/6 p-4 lg:p-8">
        <div>
          <h1 className="font-display font-black lg:text-3xl md:text-3xl mb-4 text-base">
            Properties for sale in San Francisco, CA
          </h1>
          <div className="my-4 flex items-center space-x-4 sticky top-0 z-10 justify-between">
            <h3 className="font-display font-regular text-sm text-gray-500">
              1,663 Homes
            </h3>
            <div className="flex items-center ml-8">
              <h3 className="font-display font-regular text-sm  text-gray-800 mr-4">
                Sort by
              </h3>{' '}
              <SortingSelector />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-4 ">
          {properties.map((item) => (
            // <SearchResultCard key={item.id} data={item} />
            <SearchResultCardTwo key={item.id} data={item} />
          ))}
        </div>
        <div
          title="Mobile Search Button"
          className="fixed lg:hidden z-40 bottom-10 right-8 bg-gray-900 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-50 hover:text-black hover:drop-shadow-2xl active:animate-ping duration-300"
        >
          <MobileSearchMenu />
        </div>
      </div>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hidden lg:flex lg:w-2/6">
        Right Side
      </div>
    </div>
  );
};

export default SearchBodyTwo;
