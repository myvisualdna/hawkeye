import React from 'react';

type Props = {};

const SectionFour = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <h1 className="font-display font-bold text-2xl mb-8 text-gray-800">
            Features
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-1">
          <div></div>
          <div>
            <div className="flow-root">
              <div className="-my-8 ">
                <details className="pt-8 group">
                  <summary className="flex items-center justify-between cursor-pointer bg-gradient-to-r from-zinc-50 via-green-200 to-green-400 hover:bg-gray-100 rounded-md p-2">
                    <h5 className="text-lg font-medium text-gray-900">
                      Interior Features
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    hic veritatis molestias culpa in, recusandae laboriosam
                    neque aliquid libero nesciunt voluptate dicta quo officiis
                    explicabo consequuntur distinctio corporis earum similique!
                  </p>
                </details>

                <details className="mt-8 group border-2">
                  <summary className="flex items-center justify-between cursor-pointer bg-gradient-to-r from-zinc-50 via-green-200 to-green-600 hover:bg-gray-100 rounded-md p-2">
                    <h5 className="text-lg font-medium text-gray-900">
                      Exterior Features
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className='grid grid-cols-2 gap-8'>
                    <div className='mt-2'>
                    <h5 className='font-display text-base font-semibold'>Interior Details</h5>
                      <ul className='mt-2'>
                        <li>
                          <p>Number of Rooms: 4</p>
                          <p>Types of Rooms: Kitchen</p>
                        </li>
                      </ul>
                    </div>
                    <div className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>column2</div>
                  </div>
                </details>
                <details className="pt-8 group">
                  <summary className="flex items-center justify-between cursor-pointer bg-gradient-to-r from-zinc-50 via-green-200 to-green-800 hover:bg-gray-100 rounded-md p-2">
                    <h5 className="text-lg font-medium text-gray-900">
                      Location Details
                    </h5>

                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    hic veritatis molestias culpa in, recusandae laboriosam
                    neque aliquid libero nesciunt voluptate dicta quo officiis
                    explicabo consequuntur distinctio corporis earum similique!
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-200 rounded-full duration-500 my-12" />
      </div>
    </div>
  );
};

export default SectionFour;
