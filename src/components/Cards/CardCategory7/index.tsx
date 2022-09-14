import React, { FC } from 'react';
import NcImage from 'src/components/Shared/NcImage/NcImage';
import { TaxonomyType } from 'src/types/types';
import Link from 'next/link';
import Image from 'next/image';

export interface CardCategory7Props {
  preTitle: string;
  title: string;
  thumbnail: string;
  linkTo: string;
}

const CardCategory7: FC<CardCategory7Props> = ({
  preTitle,
  title,
  thumbnail,
  linkTo,
}: CardCategory7Props) => {
  return (
    <div className='w-full'>
      <div >
        <a
          href="#"
          className="group h-48 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
        >
          <img
            src={thumbnail}
            loading="lazy"
            alt="MiniCard"
            className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-150  transition duration-500"
          />

          <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
            <span className="text-gray-500">{preTitle}</span>
            <span className="text-gray-800 text-lg lg:text-xl font-bold">
              {title}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardCategory7;
