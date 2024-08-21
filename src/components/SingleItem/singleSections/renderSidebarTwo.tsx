import React from 'react';
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import SendMessageModal from './sendMessageModal';
import RequestTourModal from './requestTourModal';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const people = [
  {
    name: 'Jane Cooper',
    title: 'Levi Rodgers Real Estate Group',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
];

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

type Props = {};

const RenderSidebarTwo = (props: Props) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    // <div className='lg:ml-8'>
    //   <h2 className="sr-only">Product information</h2>
    //   <p className="text-3xl text-gray-900">Listing Agent</p>

    //   {/* Reviews */}
    //   <div className="mt-6">
    //     <h3 className="sr-only">Reviews</h3>
    //     <div className="flex items-center">
    //       <div className="flex items-center">
    //         <div>hey</div>
    //       </div>
    //     </div>
    //   </div>

    //   <form className="mt-10">
    //     {/* Colors */}
    //     <div>
    //       <h3 className="text-sm text-gray-900 font-medium">Color</h3>

    //       <RadioGroup
    //         value={selectedColor}
    //         onChange={setSelectedColor}
    //         className="mt-4"
    //       >
    //         <RadioGroup.Label className="sr-only">
    //           Choose a color
    //         </RadioGroup.Label>
    //         <div className="flex items-center space-x-3">
    //           {product.colors.map((color) => (
    //             <RadioGroup.Option
    //               key={color.name}
    //               value={color}
    //               className={({ active, checked }) =>
    //                 classNames(
    //                   color.selectedClass,
    //                   active && checked ? 'ring ring-offset-1' : '',
    //                   !active && checked ? 'ring-2' : '',
    //                   '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
    //                 )
    //               }
    //             >
    //               <RadioGroup.Label as="p" className="sr-only">
    //                 {color.name}
    //               </RadioGroup.Label>
    //               <span
    //                 aria-hidden="true"
    //                 className={classNames(
    //                   color.class,
    //                   'h-8 w-8 border border-black border-opacity-10 rounded-full'
    //                 )}
    //               />
    //             </RadioGroup.Option>
    //           ))}
    //         </div>
    //       </RadioGroup>
    //     </div>

    //     {/* Sizes */}
    //     <div className="mt-10">
    //       <div className="flex items-center justify-between">
    //         <h3 className="text-sm text-gray-900 font-medium">Size</h3>
    //         <a
    //           href="#"
    //           className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
    //         >
    //           Size guide
    //         </a>
    //       </div>

    //       <RadioGroup
    //         value={selectedSize}
    //         onChange={setSelectedSize}
    //         className="mt-4"
    //       >
    //         <RadioGroup.Label className="sr-only">
    //           Choose a size
    //         </RadioGroup.Label>
    //         <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
    //           {product.sizes.map((size) => (
    //             <RadioGroup.Option
    //               key={size.name}
    //               value={size}
    //               disabled={!size.inStock}
    //               className={({ active }) =>
    //                 classNames(
    //                   size.inStock
    //                     ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
    //                     : 'bg-gray-50 text-gray-200 cursor-not-allowed',
    //                   active ? 'ring-2 ring-indigo-500' : '',
    //                   'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
    //                 )
    //               }
    //             >
    //               {({ active, checked }) => (
    //                 <>
    //                   <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
    //                   {size.inStock ? (
    //                     <div
    //                       className={classNames(
    //                         active ? 'border' : 'border-2',
    //                         checked
    //                           ? 'border-indigo-500'
    //                           : 'border-transparent',
    //                         'absolute -inset-px rounded-md pointer-events-none'
    //                       )}
    //                       aria-hidden="true"
    //                     />
    //                   ) : (
    //                     <div
    //                       aria-hidden="true"
    //                       className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
    //                     >
    //                       <svg
    //                         className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
    //                         viewBox="0 0 100 100"
    //                         preserveAspectRatio="none"
    //                         stroke="currentColor"
    //                       >
    //                         <line
    //                           x1={0}
    //                           y1={100}
    //                           x2={100}
    //                           y2={0}
    //                           vectorEffect="non-scaling-stroke"
    //                         />
    //                       </svg>
    //                     </div>
    //                   )}
    //                 </>
    //               )}
    //             </RadioGroup.Option>
    //           ))}
    //         </div>
    //       </RadioGroup>
    //     </div>

    //     <button
    //       type="submit"
    //       className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //     >
    //       Add to bag
    //     </button>
    //   </form>
    // </div>
    <div className="ml-8">
      <div className="bg-white px-4 py-4 border-b border-gray-200 sm:px-2">
        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Tom Cook
                </h3>
                <p className="text-sm text-gray-500">
                  <a href="#">Levi Rodgers Real Estate Group</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-base font-display font-semibold">Contact</h2>
        <h3 className='text-sm font-display'>(915) 449-0503</h3>
      </div>
      <div className="mt-4">
        <h2 className="text-base font-display font-semibold">Languages</h2>
        <h3 className='text-sm font-display'>English, Français, Español</h3>
      </div>
      <div className="mt-4">
        <h2 className="text-base font-display font-semibold">Office Hours</h2>
        <h3 className='text-sm font-display'>9am to 6pm</h3>
      </div>
      <div className="mt-4">
        {/* <button className="w-full inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-display font-medium text-white hover:bg-transparent hover:text-gray-900 focus:outline-none focus:ring active:text-gray-500">
          Send Message
        </button> */}
        <SendMessageModal />
        {/* <button className="w-full inline-block rounded border border-gray-900 px-12 py-3 text-sm font-display font-medium text-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring active:bg-gray-500 mt-4">
          Schedule Tour
        </button> */}
        <RequestTourModal />
      </div>
    </div>
  );
};

export default RenderSidebarTwo;
