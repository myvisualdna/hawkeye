import React from 'react';

type Props = {};

const Steps = (props: Props) => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-0 lg:py-20">
        <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">The deep ocean</h6>
              <p className="mb-12 text-base text-gray-900 font-body">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea robin Antarctic cod.
              </p>
              <button className='primary-button'>Join</button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Trust</h6>
              <p className="mb-12 text-base text-gray-900 font-body">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea robin Antarctic cod.
              </p>
              <button className='primary-button'>Read</button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Support</h6>
              <p className="mb-12 text-base text-gray-900 font-body">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. Rough pomfret lemon shark plownose chimaera southern sandfish
                kokanee northern sea robin Antarctic cod.
              </p>
              <button className='primary-button'>Tell us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
