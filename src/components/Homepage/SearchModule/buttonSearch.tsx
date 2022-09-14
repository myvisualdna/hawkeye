import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

type Props = {};

const ButtonSearch = (props: Props) => {
  return (
    <div>
      <button className="flex ">
        <a
          className="inline-block p-4 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500"
          href="/download"
        >
          <span className="sr-only"> Download </span>
          <IoSearchOutline className='w-7 h-7' />

          {/* <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg> */}
        </a>
      </button>
    </div>
  );
};

export default ButtonSearch;
