import React from 'react';
import { Disclosure } from '@headlessui/react';

type Props = {};

const SectionFour = (props: Props) => {
  return (
    <div>
      <div>
        <div className="pb-5 border-b border-gray-200 mb-6">
          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            Facts and Features
          </h3>
        </div>
        <div className="w-full ">
          <div className="mx-auto w-full rounded-2xl bg-white ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring ">
                    <span>Interior Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-gray-500`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                    <div className=" lg:w-full md:w-1/2 w-full">
                      <div className="h-full flex items-center border-gray-100 border p-4 rounded-lg">
                        <div className="flex-grow">
                          <div className="flex items-end mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 mr-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                              />
                            </svg>
                            <h2 className="text-gray-900 title-font font-medium">
                              Beds & Baths
                            </h2>
                          </div>

                          <div className="flex flex-wrap">
                            <div className="flex-auto">
                              <div className="text-gray-800 my-1">
                                Number of Bedrooms: 4
                              </div>
                              <div className="text-gray-800 my-1">
                                Number of Bathrooms (half): 1
                              </div>
                              <div className="text-gray-800 my-1">
                                Main Level Bedrooms: 1
                              </div>
                              <div className="text-gray-800 my-1">
                                Number of Bathrooms (full): 3
                              </div>
                            </div>
                            <div className="flex-auto ">
                              <div className="text-gray-800">
                                Number of Bathrooms (main level): 1
                              </div>
                            </div>
                            <div className="flex-auto ">
                              <div className="text-gray-800">
                                Third Column: let me see man
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring ">
                    <span>Exterior Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-gray-500`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If youre unhappy with your purchase for any reason, email us
                    within 90 days and well refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring ">
                    <span>Interior Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-gray-500`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If youre unhappy with your purchase for any reason, email us
                    within 90 days and well refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
