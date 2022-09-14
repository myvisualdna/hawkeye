import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiOutlineCheck, HiOutlineChevronDown } from 'react-icons/hi'

type Props = {}

const people = [
    { name: 'Buy' },
    { name: 'Rent' },
  ]

const TypeSearch = (props: Props) => {
    const [selected, setSelected] = useState(people[0])

  return (
    <div className="w-64">
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate text-gray-800 text-lg font-display font-bold">{selected.name}</span>
          <Listbox.Label className='font-display text-sm text-gray-400'>I want to...</Listbox.Label>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            {/* <HiOutlineChevronDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            /> */}
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute mt-6 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `font-display relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-gray-100 text-gray-800' : 'text-gray-800'
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-semibold' : 'font-normal'
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                        <HiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  </div>
  )
}

export default TypeSearch