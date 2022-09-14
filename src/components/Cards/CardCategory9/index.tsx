import React, { FC } from 'react';
import { ReviewType } from 'data/types';
import Image from 'next/image';

export interface CardCategory9Props {
  reviewData: ReviewType;
}

const CardCategory9: FC<CardCategory9Props> = ({ reviewData }) => {
  const { name, company, quote, thumbnail } = reviewData;
  return (
    <div>
      <div className="mb-0 xl:mb-4 mx-auto">
        <section className="p-8 xl:p-16 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src={thumbnail}
                  alt='ReviewPicture'
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4">
                <span className="inline-block w-12 h-10 bg-gray-100 rounded-lg"></span>
              </div>
            </div>

            <blockquote className="sm:col-span-2">
              <p className="text-sm font-medium xl:text-2xl">{quote}</p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                <p className="text-sm text-gray-500 uppercase sm:ml-3">
                  <strong>{name}</strong>, {company}
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardCategory9;
