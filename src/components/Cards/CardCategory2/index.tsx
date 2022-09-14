import React, { FC } from 'react';
import NcImage from 'shared/NcImage/NcImage';
import { TaxonomyType } from 'data/types';
import Link from 'next/link';
import Image from 'next/image';

export interface CardCategory3Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory2: FC<CardCategory3Props> = ({
  className = '',
  taxonomy,
}) => {
  const { count, name, href = '/', thumbnail } = taxonomy;

  const Model1 = () => {
    return (
      <div>
        <div>
          <a
            href="#"
            class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
          >
            <img
              src={thumbnail}
              loading="lazy"
              alt="Photo by eniko kis"
              class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
            />
          </a>

          <div>
            <a
              href="#"
              class="text-gray-500 hover:gray-800 lg:text-sm transition duration-100 mb-1"
            >
              2841 Main St., Miami - FL, 29014
            </a>

            <div className="grid grid-cols-3 gap-1 mt-0">
              <div className="h-6 flex items-center col-span-3">
                <h4 className="font-body font-regular text-sm text-gray-500 mr-1">
                  <span className="font-body font-regular text-sm text-gray-500 mr-1">
                    2
                  </span>{' '}
                  Bed
                </h4>
                <div className="mr-1 text-gray-500">•</div>
                <h4 className="font-body font-regular text-sm text-gray-500 mr-1">
                  <span className="font-body font-regular text-sm text-gray-500 mr-1">
                    2
                  </span>{' '}
                  Bath
                </h4>
                <div className="mr-1 text-gray-500">•</div>
                <h4 className="font-body font-regular text-sm text-gray-500 mr-1">
                  <span className="font-body font-regular text-sm text-gray-500 mr-1">
                    1242
                  </span>{' '}
                  Sqft
                </h4>
              </div>
            </div>

            <div class="flex items-end gap-2">
              <span class="text-gray-800 lg:text-lg font-bold">$145.000</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Model2 = () => {
    return (
      <div>
        <div key="" className="group relative">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
              src={thumbnail}
              alt="{product.imageAlt}"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm font-body font-regular text-gray-700">
                <a>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {name}
                </a>
              </h3>
            </div>
            <p className="font-body text-base font-bold text-gray-800">
              $214.100
            </p>
          </div>

          <div className="grid grid-cols-3 gap-1 mt-0">
            <div className="h-6 flex items-center col-span-3">
              <h4 className="font-body font-regular text-sm text-gray-700 mr-1">
                4901 Main St., Miami - FL, 29842
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 mt-0">
            <div className="h-6 flex items-center col-span-3">
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
        </div>
      </div>
    );
  };

  const Model3 = () => {
    return (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8">
        <a href="#">
          <img
            src={thumbnail}
            alt="{product.imageAlt}"
            className="h-full w-full object-cover object-center lg:h-64 lg:w-full"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              $912.000
            </h5>
          </a>
          <p className="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">
            2312 Main St., Miami - FL, 29012
          </p>
          <div className="grid grid-cols-3 gap-1 mt-0">
            <div className="h-4 flex items-center col-span-3 mb-1">
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
          <p class="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">
            {name}
          </p>
        </div>
      </div>
    );
  };

  const Model4 = () => {
    return (
      <div>
        <a
          href="#"
          className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3"
        >
          <img
            src={thumbnail}
            loading="lazy"
            alt="Photo by Nick Karvounis"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
          />
        </a>

        <div className="flex justify-between items-start gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-500 text-lg lg:text-base font-bold transition duration-100"
            >
              {name}
            </a>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-gray-800 lg:text-lg font-bold font-body">
              $290.000
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 mt-0">
          <div className="h-6 flex items-center col-span-3 px-2">
            <h4 className="font-body font-medium text-sm text-gray-800 mr-1">
              4901 Main St., Miami - FL, 29842
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 mt-0">
          <div className="h-6 flex items-center col-span-3 px-2">
            <h4 className="font-body font-regular text-sm text-gray-500 mr-1">
              <span className="font-body font-regular text-sm text-gray-500 mr-1">
                2
              </span>{' '}
              Bed
            </h4>
            <div className="mr-1 text-gray-500">•</div>
            <h4 className="font-body font-regular text-sm text-gray-500 mr-1">
              <span className="font-body font-regular text-sm text-gray-500 mr-1">
                2
              </span>{' '}
              Bath
            </h4>
            <div className="mr-1 text-gray-500">•</div>
            <h4 className="font-body font-regular text-sm text-gray-500 mr-1">
              <span className="font-body font-regular text-sm text-gray-500 mr-1">
                1242
              </span>{' '}
              Sqft
            </h4>
          </div>
        </div>
      </div>
    );
  };

  const Model5 = () => {
    return (
      <div>
        {' '}
        <div className="w-full flex flex-col overflow-hidden rounded-lg shadow-lg mb-4 ml-1">
          <div className="flex-shrink-0">
            <img
              className="object-cover w-full h-64 hover:scale-105 transition duration-200"
              src={thumbnail}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between flex-1 p-4 pl-6 bg-white">
            <div className="flex-1">
              <a href="#">
                <h5 className="mb-1 text-xl font-body font-bold tracking-tight text-gray-800 dark:text-white">
                  $912.000
                </h5>
                <p className="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">
                  2312 Main St., Miami - FL, 29012
                </p>
              </a>
              <div className="grid grid-cols-3 gap-1 mt-0">
                <div className="h-4 flex items-center col-span-3 mb-1">
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
            </div>
            <p className="mb-1 font-normal text-sm text-gray-700 dark:text-gray-400">
              {name}
            </p>
            {/* <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <a href="https://twitter.com/Mike_Andreuzza">
                  <span className="sr-only">Michael Andreuzza</span>
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-600">
                  <a
                    href="https://twitter.com/Mike_Andreuzza"
                    className="hover:underline"
                  >
                    {' '}
                    Michaerl Andreuzza
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-16"> Mar 16, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 6 min read </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
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
          <p className="mt-1 text-lg font-body font-semibold text-gray-900">$240.000</p>
        </a>
      </div>
    );
  };

  const Model7 = () => {
    return (
      <a
        className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm mb-6"
        href=""
      >
        <img
          className="object-cover w-full h-56"
          src={thumbnail}
          alt=""
        />

        <div className="p-6">
          <h5 className="text-xl font-bold">
            $192.000
          </h5>
          <h3 className="mt-1 font-body text-sm text-gray-700">{name}</h3>
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
        </div>
      </a>
    );
  };

  return (
    <Link
      href={href}
      className={`nc-CardCategory3 flex flex-col ${className}`}
      data-nc-id="CardCategory3"
    >
      {/* <Model1 /> */}
      <Model6 />
      {/* <Model2 /> */}
      {/* <Model4 /> */}

      {/* <Model5 /> */}
      {/* <Model7 /> */}
    </Link>
  );
};

export default CardCategory2;
