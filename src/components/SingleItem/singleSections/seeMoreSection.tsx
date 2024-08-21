import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

type Props = {};

const products = [
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1669020260300-30ba614e10d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8TThqVmJMYlRSd3N8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 2,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://plus.unsplash.com/premium_photo-1668780538503-142b057ab8e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 3,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1668767285643-ada1118345e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 4,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1668957065532-5770d193d501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 5,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1658915111655-36ef645fa24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 6,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://images.unsplash.com/photo-1668957067320-921d79368284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  // More products...
];

const SeeMoreSection = (props: Props) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 500px)': {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      '(min-width: 501px)': {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      '(min-width: 980px)': {
        slides: {
          perView: 4,
          spacing: 15,
        },
      },
    },
  });

  return (
    <div>
      <div className="w-full flex justify-between my-8">
        <h2 className="text-2xl font-display font-extrabold tracking-tight text-gray-900">
          Similar Homes
        </h2>
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          View More<span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
      <div>
        <div ref={ref} className="keen-slider">
          {products.map((product, idx) => (
            <div key={idx} className="keen-slider__slide flex flex-col">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover rounded-md"
              />
              <div>
                <h3 className="mt-4 text-lg font-display font-bold text-gray-900">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    $190,000
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-900">
                  3 Bed • 2 Bath • 431 Sqft
                </p>
                <p className="mt-1 text-sm font-light text-gray-900">
                  8242 Main St - Boston, MS - 22141
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeMoreSection;
