import { Fragment, useState } from 'react';
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from '@headlessui/react';
import Link from 'next/link';
import { Combobox } from '@headlessui/react';
import { HiOutlineCheck } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { IoMdSearch } from 'react-icons/io';
import SearchResultCardTwo from 'src/components/Cards/SearchResultCardTwo';
import { properties } from './properties';

type Props = {};

const people = [
  { id: 1, name: 'New York' },
  { id: 2, name: 'Boston' },
  { id: 3, name: 'Arizona' },
  { id: 4, name: 'Tampa' },
  { id: 5, name: 'New Jersey' },
  { id: 6, name: 'Los Angeles' },
];

const sortOptions = [
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Newest', href: '#' },
  { name: 'Most Expensive', href: '#' },
  { name: 'Less Expensive', href: '#' },
  { name: 'Squarefeet', href: '#' },
];

const barFilters = [
  {
    id: 'property-type',
    name: 'Property Type',
    options: [
      { value: 'any', label: 'Any' },
      { value: 'house', label: 'House' },
      { value: 'condo', label: 'Condo' },
      { value: 'multi-family', label: 'Multi Family' },
      { value: 'townhouse', label: 'Townhouse' },
      { value: 'land', label: 'Land' },
      { value: 'farm', label: 'Farm' },
      { value: 'mobile', label: 'Mobile/Manufactured' },
      { value: 'new', label: 'New Construction' },
    ],
  },
  {
    id: 'beds',
    name: 'Beds',
    options: [
      { value: '0', label: 'Studio' },
      { value: '1', label: '1+' },
      { value: '2', label: '2+' },
      { value: '3', label: '3+' },
      { value: '4', label: '4+' },
    ],
  },
  {
    id: 'listing-status',
    name: 'Status',
    options: [
      { value: 'buy', label: 'For Sale' },
      { value: 'rent', label: 'For Rent' },
      { value: 'foreclosures', label: 'Foreclosures' },
      { value: 'coming-soon', label: 'Coming Soon' },
      { value: 'sold', label: 'Sold' },
    ],
  },
  {
    id: 'listed-by',
    name: 'Listed By',
    options: [
      { value: 'any', label: 'Any' },
      { value: 'agent', label: 'Agent' },
      { value: 'owner', label: 'Owner' },
    ],
  },
];

const moreFilters = [
  {
    id: 'smart-features',
    name: 'Smart Home Features',
    options: [
      { value: 'pool', label: 'Pool(s)' },
      { value: 'spa', label: 'Spa / Hot Tub(s)' },
      { value: 'tennis', label: 'Tennis Court' },
      { value: 'golf', label: 'Golf Course' },
      { value: 'clubhouse', label: 'Clubhouses(s)' },
      { value: 'security-features', label: 'Security Features' },
    ],
  },
  {
    id: 'interior-features',
    name: 'Interior Features',
    options: [
      { value: 'basement', label: 'Basement' },
      { value: 'heat', label: 'Heat' },
      { value: 'central-air', label: 'Central Air' },
      { value: 'pool', label: 'Pool' },
      { value: 'furnished', label: 'Furnished' },
      { value: 'elevator', label: 'Elevator' },
      { value: 'laundry', label: 'Laundry' },
      { value: 'kitchen-appliances', label: 'Kitchen Appliances' },
      { value: 'insulated-windows', label: 'Insulated Windows' },
    ],
  },
  {
    id: 'exterior-features',
    name: 'Exterior Features',
    options: [
      { value: 'basement', label: 'Basement' },
      { value: 'heat', label: 'Heat' },
      { value: 'central-air', label: 'Central Air' },
      { value: 'pool', label: 'Pool' },
      { value: 'furnished', label: 'Furnished' },
      { value: 'elevator', label: 'Elevator' },
      { value: 'laundry', label: 'Laundry' },
      { value: 'kitchen-appliances', label: 'Kitchen Appliances' },
      { value: 'insulated-windows', label: 'Insulated Windows' },
    ],
  },
  {
    id: 'community-amenities',
    name: 'Community Amenities',
    options: [
      { value: 'pool', label: 'Pool(s)' },
      { value: 'spa', label: 'Spa / Hot Tub(s)' },
      { value: 'tennis', label: 'Tennis Court' },
      { value: 'golf', label: 'Golf Course' },
      { value: 'clubhouse', label: 'Clubhouses(s)' },
      { value: 'security-features', label: 'Security Features' },
    ],
  },
];

