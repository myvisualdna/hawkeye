import React, { FC, useEffect, useMemo } from 'react';
import Heading from 'src/components/Cards/Heading/Heading';
import Glide from '@glidejs/glide';
import { ReviewType } from 'src/types/types';
import CardCategory3 from 'src/components/Cards/CardCategory3/CardCategory3';
import NextPrev from 'src/components/Shared/NextPrev/NextPrev';
import useNcId from 'src/hooks/useNcId';
import CardCategory9 from 'src/components/Cards/CardCategory9';

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: ReviewType[];
  categoryCardType?: 'card3' | 'card4' | 'card5' | 'card9';
  itemPerRow?: 1 | 2;
  sliderStyle?: 'style1' | 'style2';
  uniqueClassName: string;
}

const ReviewsHome: FC<SectionSliderNewCategoriesProps> = ({
  heading = 'Heading of sections',
  subHeading = 'Descriptions for sections',
  className = 'pl-8 pr-8',
  itemClassName = '',
  categories = [],
  itemPerRow = 6,
  categoryCardType = 'card4',
  sliderStyle = 'style2',
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

  const renderCard = (item: ReviewType, index: number) => {
    switch (categoryCardType) {
      case 'card9':
        return <CardCategory9 reviewData={item} />;
      default:
        return <CardCategory9 reviewData={item} />;
    }
  };

  return (
    <div
      className={`nc-SectionSliderNewCategories ${className} bg-gray-50 rounded-3xl`}
    >
      <div className={`${UNIQUE_CLASS} flow-root p-4 xl:p-6`}>
        <Heading
          desc={subHeading}
          hasNextPrev={sliderStyle === 'style1'}
          isCenter={sliderStyle === 'style2'}
          className="pt-4 mb-6 xl:mb-8"
        >
          {heading}
        </Heading>
        <div className="glide__track bg-gray-50" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                {renderCard(item, index)}
              </li>
            ))}
          </ul>
        </div>

        {sliderStyle === 'style2' && (
          <NextPrev className="justify-center mt-2" />
        )}
      </div>
    </div>
  );
};

export default ReviewsHome;
