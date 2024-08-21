import React from 'react';
import { Fragment } from 'react';
// import {
//   BriefcaseIcon,
//   CalendarIcon,
//   CheckIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
//   CurrencyDollarIcon,
//   LinkIcon,
//   LocationMarkerIcon,
//   PencilIcon,
// } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';
import SectionDetail from './sectionDetail';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

type Props = {};

const SectionTop = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-medium tracking-tight text-gray-900">
            $920,000
          </h1>
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-900 text-sm  rounded-lg text-gray-900 hover:bg-gray-50 active:bg-gray-300  mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-900 text-sm  rounded-lg text-gray-900 hover:bg-gray-50 active:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <h3
          className="text-base font-display font-light tracking-wide
 text-gray-700 mt-4"
        >
          Est. $1,1140 mo.
        </h3>
      </div>
      <div className="mt-4 space-y-1">
        {/* <h3 className="font-display text-base md:text-base ">
          3 bed 2 bath 2,045sqft
        </h3> */}
        <h3 className="font-display font-semibold text-base md:text-base text-gray-800 ">
          1457 N Halsted St Unit #38
        </h3>
        <h3 className="font-display font-light text-base md:text-base text-gray-800 ">
          Denver, CO 80247 — Windsor
        </h3>
      </div>
      <SectionDetail />
    </div>
  );
};

export default SectionTop;
