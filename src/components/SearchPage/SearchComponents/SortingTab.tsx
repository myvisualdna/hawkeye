import React from 'react';
import SortingResults from 'src/components/SearchPage/SearchComponents/sortingResults';

type Props = {};

const SortingTab = (props: Props) => {
  return (
    <div>
      <div className="mb-4">
        <div>
          <div className="font-display text-xl font-bold text-gray-800">
            15.898 Homes and houses for sale in Boston, Massachussets
          </div>
        </div>
        <div>
          <div className="font-display text-sm font-regular mt-1 mb-4 text-gray-500">
            15.795 of second-hand and 99 of new homes
          </div>
        </div>
        <div className="flex items-center">
          <h2 className="font-display font-medium text-sm text-gray-500 mr-4">
            Sort by
          </h2>
          <SortingResults />
        </div>
      </div>
    </div>
  );
};

export default SortingTab;
