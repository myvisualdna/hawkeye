import React from 'react';

type Props = {};

const PosterLoading = (props: Props) => {
  return (
    <div>
      <div className="">
        <div className="bg-gray-200 h-12 w-96 p-6 mb-4 overflow-hidden animate-pulse" />
        <div className="flex flex-wrap  lg:-mx-2 xl:-mx-2">
          <div className="w-full xl:h-[600px]  lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <div className="h-full">
              <div className="bg-gray-200 h-full w-full p-3 overflow-hidden animate-pulse rounded-2xl " />
            </div>
          </div>

          <div className="w-full xl:h-[600px] lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <div className="h-1/2 pb-2">
              <div className="h-full">
                <div className="bg-gray-200 h-full w-full p-3 overflow-hidden animate-pulse rounded-2xl " />
              </div>{' '}
            </div>
            <div className="h-1/2 pt-2">
              <div className="h-full">
                <div className="bg-gray-200 h-full w-full p-3 overflow-hidden animate-pulse rounded-2xl " />
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterLoading;
