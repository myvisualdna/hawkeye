import React, { FC, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Table } from 'src/components/SearchPage/SearchBody/PropertyList/Table';
import { properties } from './properties';

const columns = [
  { accessor: 'id', label: 'ID' },
  // { accessor: 'propertyType', label: 'PropType' },
  // { accessor: 'date', label: 'date' },
  // { accessor: 'start_date', label: 'Start Date' },
];

export interface SectionGridHasMapProps { }

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);

  return (
    <div>
      {/* <SortingTab /> */}
      <div className='grid grid-cols-5 gap-4 p-4'>
        <div className='col-span-5 lg:col-span-3'>
        <Table rows={properties} columns={columns} />
        </div>
        <div className='hidden lg:block lg:col-span-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black'>column2</div>
      </div>
    </div>
  );
};

export default SectionGridHasMap;
