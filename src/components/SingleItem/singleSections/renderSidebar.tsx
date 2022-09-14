import React, { useState } from 'react';
import StartRating from 'src/components/SingleItem/StartRating/StartRating';
import Avatar from 'src/components/Shared/Avatar/Avatar';
import { Tab } from '@headlessui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import { MdOutlineIosShare } from 'react-icons/md';
import { RiHeartLine } from 'react-icons/ri';

type Props = {};

let categories = ['Schedule a Tour', 'Request Info'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const RenderSidebar = (props: Props) => {
  const [startingDate, setStartingDate] = useState(
    setHours(setMinutes(new Date(), 30), 17)
  );

  return (
    <div className="listingSectionSidebar__wrap shadow-xl p-8 rounded-2xl">
      {/* PRICE */}
      <div className="flex justify-between mb-4">
        <span className="text-3xl font-semibold font-display">
          $119.000
        </span>
        <StartRating />
      </div>


      <div className="flex items-center mb-4">
        <Avatar
          hasChecked
          sizeClass="h-8 w-8"
          radius="rounded-full"
          imgUrl="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
        <span className="ml-2.5 text-neutral-500 dark:text-neutral-400">
          Listed by{' '}
          <span className="text-neutral-900 dark:text-neutral-200 font-medium">
            Kevin Francis
          </span>
        </span>
      </div>

      <div className="w-full max-w-md">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-slate-400/20 p-1">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-500',
                    ' focus:outline-none ',
                    selected
                      ? 'bg-white shadow'
                      : 'text-slate-500 hover:bg-white/[0.12] hover:text-slate-700'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {categories.map((category) => (
              <Tab.Panel
                key={category}
                className={classNames(
                  'rounded-xl bg-white py-4',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-neutral-400 focus:outline-none focus:ring-2'
                )}
              >
                {category === 'Schedule a Tour' && (
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase font-medium text-gray-900"
                      >
                        {' '}
                        Date & Time{' '}
                      </label>
                      <div className="mt-1">
                        <DatePicker
                          className="block w-full px-5 py-3 text-sm text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-300"
                          selected={startingDate}
                          onChange={(date) => setStartingDate(date)}
                          showTimeSelect
                          minTime={setHours(setMinutes(new Date(), 0), 10)}
                          maxTime={setHours(setMinutes(new Date(), 30), 18)}
                          dateFormat="MMMM d, yyyy h:mm aa"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase font-medium text-gray-900"
                      >
                        {' '}
                        Email address{' '}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="Your Email"
                          className="block w-full px-5 py-3 text-sm text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase font-medium text-gray-900"
                      >
                        {' '}
                        Phone{' '}
                      </label>
                      <div className="mt-1">
                        <input
                          id="tel"
                          name="tel"
                          type="tel"
                          autoComplete="tel"
                          required
                          placeholder="Your Phone"
                          className="block w-full px-5 py-3 text-sm text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value="videoChat"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        I prefer video-chat tour
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="primary-button w-full"
                      >
                        Request Tour
                      </button>
                    </div>
                  </form>
                )}
                {category === 'Request Info' && (
                  <div>
                    <form action="#" method="POST" className="space-y-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs uppercase font-medium text-gray-900"
                        >
                          {' '}
                          Email address{' '}
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Your Email"
                            className="block w-full px-5 py-3 text-sm text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          hmtlFor="email"
                          className="block text-xs uppercase font-medium text-gray-900"
                        >
                          {' '}
                          Phone{' '}
                        </label>
                        <div className="mt-1">
                          <input
                            id="tel"
                            name="tel"
                            type="tel"
                            autoComplete="tel"
                            required
                            placeholder="Your Phone"
                            className="block w-full px-5 py-3 text-sm text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs uppercase font-medium text-gray-900"
                        >
                          {' '}
                          Message{' '}
                        </label>
                        <textarea
                          className="block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-300 apearance-none autoexpand"
                          id="description"
                          type="text"
                          name="description"
                          placeholder="Message..."
                          required
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="primary-button w-full"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div>
          <button
            type="submit"
            className="secondary-button w-full"
          >
            Call Agent
          </button>
        </div>
      </div>
      {/* SUBMIT */}
    </div>
  );
};

export default RenderSidebar;
