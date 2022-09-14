import React from 'react';

type Props = {};

const numbers = [1, 2, 3, 4];

const CardLoading = (props: Props) => {
  return (
    <div>
      <div className={`nc-SectionSliderNewCategories `}>
        <div className={` flow-root`}>
          <div className="bg-gray-200 h-12 w-64 p-3 overflow-hidden animate-pulse" />
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides py-6">
              {numbers.map((item, index) => (
                <li key={index}>
                  <div className="bg-white mr-6 rounded-2xl ">
                    <div>
                      <div className="bg-gray-200 h-64 w-96 p-3 overflow-hidden animate-pulse rounded-2xl " />
                    </div>
                    <div className="h- p-3">
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
                        <div className=" h-8 bg-gray-200 rounded animate-pulse"></div>
                        <div className="..."></div>
                        <div className="col-span-2 ..."></div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
