import React from 'react';
import CardCategory8 from 'src/components/Cards/CardCategory8';
import Heading from 'src/components/Cards/Heading/Heading';

interface Props {
  id: number;
  preTitle: string;
  title: string;
  buttonText: string;
  imageUrl: string;
}

interface Elements {
  heading: string;
  subheading: string;
}

const poster_data: Props[] = [
  {
    id: 1,
    preTitle: 'New Homes',
    title: 'Look our top new homes',
    buttonText: 'Learn More',
    imageUrl:
      'https://images.unsplash.com/photo-1564013434775-f71db0030976?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
  },
  {
    id: 2,
    preTitle: 'Invest',
    title: 'Looking for rental homes?',
    buttonText: 'Learn More',
    imageUrl:
      'https://images.unsplash.com/photo-1590725140246-20acdee442be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: 2,
    preTitle: 'Follow the trend',
    title: 'My Firs property',
    buttonText: 'Learn More',
    imageUrl:
      'https://images.unsplash.com/photo-1587047643567-24a019cdcb70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
  },
];

const poster_elements: Elements[] = [
  {
    heading: 'New opportunities coming',
    subheading: "Discover what's going on...",
  },
];

const PosterHome = () => {
  return (
    <div className="px-4 xl:px-48">
      <div className="">
        <div className="text-center">
          <h1 className='font-display text-5xl font-bold my-16'>What makes us different</h1>
          {/* <h1 className='font-body text-5xl font-bold my-8'>What makes us different</h1> */}
          {/* <h1 className='font-alternative text-5xl font-bold my-8'>What makes us different</h1> */}
          {/* <h1 className='font-roboto text-5xl font-bold my-8'>What makes us different</h1> */}
        </div>
        <div className="flex flex-wrap  lg:-mx-2 xl:-mx-2">
          <div className="w-full xl:h-[600px] my-4 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:w-1/2">
            {poster_data
              .filter((item, index) => index < 1)
              .map((filteredItem, index) => (
                <CardCategory8
                  key={index}
                  id={filteredItem.id}
                  preTitle={filteredItem.preTitle}
                  title={filteredItem.title}
                  buttonText={filteredItem.buttonText}
                  imageUrl={filteredItem.imageUrl}
                />
              ))}
          </div>

          <div className="w-full xl:h-[600px] lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <div className="h-full">
              {' '}
              {poster_data.slice(2).map((filteredItem, index) => (
                <div key={index} className="h-full">
                  <CardCategory8
                    key={index}
                    id={filteredItem.id}
                    preTitle={filteredItem.preTitle}
                    title={filteredItem.title}
                    buttonText={filteredItem.buttonText}
                    imageUrl={filteredItem.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* <div className="w-full xl:h-[600px] lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <div className="h-1/2 pb-2">
              {' '}
              {poster_data.slice(2).map((filteredItem, index) => (
                <div key={index} className="h-full">
                  <CardCategory8
                    key={index}
                    id={filteredItem.id}
                    preTitle={filteredItem.preTitle}
                    title={filteredItem.title}
                    buttonText={filteredItem.buttonText}
                    imageUrl={filteredItem.imageUrl}
                  />
                </div>
              ))}
            </div>
            <div className="h-1/2 pt-2">
              {' '}
              {poster_data.slice(2, 3).map((filteredItem, index) => (
                <div key={index} className="h-full">
                  <CardCategory8
                    key={index}
                    id={filteredItem.id}
                    preTitle={filteredItem.preTitle}
                    title={filteredItem.title}
                    buttonText={filteredItem.buttonText}
                    imageUrl={filteredItem.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default PosterHome;
