import React from 'react';

type Props = {};

const NewSectionTop = (props: Props) => {
  return (
    <div>
      <div className="md:flex md:items-center md:justify-between border-4">
        <div className="flex-1 min-w-0">
          <div className="lg:col-span-2 border-2 lg:pr-8">
            <h1 className="text-2xl font-extrabold font-display tracking-tight text-gray-900 sm:text-3xl">
              $723.000
            </h1>
          </div>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Publish
          </button>
        </div>
      </div>
      <div className="mt-0 md:mt-2 flex sm:flex-row sm:flex-wrap  space-x-4">
        <div className="mt-0 md:mt-2 flex items-center text-base text-gray-800">
          <span className="font-semibold mr-1">2</span>Beds
        </div>
        <div className="mt-0 md:mt-2 flex items-center text-base text-gray-800">
          <span className="font-semibold mr-1">2</span>Bathrooms
        </div>
        <div className="mt-0 md:mt-2 flex items-center text-base text-gray-800">
          <span className="font-semibold mr-1">582</span>Sqft.
        </div>
      </div>
      {/* <div className='mt-2'>
        <h3 className='font-display text-base'>9574 Southmoor Dr, Baton Rouge, LA 70815</h3>
      </div> */}
    </div>
  );
};

export default NewSectionTop;
