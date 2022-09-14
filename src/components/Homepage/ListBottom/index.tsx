import { useState } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Houses for sale',
      },
      {
        id: 2,
        title: "Flats for sale",
      },
      {
        id: 3,
        title: 'Houses for rent',
      },
      {
        id: 4,
        title: "Houses for sale",
      },
      {
        id: 5,
        title: 'Flats for sale',
      },
      {
        id: 6,
        title: "Houses for sale",
      },
      {
        id: 7,
        title: 'Flats for sale',
      },
      {
        id: 8,
        title: "Houses for sale",
      },
      {
        id: 9,
        title: 'Flats for sale',
      },
      {
        id: 10,
        title: "Houses for Rent",
      },
      {
        id: 11,
        title: "Houses for sale",
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div>
      <div>
        <h2 className="font-display text-3xl font-bold">
          Most frequently searched in properties for sale
        </h2>
      </div>
      <div className="w-full px-2 py-8 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 p-0  border-b-2">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-32  py-2.5 text-sm font-body font-medium text-gray-700',
                    ' focus:outline-none',
                    selected
                      ? 'bg-white text-red-500 border-b-2 border-red-500'
                      : 'text-gray-500 hover:bg-white/[0.12] hover:text-black'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-1',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}
              >
                <div className="flex flex-wrap overflow-hidden xl:-mx-2 p-0 xl:p-4">
                  <div className="w-full overflow-hidden xl:my-0 xl:px-6 xl:w-1/4">
                    {posts
                      .filter((item, index) => index < 9)
                      .map((filteredItem, index) => (
                        <div key={index}>
                          <h4 className="text-sm font-body font-regular my-2 text-gray-500 hover:text-gray-900 cursor-pointer">
                            {filteredItem.title}
                          </h4>
                        </div>
                      ))}
                  </div>

                  <div className="w-full overflow-hidden xl:my-0 xl:px-5 xl:w-1/4 ">
                  {posts
                      .filter((item, index) => index < 9)
                      .map((filteredItem, index) => (
                        <div key={index}>
                          <h4 className="text-sm font-body font-regular my-2 text-gray-500 hover:text-gray-900 cursor-pointer">
                            {filteredItem.title}
                          </h4>
                        </div>
                      ))}
                  </div>

                  <div className="w-full overflow-hidden xl:my-0 xl:px-5 xl:w-1/4 ">
                  {posts
                      .filter((item, index) => index < 9)
                      .map((filteredItem, index) => (
                        <div key={index}>
                          <h4 className="text-sm font-body font-regular my-2 text-gray-500 hover:text-gray-900 cursor-pointer">
                            {filteredItem.title}
                          </h4>
                        </div>
                      ))}
                  </div>

                  <div className="w-full overflow-hidden xl:my-0 xl:px-5 xl:w-1/4">
                  {posts
                      .filter((item, index) => index < 9)
                      .map((filteredItem, index) => (
                        <div key={index}>
                          <h4 className="text-sm font-body font-regular my-2 text-gray-500 hover:text-gray-900 cursor-pointer">
                            {filteredItem.title}
                          </h4>
                        </div>
                      ))}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
