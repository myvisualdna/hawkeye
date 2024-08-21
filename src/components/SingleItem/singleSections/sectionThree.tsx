import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import KitchenIcon from 'src/styles/icons/KitchenIcon.svg';
import AirCold from 'src/styles/icons/AirCold.svg';
import HeatIcon from 'src/styles/icons/HeatIcon.svg';
import BedIcon from 'src/styles/icons/BedIcon.svg';
import BathIcon from 'src/styles/icons/BathIcon.svg';
import ThermoIcon from 'src/styles/icons/ThermoIcon.svg';
import ParkingIcon from 'src/styles/icons/ParkingIcon.svg';
import SocialRoom from 'src/styles/icons/SocialRoom.svg';
import CameraIcon from 'src/styles/icons/CameraIcon.svg';
import LaundryIcon from 'src/styles/icons/LaundryIcon.svg';
import DeckIcon from 'src/styles/icons/DeckIcon.svg';
import BalconyIcon from 'src/styles/icons/BalconyIcon.svg';
import FenceIcon from 'src/styles/icons/FenceIcon.svg';
import PetIcon from 'src/styles/icons/PetIcon.svg';
import MediaRoomIcon from 'src/styles/icons/MediaRoomIcon.svg';
import GymIcon from 'src/styles/icons/GymIcon.svg';
import FloorIcon from 'src/styles/icons/FloorIcon.svg';
import StorageIcon from 'src/styles/icons/StorageIcon.svg';
import StairIcon from 'src/styles/icons/StairIcon.svg';
import GateIcon from 'src/styles/icons/GateIcon.svg';
import FireplaceIcon from 'src/styles/icons/FireplaceIcon.svg';
import PoolIcon from 'src/styles/icons/PoolIcon.svg';
import RoofIcon from 'src/styles/icons/RoofIcon.svg';
import WindowIcon from 'src/styles/icons/WindowIcon.svg';
import SewerIcon from 'src/styles/icons/SewerIcon.svg';
import OutdoorIcon from 'src/styles/icons/OutdoorIcon.svg';
import ElevatorIcon from 'src/styles/icons/ElevatorIcon.svg';
import SofaIcon from 'src/styles/icons/SofaIcon.svg';
import FloorNumber from 'src/styles/icons/FloorNumber.svg';
import Image from 'next/image';

type Props = {};

const amenities_icon_style = 'w-5 h-5 text-gray-900';

