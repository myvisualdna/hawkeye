import React, { FC, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import ButtonClose from 'src/components/Shared/ButtonClose/ButtonClose';
import Checkbox from 'src/components/Shared/Checkbox/Checkbox';
import SortingTab from '../SearchComponents/SortingTab';
import { Table } from 'src/components/SearchPage/SearchBody/PropertyList/Table';
import { properties } from './properties';


const columns = [
  { accessor: 'id', label: 'ID' },
  // { accessor: 'propertyType', label: 'PropType' },
  // { accessor: 'date', label: 'date' },
  // { accessor: 'start_date', label: 'Start Date' },
]

export interface SectionGridHasMapProps {}

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);

  return (
    <div>
      <div className="relative flex min-h-screen mt-6">
        {/* CARDSSSS */}
        <div className="min-h-screen w-full xl:w-[780px] 2xl:w-[880px] flex-shrink-0 xl:px-8 ">
          {/* <Heading2 /> */}
          <SortingTab />
          <div className="grid grid-cols-1 gap-8">
            <Table rows={properties} columns={columns} />
          </div>
          <div className="flex mt-16 justify-center items-center">
            {/* <Pagination /> */}
          </div>
        </div>

        {!showFullMapFixed && (
          <div
            className="flex xl:hidden items-center justify-center fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-neutral-900 text-white shadow-2xl rounded-full z-30  space-x-3 text-sm cursor-pointer"
            onClick={() => setShowFullMapFixed(true)}
          >
            <i className="text-lg las la-map"></i>
            <span>Show map</span>
          </div>
        )}

        {/* MAPPPPP */}
        <div
          className={`xl:flex-grow xl:static xl:block ${
            showFullMapFixed ? 'fixed inset-0 z-50' : 'hidden'
          }`}
        >
          {showFullMapFixed && (
            <ButtonClose
              onClick={() => setShowFullMapFixed(false)}
              className="bg-white absolute z-50 left-3 top-3 shadow-lg rounded-xl w-10 h-10"
            />
          )}

          <div className="fixed xl:sticky top-0 xl:top-[88px] left-0 w-full h-full xl:h-[calc(100vh-88px)] rounded-md overflow-hidden">
            <div className="absolute bottom-5 left-3 lg:bottom-auto lg:top-2.5 lg:left-1/2 transform lg:-translate-x-1/2 py-2 px-4 bg-white dark:bg-neutral-800 shadow-xl z-10 rounded-2xl min-w-max">
              <Checkbox
                className="text-xs xl:text-sm"
                name="xx"
                label="Search as I move the map"
              />
            </div>

            <div className="bg-green-300 h-full">sadas</div>
            {/* BELLOW IS MY GOOGLE API KEY -- PLEASE DELETE AND TYPE YOUR API KEY */}
            {/* <GoogleMapReact
              defaultZoom={12}
              defaultCenter={DEMO_STAYS[0].map}
              bootstrapURLKeys={{
                key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
              }}
              yesIWantToUseGoogleMapApiInternals
            >
              {DEMO_STAYS.map((item) => (
                <AnyReactComponent
                  isSelected={currentHoverID === item.id}
                  key={item.id}
                  lat={item.map.lat}
                  lng={item.map.lng}
                  listing={item}
                />
              ))}
            </GoogleMapReact> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionGridHasMap;
