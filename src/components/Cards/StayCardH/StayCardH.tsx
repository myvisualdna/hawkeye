import React, { FC } from 'react';
import GallerySlider from 'src/components/SearchPage/SearchBody/GallerySlider/GallerySlider';
// import { DEMO_STAY_LISTINGS } from './listings';
import { StayDataType } from 'data/types';
import StartRating from 'src/components/SingleItem/StartRating/StartRating';
import Link from 'next/link';
import BtnLikeIcon from 'src/components/SearchPage/SearchBody/BtnLikeIcon/BtnLikeIcon';
import SaleOffBadge from 'src/components/SearchPage/SearchBody/SaleOffBadge/SaleOffBadge';
import Badge from 'src/components/Shared/Badge/Badge';
import { IoBedOutline } from 'react-icons/io5';
import { FaShower } from 'react-icons/fa';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { ImArrowDown2 } from 'react-icons/im';
import Avatar from 'src/components/Shared/Avatar/Avatar';

export interface StayCardHProps {
  className?: string;
  data?: StayDataType;
}

const StayCardH: FC<StayCardHProps> = ({
  className = '',
  data ,
}) => {
  const {
    galleryImgs,
    listingCategory,
    address,
    title,
    href,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
  } = data;

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const renderSliderGallery = () => {
    return (
      <div className="relative flex-shrink-0 w-full md:w-72">
        <GallerySlider
          ratioClass="aspect-w-6 aspect-h-5"
          galleryImgs={galleryImgs}
          uniqueID={`StayCardH_${id}`}
          href={href}
        />
        <BtnLikeIcon isLiked={like} className="absolute right-3 top-3" />
        {saleOff && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const renderTienIch = () => {
    return (
      <Link href={`/detail/${id}`}>
        <div className="mb-6">
          <a className="group">
            {/* <h3 className="mt-4 font-body text-sm text-gray-500">safas</h3> */}
            <p className="mb-4 font-normal text-sm text-gray-500 dark:text-gray-400 my-1">
              2312 Main St., Miami - FL, 29012
            </p>
            <div className="grid grid-cols-3 gap-1 mt-0">
              <div className="h-2 flex items-center col-span-3 my-1">
                <h4 className="font-body font-regular text-sm text-gray-700 mr-1">
                  <span className="font-body font-regular text-sm text-gray-700 mr-1">
                    2
                  </span>{' '}
                  Beds
                </h4>
                <div className="mx-2 text-gray-700">•</div>
                <h4 className="font-body font-regular text-sm text-gray-700 mr-1">
                  <span className="font-body font-regular text-sm text-gray-700 mr-1">
                    2
                  </span>{' '}
                  Bath
                </h4>
                <div className="mx-2 text-gray-700">•</div>
                <h4 className="font-body font-regular text-sm text-gray-700 mr-1">
                  <span className="font-body font-regular text-sm text-gray-700 mr-1">
                    1242
                  </span>{' '}
                  Sqft
                </h4>
                <div className="mx-2 text-gray-700">•</div>
                <h4 className="font-body font-regular text-sm text-gray-700 mr-1">
                  <span className="font-body font-regular text-sm text-gray-700 mr-1">
                    Garage Included
                  </span>{' '}
                </h4>
              </div>
            </div>
          </a>
        </div>
      </Link>
    );
  };

  const renderContent = () => {
    return (
      <div className="flex-grow p-3 sm:p-5 flex flex-col ">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-neutral-500 dark:text-neutral-400">
            <span>Townhouse in {title}</span>
            <div>
              {' '}
              <strong className="border border-green-400 text-white bg-green-400 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
                Featured
              </strong>
            </div>
          </div>

          <Link href={`/detail/${id}`}>
            <div className="flex items-center space-x-2">
              {/* {isAds && <Badge name="ADS" color="green" />} */}
              <h2 className="text-3xl font-display font-bold capitalize text-gray-700">
                <span className="line-clamp-1">{priceFormatter.format(price)}</span>
              </h2>
              <strong className="inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium">
                <span className="animate-ping w-2.5 h-2.5 bg-green-600/75 rounded-full absolute -top-1 -left-1"></span>
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full absolute -top-1 -left-1"></span>

                <ImArrowDown2 className="text-green-700" />

                <span className="text-green-700 ml-1.5">
                  Has been reduced $12.000
                </span>
              </strong>
            </div>
          </Link>
        </div>
        {/* <div className="hidden sm:block w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div> */}
        {renderTienIch()}
        {/* <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div> */}
        <div className="flex items-center mb-6">
          <Avatar
            hasChecked
            sizeClass="h-8 w-8"
            radius="rounded-full"
            imgUrl="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
            Listed by{' '}
            <span className="text-neutral-900 dark:text-neutral-200 font-medium">
              Morrison Communities
            </span>
          </span>
        </div>
        <div className="flex justify-start">
          <button className="primary-button mr-4 w-full lg:w-auto">
            Contact
          </button>
          <button className="secondary-button w-full lg:w-auto group">
            Schedule a Tour{' '}
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              →
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-StayCardH relative bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow will-change-transform ${className}`}
      data-nc-id="StayCardH"
    >
      {/* <Link href={href || ""} className="absolute inset-0">TestStay</Link> */}
      <div className="grid grid-cols-1 md:flex md:flex-row ">
        {renderSliderGallery()}
        {renderContent()}
      </div>
    </div>
  );
};

export default StayCardH;