const SectionThree = (props: Props) => {
  console.log(props);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const Amenities_demos = [
    {
      name: 'Property Type',
      icon: (
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
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
      data: props.propertyData.propertyType,
    },
    {
      name: 'Built in',
      icon: (
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
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
      ),
      data: `Built In ${props.propertyData.features.builtIn}`,
    },
    {
      name: 'Sqft',
      icon: (
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
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      ),
      data: `${props.propertyData.features.sqft} Sqft.`,
    },
    {
      name: 'Floor Number',
      icon: <Image src={FloorNumber} alt="energy" width={20} height={20} />,
      data: `Floor: ${props.propertyData.features.floorNumber}th Floor`,
    },
    {
      name: 'HOA',
      icon: (
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
            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
          />
        </svg>
      ),
      data: props.propertyData.features.hoa
        ? `HOA $${props.propertyData.features.hoa}`
        : null,
    },
    {
      name: 'Bedrooms',
      icon: <Image src={BedIcon} alt="bed" width={20} height={20} />,
      data: `${props.propertyData.features.bedrooms} Bedrooms`,
    },
    {
      name: 'Furnished',
      icon: <Image src={SofaIcon} alt="furnish" width={20} height={20} />,
      data: props.propertyData.features.furnished ? 'Furnished' : null,
    },
    {
      name: 'Elevator',
      icon: <Image src={ElevatorIcon} alt="elevator" width={20} height={20} />,
      data: props.propertyData.features.elevator ? 'Elevator' : null,
    },
    {
      name: 'Bathrooms',
      icon: <Image src={BathIcon} alt="bed" width={20} height={20} />,
      data: `${props.propertyData.features.bathrooms} Bathrooms`,
    },
    {
      name: 'Air Central',
      icon: <Image src={AirCold} alt="kitchen" width={20} height={20} />,
      data: props.propertyData.features.airCentral ? 'Air Central' : null,
    },
    {
      name: 'Heat',
      icon: <Image src={HeatIcon} alt="kitchen" width={20} height={20} />,
      data: props.propertyData.features.heat ? 'Heat' : null,
    },
    {
      name: 'Smart Thermostats',
      icon: <Image src={ThermoIcon} alt="SmartThermo" width={20} height={20} />,
      data: props.propertyData.features.smartThermo
        ? 'Smart Thermostats'
        : null,
    },
    {
      name: 'Parking',
      icon: <Image src={ParkingIcon} alt="parking" width={20} height={20} />,
      data: props.propertyData.features.parking ? 'Parking' : null,
    },
    {
      name: 'Laundry',
      icon: <Image src={LaundryIcon} alt="laundry" width={20} height={20} />,
      data: props.propertyData.features.laundry ? 'Laundry' : null,
    },
    {
      name: 'Pool',
      icon: <Image src={PoolIcon} alt="pool" width={20} height={20} />,
      data: props.propertyData.features.pool ? 'Pool' : null,
    },
    {
      name: 'Deck',
      icon: <Image src={DeckIcon} alt="deck" width={20} height={20} />,
      data: props.propertyData.features.deck ? 'Deck' : null,
    },
    {
      name: 'Balcony',
      icon: <Image src={BalconyIcon} alt="balcony" width={20} height={20} />,
      data: props.propertyData.features.balcony ? 'Balcony' : null,
    },
    {
      name: 'Security Camera',
      icon: <Image src={CameraIcon} alt="camera" width={20} height={20} />,
      data: props.propertyData.features.securityCam ? 'Security Camera' : null,
    },
    {
      name: 'Gym',
      icon: <Image src={GymIcon} alt="gym" width={20} height={20} />,
      data: props.propertyData.features.gym ? 'Gym' : null,
    },
    {
      name: 'Pet Friendly',
      icon: <Image src={PetIcon} alt="pet" width={20} height={20} />,
      data: props.propertyData.features.petFriendly ? 'Pet Friendly' : null,
    },
    {
      name: 'Media Room',
      icon: <Image src={MediaRoomIcon} alt="pet" width={20} height={20} />,
      data: props.propertyData.features.mediaRoom ? 'Media Room' : null,
    },
    {
      name: 'Social Room',
      icon: <Image src={SocialRoom} alt="socialRoom" width={20} height={20} />,
      data: props.propertyData.features.socialRoom ? 'Social Room' : null,
    },
    {
      name: 'Gated Access',
      icon: <Image src={GateIcon} alt="gate" width={20} height={20} />,
      data: props.propertyData.features.gatedAccess ? 'Gated Access' : null,
    },
    {
      name: 'Gated Access',
      icon: <Image src={StorageIcon} alt="gate" width={20} height={20} />,
      data: props.propertyData.features.storage ? 'Storage' : null,
    },
    {
      name: 'Outdoor Space',
      icon: <Image src={OutdoorIcon} alt="gate" width={20} height={20} />,
      data: props.propertyData.features.outdoorSpace
        ? 'Outdoor Space/Garden'
        : null,
    },
    {
      name: 'Kitchen Appliances',
      icon: <Image src={KitchenIcon} alt="kitchen" width={20} height={20} />,
      data: props.propertyData.features.kitchenAppl
        ? 'Kitchen Appliances'
        : null,
    },
    {
      name: 'Fence',
      icon: <Image src={FenceIcon} alt="fence" width={20} height={20} />,
      data: props.propertyData.features.fence ? 'Fence' : null,
    },
    {
      name: 'Insulated Windows',
      icon: <Image src={WindowIcon} alt="window" width={20} height={20} />,
      data: props.propertyData.features.insWindows ? 'Insulated Windows' : null,
    },
    {
      name: 'Fireplace',
      icon: (
        <Image src={FireplaceIcon} alt="fireplace" width={20} height={20} />
      ),
      data: props.propertyData.features.fireplace ? 'Fireplace' : null,
    },
    {
      name: 'Floor Type',
      icon: <Image src={FloorIcon} alt="floor" width={20} height={20} />,
      data: `Floor: ${props.propertyData.features.flooring}`,
    },
    {
      name: 'Sewer',
      icon: <Image src={SewerIcon} alt="sewer" width={20} height={20} />,
      data: props.propertyData.features.sewer ? 'Sewer' : null,
    },
    {
      name: 'Basement',
      icon: <Image src={StairIcon} alt="basement" width={20} height={20} />,
      data: props.propertyData.features.basement ? 'Basement' : null,
    },
    {
      name: 'Roof Type',
      icon: <Image src={RoofIcon} alt="basement" width={20} height={20} />,
      data: `Roof Type: ${props.propertyData.features.roofType}`,
    },
  ];

  return (
    <div>
      <div>
        <div className="pb-5 border-b border-gray-200">
          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            Amenities
          </h3>
        </div>
      </div>
      {/* <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 mt-8"></div> */}
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 text-sm text-neutral-700 dark:text-neutral-300 mt-6">
        {Amenities_demos.filter((_, i) => i < 9)
          .filter((item) => item.data != null)
          .map((item) => (
            <div key={item.name} className="flex items-center space-x-3">
              {item.icon}
              <span className="font-body text-sm font-regular text-gray-900">
                {item.data}
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
              <div className="flex min-h-full items-center justify-center lg:p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-screen h-screen lg:h-full lg:w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-8 px-12 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <div className="flex justify-between content-center items-center font-display text-2xl text-gray-800 font-bold">
                        <h1>Amenities</h1>

                        <button
                          className="inline-block p-2 text-gray-600 border border-gray-600 rounded-full hover:text-white hover:bg-gray-800 active:bg-gray-200 active:border-gray-50  focus:outline-none"
                          onClick={closeModal}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                          </svg>
                        </button>
                      </div>
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="grid grid-cols-2 xl:grid-cols-3 gap-10 text-sm text-gray-900 dark:text-neutral-300 mt-6">
                        {Amenities_demos.filter(
                          (item) => item.data != null
                        ).map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center space-x-3"
                          >
                            {item.icon}
                            <span className="font-display text-sm font-regular text-gray-800">
                              {item.data}
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
    </div>
  );
};

export default SectionThree;
