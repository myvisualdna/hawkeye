import React from 'react';

type Props = {};

const SectionFive = (props: Props) => {
  return (
    <div className='mt-8'>
      {/* HEADING */}
      <div className="pb-5 border-b border-gray-200 mb-6">
      <h3 className="text-2xl leading-6 font-medium text-gray-900">Price History</h3>
    </div>

      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                Event
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Price/sqft
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                7/18/2022
              </th>
              <td className="py-4 px-6">Listed for sale</td>
              <td className="py-4 px-6">$118,900</td>
              <td className="py-4 px-6">$299/sqft</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                7/22/2022
              </th>
              <td className="py-4 px-6">Listed for sale</td>
              <td className="py-4 px-6">$110,900</td>
              <td className="py-4 px-6">$279/sqft</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                8/04/2022
              </th>
              <td className="py-4 px-6">Listed for sale</td>
              <td className="py-4 px-6">$128,900</td>
              <td className="py-4 px-6">$319/sqft</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4 className='font-body text-xs font-medium mt-2 text-gray-400'>*Data Provided by users Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate</h4>
    </div>
  );
};

export default SectionFive;
