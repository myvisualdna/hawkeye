import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import {
  MdSquareFoot,
  MdOutlineDeck,
  MdOutlineBalcony,
  MdOutlinePets,
  MdOutlineOutdoorGrill,
  MdKitchen,
  MdOutlineWater,
  MdOutlineRoofing,
} from 'react-icons/md';

type Props = {};

const amenities_icon_style = 'w-5 h-5 text-gray-900';

const Amenities_demos = [
  {
    name: 'Condominium',
    // icon: <FaRegBuilding className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Built in',
    // icon: <BsCalendarDate className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Price/Sqft',
    // icon: <MdSquareFoot className={`${amenities_icon_style}`} />,
  },
  {
    name: 'HOA',
    //   icon: <CgCalculator className={`${amenities_icon_style}`} /> },
  },
  {
    name: 'Air Central',
    // icon: <BsSnow3 className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Heat',
    // icon: <BsThermometerHigh className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Smart Thermostats',
    // icon: <SiSmartthings className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Parking',
    // icon: <RiParkingBoxFill className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Laundry',
    // icon: <GiWashingMachine className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Pool',
    // icon: <FaSwimmingPool className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Deck',
    // icon: <MdOutlineDeck className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Balcony',
    // icon: <MdOutlineBalcony className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Security Camera',
    // icon: <GiCctvCamera className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Gym',
    //   icon: <CgGym className={`${amenities_icon_style}`} />
  },
  {
    name: 'Pet Friendly',
    // icon: <MdOutlinePets className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Media Room',
    // icon: <IoTvOutline className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Community Room',
    // icon: <GiThreeFriends className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Wifi',
    // icon: <IoWifiOutline className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Gated Access',
    // icon: <GiGate className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Storage',
    // icon: <BiPackage className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Outdoor Space',
    // icon: <MdOutlineOutdoorGrill className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Kitchen Appliances',
    // icon: <MdKitchen className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Fence',
    // icon: <GiSpikedFence className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Insulated Windows',
    // icon: <GiWindow className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Fireplace',
    // icon: <RiFireFill className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Flooring',
    // icon: <GiFloorPolisher className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Sewer',
    // icon: <MdOutlineWater className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Basement',
    // icon: <TbStairsDown className={`${amenities_icon_style}`} />,
  },
  {
    name: 'Roof Type',
    // icon: <MdOutlineRoofing className={`${amenities_icon_style}`} />,
  },
];

const SectionThree = (props: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div>
        <h1 className="font-display font-bold text-2xl mb-8 text-gray-800">Amenities</h1>
        {/* <h4 className="font-body font-regular text-base text-gray-400 mt-2">
          This property offers the following amenities:
        </h4> */}
      </div>
      {/* <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 mt-8"></div> */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300">
        {Amenities_demos.filter((_, i) => i < 12).map((item) => (
          <div key={item.name} className="flex items-center space-x-3">
            {/* <i className={`text-3xl las ${item.icon}`}></i> */}
            {item.icon}
            <span className="font-body text-sm font-regular text-gray-900">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <>
        <div className="flex items-center justify-start mt-8">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md border-solid text-gray-900 border border-gray-600 px-4 py-2 text-base font-medium font-body hover:bg-opacity-30 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Show all amenities
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
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                        <div className='flex justify-between content-center items-center'>
                            <h1>Amenities</h1>
                            <button
                        type="button"
                        className="inline-flex justify-center rounded-full border border-transparent px-3 py-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        x
                      </button>
                        </div>
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 text-sm text-gray-900 dark:text-neutral-300 mt-6">
                        {Amenities_demos.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center space-x-3"
                          >
                            {item.icon}
                            <span className="font-body text-sm font-regular text-gray-900">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <hr className="border-1 border-gray-200 rounded-full duration-500 my-12" />
    </div>
  );
};

export default SectionThree;
