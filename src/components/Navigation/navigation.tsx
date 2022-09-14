import React from 'react';

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div>
      <header className="shadow-sm">
        <div className="p-4 mx-auto max-w-screen-2xl">
          <div className="flex items-center justify-between space-x-4 lg:space-x-10">
            <div className="flex lg:w-0 lg:flex-1">
              <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>
            </div>

            <nav className="hidden text-sm font-medium space-x-8 md:flex">
              <a className="text-gray-900" href="">
              <div className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Buy</div>
              </a>
              <a className="text-gray-900" href="">
              <div className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">Rent</div>
              </a>
              <a className="text-gray-900" href="">
              <div className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">List your property</div>
              </a>
            </nav>

            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
              <a
                className="tertiary-button"
                href=""
              >
                Log in
              </a>

              <a
                className="primary-button"
                href=""
              >
                Sign up
              </a>
            </div>

            <div className="lg:hidden">
              <button
                className="p-2 text-gray-600 bg-gray-100 rounded-lg"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
