import React from 'react';
import BtnLikeIcon from 'src/components/SearchPage/SearchBody/BtnLikeIcon/BtnLikeIcon';
import SaleOffBadge from 'src/components/SearchPage/SearchBody/SaleOffBadge/SaleOffBadge';
import Link from 'next/link';
import ImageSlider from 'src/components/Shared/ImageSlider';

type Props = {};

const SearchResultCardTwo = ({ data }: Props) => {
  const { galleryImgs, id, href, like, isNew, address, price, features } = data;

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const thumbnail =
    'https://images.unsplash.com/photo-1591825381767-c7137b8eda0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80';

  const renderSliderGallery = () => {
    return (
      <div className="relative flex-shrink-0 w-full h-full">
        <ImageSlider galleryImgs={galleryImgs} />
        <BtnLikeIcon isLiked={like} className="absolute right-3 top-3" />
        {isNew && <SaleOffBadge className="absolute left-3 top-3" />}
      </div>
    );
  };

  const Model6 = () => {
    return (
      <div className="mb-6">
        <a className="group">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={thumbnail}
              alt="{product.imageAlt}"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
            />
          </div>
          <h3 className="mt-4 font-body text-sm text-gray-500">{name}</h3>
          <p className="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400 my-1">
            2312 Main St., Miami - FL, 29012
          </p>
          <div className="grid grid-cols-3 gap-1 mt-0">
            <div className="h-2 flex items-center col-span-3 my-1">
              <h4 className="font-body font-regular text-sm text-gray-700 mr-1">
                <span className="font-body font-regular text-sm text-gray-700 mr-1">
                  2
                </span>{' '}
                Bed
              </h4>
              <div className="mr-1 text-gray-700">•</div>
              <h4 className="font-body font-regular text-sm text-gray-700 mr-1">
                <span className="font-body font-regular text-sm text-gray-700 mr-1">
                  2
                </span>{' '}
                Bath
              </h4>
              <div className="mr-1 text-gray-700">•</div>
              <h4 className="font-body font-regular text-sm text-gray-700 mr-1">
                <span className="font-body font-regular text-sm text-gray-700 mr-1">
                  1242
                </span>{' '}
                Sqft
              </h4>
            </div>
          </div>
          <p className="mt-1 text-lg font-body font-semibold text-gray-900">
            $240.000
          </p>
        </a>
      </div>
    );
  };

  const Model1 = () => {
    return (
      <Link href={`/detail/${id}`}>
        <div>
          <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-2">
            {renderSliderGallery()}
          </div>

          <div>
            <div className="flex items-center">
              <span className="text-gray-800 text-base lg:text-lg font-semibold font-display">
                {priceFormatter.format(price)}
              </span>
            </div>

            <div className="grid grid-cols-3  items-center">
              <div className="flex items-center col-span-3">
                <h4 className="font-display font-regular text-sm text-gray-800 mr-1">
                  <span className="font-display font-regular text-sm text-gray-800 mr-1">
                    {features.bedrooms}
                  </span>{' '}
                  Bed
                </h4>
                <div className="mr-1 text-gray-800">•</div>
                <h4 className="font-display font-regular text-sm text-gray-800 mr-1">
                  <span className="font-display font-regular text-sm text-gray-800 mr-1">
                    {features.bathrooms}
                  </span>{' '}
                  Bath
                </h4>
                <div className="mr-1 text-gray-800">•</div>
                <h4 className="font-display font-regular text-sm text-gray-800 mr-1">
                  <span className="font-display font-regular text-sm text-gray-800 mr-1">
                    {features.sqft}
                  </span>{' '}
                  Sqft
                </h4>
              </div>
            </div>

            <div>
              {/* {2841 Main St., Miami - FL, 29014} */}
              <h4 className="text-gray-500 hover:gray-800 text-sm lg:text-sm transition duration-100 font-display">
                {' '}
                {address.title} {' - '}{' '}
                <span className="text-gray-500 hover:gray-800 text-sm lg:text-sm transition duration-100">
                  {address.county}, {address.state} - {address.zipCode}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const Model2 = () => {
    return (
      <Link href={`/detail/${id}`}>
        <div>
          <div className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
            {renderSliderGallery()}
          </div>

          <div>
            <a
              href="#"
              className="text-gray-800 hover:gray-800 text-sm lg:text-sm transition duration-100 mb-1 font-display"
            >
              {/* {2841 Main St., Miami - FL, 29014} */}
              {address.title}.{' '}
              <span className="text-gray-800 hover:gray-800 text-sm lg:text-sm transition duration-100">
                {address.county}, {address.state} - {address.zipCode}
              </span>
            </a>

            <div className="grid grid-cols-3 gap-1 mt-0">
              <div className="h-6 flex items-center col-span-3">
                <h4 className="font-display font-regular text-sm text-gray-800 mr-1">
                  <span className="font-display font-regular text-sm text-gray-800 mr-1">
                    {features.bedrooms}
                  </span>{' '}
                  Bed
                </h4>
                <div className="mr-1 text-gray-800">•</div>
                <h4 className="font-display font-regular text-sm text-gray-800 mr-1">
                  <span className="font-display font-regular text-sm text-gray-800 mr-1">
                    {features.bathrooms}
                  </span>{' '}
                  Bath
                </h4>
                <div className="mr-1 text-gray-800">•</div>
                <h4 className="font-display font-regular text-sm text-gray-800 mr-1">
                  <span className="font-display font-regular text-sm text-gray-800 mr-1">
                    {features.sqft}
                  </span>{' '}
                  Sqft
                </h4>
              </div>
            </div>

            <div className="flex items-end gap-2">
              <span className="text-gray-800 text-base lg:text-lg font-bold font-display">
                {priceFormatter.format(price)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div>
      {/* <Model6 /> */}
      <Model1 />
      {/* <Model2 /> */}
    </div>
  );
};

export default SearchResultCardTwo;
