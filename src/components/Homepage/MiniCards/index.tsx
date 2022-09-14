import React, { FC } from 'react';
import CardCategory7 from 'src/components/Cards/CardCategory7';

export interface MiniCardProps {
  children?: React.ReactNode;
}

const MiniCardData = [
  {
    id: '1',
    preTitle: 'Buy',
    title: 'Your Home',
    thumbnail:
      'https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    linkTo: '',
  },
  {
    id: '2',
    preTitle: 'Rent',
    title: 'Your Home',
    thumbnail:
      'https://images.unsplash.com/photo-1554034483-04fda0d3507b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    linkTo: '',
  },
  {
    id: '3',
    preTitle: 'Explore',
    title: 'Neighborhoods',
    thumbnail:
      'https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=939&q=80',
    linkTo: '',
  },
];

const MiniCards: FC<MiniCardProps> = () => {
  return (
    <div className='w-full flex justify-center '>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full xl:w-3/6'>
      {MiniCardData.map((item, index) => {
        return (
          <div key={index}>
            <CardCategory7
              preTitle={item.preTitle}
              title={item.title}
              thumbnail={item.thumbnail}
              linkTo={item.linkTo}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default MiniCards;