const numberedFilters = [
  {
    id: 'squarefeet',
    name: 'Square Feet',
    options: [
      { value: 'min', label: 'Min' },
      { value: 'max', label: 'Max' },
    ],
  },
  {
    id: 'year-built',
    name: 'Year Built',
    options: [
      { value: 'min', label: 'Min' },
      { value: 'max', label: 'Max' },
    ],
  },
];

const selectFilters = [
  {
    id: 'max-hoa',
    name: 'Max Hoa/Month',
    options: [
      { value: '0', label: 'No Max' },
      { value: '1', label: 'No HOA Fee' },
      { value: '2', label: '$25/month' },
    ],
  },
  {
    id: 'parking-slots',
    name: 'Parking / Garage',
    options: [
      { value: '0', label: 'None' },
      { value: '1', label: '1+' },
      { value: '2', label: '2+' },
      { value: '3', label: '3+' },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavigationSearchThree = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [sortValue, setSortValue] = useState('Most Popular');
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const cleanSelected = () => {
    setSelected('');
  };

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  const handleSort = (value) => {
    console.log(value);
    setSortValue(value)
  };

  const handleCategory = (section, value) => {
    console.log(section, value);
  };

  const handleChange = (event, id) => console.log(id, event.target.value);

  const TopBar = () => {
    return (
      <div className="py-2 hidden md:flex items-center justify-between border-solid border-2 border-indigo-100">
        <div className="flex items-center border-solid border-2 border-red-50">
          <div className="mr-4">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <svg
                className="h-8"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div className="flex items-center border-solid border-2 border-green-50">
            <div>
              <div className="mr-8 border-solid border-2 border-amber-50">
                <div>
                  <Combobox value={selected} onChange={setSelected}>
                    <div className="relative">
                      <div className="relative xs:w-32 md:w-64 lg:w-72 cursor-default overflow-hidden rounded-lg bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm p-2 border border-solid border-gray-100">
                        <div className="flex justify-center content-center items-center">
                          <IoMdSearch className="w-6 h-6 ml-2" />
                          <Combobox.Input
                            className="w-full border-none py-1 pl-3 pr-10 leading-5 text-gray-800 focus:ring-0 font-display font-semibold text-sm placeholder:text-gray-300 placeholder:text-sm placeholder:font-medium"
                            displayValue={(person) => person.name}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search by City, State, Zip"
                          />
                          {selected && (
                            <button className="">
                              <IoClose
                                className="w-6 h-6 text-gray-300 hover:text-gray-400 active:text-gray-500"
                                onClick={cleanSelected}
                              />
                            </button>
                          )}
                        </div>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        afterLeave={() => setQuery('')}
                      >
                        <Combobox.Options className="absolute mt-2 max-h-80 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {filteredPeople.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-gray-700 font-display">
                              Nothing found.
                            </div>
                          ) : (
                            filteredPeople.map((person) => (
                              <Combobox.Option
                                key={person.id}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 font-display flex justify-start px-12 ${
                                    active
                                      ? 'bg-gray-100 text-gray-800'
                                      : 'text-gray-800'
                                  }`
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-bold' : 'font-normal'
                                      }`}
                                    >
                                      {person.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                          active
                                            ? 'text-teal-500'
                                            : 'text-gray-800'
                                        }`}
                                      >
                                        <HiOutlineCheck
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Combobox.Option>
                            ))
                          )}
                        </Combobox.Options>
                      </Transition>
                    </div>
                  </Combobox>
                </div>
              </div>
            </div>
            <div>
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="hidden lg:flex items-center gap-6 text-sm">
                  <li>
                    <Link href="/">
                      <button className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 font-display font-medium text-sm">
                        Buy
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <button className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 font-display font-medium text-sm">
                        Rent
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <button className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 font-display font-medium text-sm">
                        Mortgage
                      </button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <div className="lg:flex sm:gap-4 hidden">
              <button className="relative after:absolute after:bg-gray-900 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 font-display text-sm">
                Saved Searches
              </button>
            </div>
            <div className="lg:flex sm:gap-4 hidden">
              <button className="primary-button" href="/">
                Login
              </button>
            </div>
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const SortComponent = () => {
    return (
      <Menu as="div" className="relative z-10 inline-block text-left">
        <div className='flex items-center'>
          <h3 className='font-display text-sm mr-2'>Sort by:</h3>
          <Menu.Button className="group inline-flex justify-center text-sm font-semibold text-teal-400 hover:text-teal-400">
            {sortValue}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-left absolute right-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {sortOptions.map((option) => (
                <Menu.Item key={option.id}>
                  {({ active }) => (
                    <a
                      onClick={() => handleSort(option.name)}
                      href={option.href}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm font-medium text-gray-900'
                      )}
                    >
                      {option.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };

  const MobileSearchMenu = () => {
    return (
      <>
        <div className="flex lg:hidden w-full">
          <button
            onClick={openModal}
            className="relative flex items-center w-full border border-neutral-200 dark:border-neutral-6000 px-4 py-2 pr-11 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <div className="ml-3 flex-1 text-left overflow-hidden">
              <span className="block font-medium text-sm">Where to?</span>
              <span className="block mt-0.5 text-xs font-light text-neutral-500 dark:text-neutral-400 line-clamp-1">
                Anywhere • Any week • Add guests
              </span>
            </div>

            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-6000 dark:text-neutral-300">
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="block w-4 h-4"
                fill="currentColor"
              >
                <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </span>
          </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-0 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-screen h-screen transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  };

  return (
    <div>
      <div className="bg-gray-50">
        {/* Mobile filter dialog */}

        <MobileSearchMenu />

        <div className="mx-auto px-4 text-center sm:px-6  lg:px-4 border-2">
          {/*TOPBAR */}
          <TopBar />

          {/*Filter Bar */}
          <section
            aria-labelledby="filter-heading"
            className="border-t border-lime-200 py-4 border-4"
          >

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                onClick={() => setOpen(true)}
              >
                Filters
              </button>

              <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
                {barFilters.map((section, sectionIdx) => (
                  <Popover
                    as="div"
                    key={section.name}
                    id="desktop-menu"
                    className="relative z-40 inline-block text-left"
                  >
                    <div>
                      <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>{section.name}</span>
                        {sectionIdx === 0 ? (
                          <span className="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">
                            1
                          </span>
                        ) : null}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="ml-1 w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Popover.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Popover.Panel className="origin-top-right absolute left-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <form className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                onChange={() =>
                                  handleCategory(section.id, option.value)
                                }
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </form>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                ))}

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-700',
                          'group bg-transparent rounded-md inline-flex items-center text-sm font-display font-medium hover:text-gray-900 '
                        )}
                      >
                        <span>More Filters</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 ml-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-20 mt-3 px-2 w-screen max-w-md sm:px-0 shadow-2xl">
                          <div className="rounded-lg shadow-xl overflow-hidden border-solid border border-gray-200 ">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-6 sm:p-4  overflow-auto max-h-[40rem]">
                              <nav
                                aria-label="Main Nav"
                                className="flex flex-col space-y-4 divide-y-2 divide-gray-100"
                              >
                                {moreFilters.map((more, index) => (
                                  <details key={index} className="group">
                                    <summary className="flex cursor-pointer items-center rounded-lg px-2 py-2 text-gray-900 bg-transparent hover:text-teal-400 mt-4">
                                      <span className="text-sm font-medium">
                                        {more.name}
                                      </span>

                                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </summary>

                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                      {more.options.map((option, optionIdx) => (
                                        <div
                                          key={option.value}
                                          className="flex items-center mx-2 mt-2"
                                        >
                                          <input
                                            id={`filter-${more.id}-${optionIdx}`}
                                            name={`${more.id}[]`}
                                            defaultValue={option.value}
                                            type="checkbox"
                                            className="h-4 w-4 border-gray-300 rounded text-teal-400 focus:ring-teal-400"
                                            onChange={() =>
                                              handleCategory(
                                                more.id,
                                                option.value
                                              )
                                            }
                                          />
                                          <label
                                            htmlFor={`filter-${more.id}-${optionIdx}`}
                                            className="ml-3 pr-6 text-sm text-gray-800 whitespace-nowrap"
                                          >
                                            {option.label}
                                          </label>
                                        </div>
                                      ))}
                                    </div>
                                  </details>
                                ))}

                                {numberedFilters.map((extra, index) => (
                                  <details key={index} className="group">
                                    <summary className="flex cursor-pointer items-center rounded-lg px-2 py-2 text-gray-900 bg-transparent hover:text-teal-400 mt-4">
                                      <span className="text-sm font-medium">
                                        {extra.name}
                                      </span>

                                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </summary>

                                    <nav
                                      aria-label="Users Nav"
                                      className="mt-2 flex flex-col space-y-1"
                                    >
                                      <div>
                                        <div className="mt-1 flex gap-x-8">
                                          <input
                                            type="text"
                                            name="square"
                                            id="email"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Min"
                                          />
                                          <input
                                            type="text"
                                            name="square"
                                            id="email"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Max"
                                          />
                                        </div>
                                      </div>
                                    </nav>
                                  </details>
                                ))}

                                {/* HOA */}
                                {selectFilters.map((selected, index) => (
                                  <details key={index} className="group">
                                    <summary className="flex cursor-pointer items-center rounded-lg px-2 py-2 text-gray-900 bg-transparent hover:text-teal-400 mt-4">
                                      <span className="text-sm font-medium">
                                        {selected.name}
                                      </span>

                                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </summary>

                                    <nav
                                      aria-label="Users Nav"
                                      className="mt-2 flex flex-col space-y-1"
                                    >
                                      <div>
                                        {/* <label
                                          htmlFor="location"
                                          className="block text-sm font-medium text-gray-700 text-start"
                                        >
                                          Location
                                        </label> */}
                                        <select
                                          id="location"
                                          name="location"
                                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                          defaultValue="1"
                                          onChange={() =>
                                            handleChange(event, selected.id)
                                          }
                                        >
                                          {selected.options.map(
                                            (opt, index) => (
                                              <option
                                                key={index}
                                                value={opt.value}
                                              >
                                                {opt.label}
                                              </option>
                                            )
                                          )}
                                        </select>
                                      </div>
                                    </nav>
                                  </details>
                                ))}
                              </nav>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>

              <SortComponent />
            </div>
          </section>
        </div>
      </div>
      <div className="flex border-4">
        <div className="w-full lg:w-4/6 p-4 lg:p-8">
          <div>
            <h1 className="font-display font-black lg:text-3xl md:text-3xl mb-4 text-base">
              Properties for sale in San Francisco, CA
            </h1>
            <div className="my-4 flex items-center space-x-4 sticky top-0 z-10 justify-between">
              <h3 className="font-display font-regular text-sm text-gray-500">
                1,663 Homes
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-4 ">
            {properties.map((item) => (
              // <SearchResultCard key={item.id} data={item} />
              <SearchResultCardTwo key={item.id} data={item} />
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hidden lg:flex lg:w-2/6">
          Right Side
        </div>
      </div>
    </div>
  );
};

export default NavigationSearchThree;
