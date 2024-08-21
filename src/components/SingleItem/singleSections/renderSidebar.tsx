import React, { useState } from 'react';
// import StartRating from 'src/components/SingleItem/StartRating/StartRating';
import Avatar from 'src/components/Shared/Avatar/Avatar';
import { Tab } from '@headlessui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

type Props = {};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
];

const RenderSidebar = (props: Props) => {
  const [startingDate, setStartingDate] = useState(
    setHours(setMinutes(new Date(), 30), 17)
  );

  let [categories] = useState(['Request Info', 'Schedule a Tour']);

  return (
    <div className="shadow-xl p-8 rounded-2xl border-solid border-2 border-gray-100">
      {/* PRICE */}

      <div className="mb-2 flex items-end justify-between">
        <h1 className="font-display font-bold text-3xl">$412.000</h1>
        <span>
          <h3 className="font-display font-medium text-base">
            Est. <span className="text-blue-500 font-bold">$3,165/mo</span>
          </h3>
        </span>
      </div>

      <div className="mb-4">
        {people.map((person) => (
          <div
            key={person.email}
            className="relative rounded-lg bg-white px-1 py-5 flex items-center space-x-3"
          >
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={person.imageUrl}
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 truncate">
                    (241)241-4212
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-md">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-slate-100 p-1">
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
                      <button type="submit" className="primary-button w-full">
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
                          Your Name{' '}
                        </label>
                        <div className="mt-1">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            placeholder="Your Name"
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
                        <button type="submit" className="primary-button w-full">
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
      </div>
      {/* SUBMIT */}
      {/* <div>
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-xs uppercase font-medium text-gray-900"
            >
              {' '}
              Your Name{' '}
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your Name"
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
            <button type="submit" className="primary-button w-full">
              Send
            </button>
          </div>
          <div className="font-body text-xs text-gray-400">
            By sending this inquiry, I accept COMPANY's Terms and Conditions,
            Privacy Policy, and Community Values.
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default RenderSidebar;
