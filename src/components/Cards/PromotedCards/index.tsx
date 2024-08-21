import React, { FC, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Heading from 'src/components/Cards/Heading/Heading';
import Glide from '@glidejs/glide';
import { TaxonomyType } from 'src/types/types';

import NextPrev from 'src/components/Shared/NextPrev/NextPrev';
import useNcId from 'src/hooks/useNcId';
import CardLoading from 'src/components/Loading/CardLoading';
import CardCategory2 from '../CardCategory2';
import CardCategory3 from '../CardCategory3/CardCategory3';
import CardCategory4 from '../CardCategory4/CardCategory4';
import CardCategory5 from '../CardCategory5/CardCategory5';

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  categoryCardType?: 'card2' | 'card3' | 'card4' | 'card5' | 'card6';
  itemPerRow?: 4 | 5;
  sliderStyle?: 'style1' | 'style2';
  uniqueClassName: string;
}

// const CardCategory2 = dynamic(() =>
// import("components/CardCategory2"), {loading: () => <CardLoading />});

const DEMO_CATS: TaxonomyType[] = [
  {
    id: '1',
    href: '/listing-stay',
    name: 'Nature House',
    taxonomy: 'category',
    count: 17288,
    thumbnail:
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: '2',
    href: '/listing-stay',
    name: 'Wooden house',
    taxonomy: 'category',
    count: 2118,
    thumbnail:
      'https://images.unsplash.com/photo-1614649024145-7f847b1c803f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
  },
  {
    id: '3',
    href: '/listing-stay',
    name: 'Houseboat',
    taxonomy: 'category',
    count: 36612,
    thumbnail:
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: '4',
    href: '/listing-stay',
    name: 'Farm House',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
  },
  {
    id: '5',
    href: '/listing-stay',
    name: 'Dome House',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1620332372374-f108c53d2e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
  },
  {
    id: '6',
    href: '/listing-stay',
    name: 'Dome House',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  },
];

const PromotedCards: FC<SectionSliderNewCategoriesProps> = ({
  heading = 'Heading of sections',
  subHeading = 'Descriptions for sections',
  className = '',
  itemClassName = '',
  categories = DEMO_CATS,
  itemPerRow = 5,
  categoryCardType = 'card3',
  sliderStyle = 'style1',
  uniqueClassName,
}) => {
  const UNIQUE_CLASS =
    'SectionSliderNewCategories__' + uniqueClassName + useNcId();

  const MY_GLIDEJS = useMemo(() => {
    return new Glide(`.${UNIQUE_CLASS}`, {
      perView: itemPerRow,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: itemPerRow - 1,
        },
        1024: {
          gap: 20,
          perView: itemPerRow - 1,
        },
        768: {
          gap: 20,
          perView: itemPerRow - 2,
        },
        640: {
          gap: 20,
          perView: itemPerRow - 3,
        },
        500: {
          gap: 20,
          perView: 1.3,
        },
      },
    });
  }, [UNIQUE_CLASS]);

  useEffect(() => {
    setTimeout(() => {
      MY_GLIDEJS.mount();
    }, 100);
  }, [MY_GLIDEJS, UNIQUE_CLASS]);

  const renderCard = (item: TaxonomyType, index: number) => {
    switch (categoryCardType) {
      case 'card2':
        return <CardCategory2 taxonomy={item} />;
      case 'card3':
        return <CardCategory3 taxonomy={item} />;
      case 'card4':
        return <CardCategory4 taxonomy={item} />;
      case 'card5':
        return <CardCategory5 taxonomy={item} />;
      default:
        return <CardCategory5 taxonomy={item} />;
    }
  };

  return (
    <div className={`nc-SectionSliderNewCategories ${className} my-8`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading
          desc={subHeading}
          hasNextPrev={sliderStyle === 'style1'}
          isCenter={sliderStyle === 'style2'}
        >
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                {renderCard(item, index)}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="flex justify-end">
          <a
            className="inline-flex items-center px-8 py-3 text-gray-900 border border-gray-900 rounded hover:bg-gray-900 hover:text-white active:bg-gray-100 active:text-gray-900 focus:outline-none focus:ring"
            href="/download"
          >
            <span className="text-sm font-medium">View More</span>

            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div> */}
        {sliderStyle === 'style2' && (
          <NextPrev className="justify-center mt-16" />
        )}
      </div>
    </div>
  );
};

export default PromotedCards;
