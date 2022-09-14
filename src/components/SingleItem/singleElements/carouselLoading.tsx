import React from 'react';

type Props = {};

const CarouselLoading = (props: Props) => {
  return (
    <div className="rounded-xl p-16 w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-96 bg-slate-200 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselLoading;
