import React from 'react';
import TypeSearch from './typeSearch';
import ComboSearch from './comboSearch';
import PropertyType from './propertyType';
import ButtonSearch from './buttonSearch';

type Props = {};

function SearchModule({}: Props) {
  return (
    <div>
      <div className="grid grid-cols-8 gap-4 bg-white py-4 pl-6 w-full rounded-full">
        <div className="col-span-3 flex items-center ">
          <ComboSearch  />
        </div>

        <div className="col-span-2  flex items-center">
          <TypeSearch />
        </div>
        <div className="col-span-2  flex items-center">
          <PropertyType />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          {/* <PropertyType /> */}
          <ButtonSearch />
        </div>
      </div>
    </div>
  );
}

export default SearchModule;
