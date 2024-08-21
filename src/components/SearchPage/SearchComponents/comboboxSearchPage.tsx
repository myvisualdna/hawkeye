import React from 'react';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { HiOutlineCheck, HiOutlineChevronDown } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { IoMdSearch } from 'react-icons/io';

type Props = {};

const people = [
  { id: 1, name: 'New York' },
  { id: 2, name: 'Boston' },
  { id: 3, name: 'Arizona' },
  { id: 4, name: 'Tampa' },
  { id: 5, name: 'New Jersey' },
  { id: 6, name: 'Los Angeles' },
];

const ComboSearchPage = (props: Props) => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState('');

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

  return (
    <div className="">
      <div>
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative">
            <div className="relative xs:w-32 md:w-64 lg:w-72 cursor-default overflow-hidden rounded-lg bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm p-2 border border-solid border-gray-100">
              <div className="flex justify-center content-center items-center">
                <IoMdSearch className='w-6 h-6 ml-2' />
                <Combobox.Input
                  className="w-full border-none py-1 pl-3 pr-10 leading-5 text-gray-800 focus:ring-0 font-display font-semibold text-sm placeholder:text-gray-300 placeholder:text-sm placeholder:font-medium"
                  displayValue={(person) => person.name}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder='Search by City, State, Zip'
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
              {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiOutlineChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button> */}
              {/* <Combobox.Button className="font-display text-sm text-gray-400 ml-3">
                Where are we going?
              </Combobox.Button> */}
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
                        `relative cursor-default select-none py-2 pl-10 pr-4 font-display ${
                          active ? 'bg-gray-100 text-gray-800' : 'text-gray-800'
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
                                active ? 'text-teal-500' : 'text-gray-800'
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
  );
};

export default ComboSearchPage;
