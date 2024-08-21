import React from 'react';

type Props = {};

const SectionDetail = (props: Props) => {
  return (
    <div className="bg-white mt-8">
      <h2 className="sr-only">Our perks</h2>
      <div className="max-w-7xl mx-auto divide-y-0 divide-gray-200 py-2 flex justify-center divide-x border-t border-b">
        <div className="py-1 w-1/3 flex">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none flex-col">
            <h1 className="font-display font-medium text-xl text-gray-900">2</h1>
            <div className=" flex-auto flex">
              <h3 className="font-display font-light text-gray-900 mt-1 tracking-wider">
                Bedrooms
              </h3>
            </div>
          </div>
        </div>
        <div className="py-1 w-1/3 flex">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none flex-col">
            <h1 className="font-display font-medium text-xl text-gray-900">2</h1>
            <div className=" flex-auto flex">
              <h3 className="font-display font-light text-gray-900 mt-1 tracking-wider	">
                Bathrooms
              </h3>
            </div>
          </div>
        </div>
        <div className="py-1 w-1/3 flex">
          <div className="max-w-xs mx-auto px-4 flex items-center lg:max-w-none flex-col">
            <h1 className="font-display font-medium text-xl text-gray-900">
              1,412
            </h1>
            <div className=" flex-auto flex">
              <h3 className="font-display font-light text-gray-900 mt-1 tracking-wider">
                Sq ft.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDetail;
