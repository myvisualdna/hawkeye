import React from 'react';
import dynamic from 'next/dynamic';
import CarouselLoading from 'src/components/Loading/CarouselLoading';
import MiniCards from 'src/components/Homepage/MiniCards';
import PromotedHome from 'src/components/Homepage/PromotedHome';
import PosterHome from 'src/components/Homepage/PosterHome';
import SectionSliderNewCategories from 'src/components/Homepage/SectionSliderNewCategories/SectionSliderNewCategories';
import ReviewsHome from 'src/components/Homepage/ReviewsHome';
import { TaxonomyType } from 'src/types/types';
import CtaHome from 'src/components/Homepage/CtaHome';
import Steps from 'src/components/Homepage/Steps';
import ListBottom from 'src/components/Homepage/ListBottom';
import FeaturesHome from 'src/components/Homepage/FeaturesHome';
import Algolia from 'src/components/Homepage/Algolia'

type Props = {};

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: '1',
    href: '/listing-stay',
    name: 'New York City, NY',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1527267207156-3372670819dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  },
  {
    id: '222',
    href: '/listing-stay',
    name: 'San Francisco, California',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
  },
  {
    id: '3',
    href: '/listing-stay',
    name: 'Seattle, Washington',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: '4',
    href: '/listing-stay',
    name: 'Austin, Texas',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1557335200-a65f7f032602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2358&q=80',
  },
  {
    id: '5',
    href: '/listing-stay',
    name: 'Boston, Massachusetts',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1610891068146-87e9689d0f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
  },
  {
    id: '6',
    href: '/listing-stay',
    name: 'Chicago, Illinois',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: '7',
    href: '/listing-stay',
    name: 'Washingtong, DC',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1617293541384-2edc6f152ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: '8',
    href: '/listing-stay',
    name: 'Portland, Oregon',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1546884499-cad820a1b9ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: '9',
    href: '/listing-stay',
    name: 'Miami, Florida',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: '10',
    href: '/listing-stay',
    name: 'Denver, Colorado',
    taxonomy: 'category',
    count: 188288,
    thumbnail:
      'https://images.unsplash.com/photo-1617379773512-4bb1ad9349cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
  },
];

const DEMO_REVIEWS: ReviewType[] = [
  {
    name: 'Bill Gates',
    company: 'Microsoft',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam autem alias.',
    thumbnail:
      'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    name: 'Elon Musk',
    company: 'Microsoft',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam autem alias.',
    thumbnail:
      'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    name: 'Michael Sailor',
    company: 'Microsoft',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam autem alias.',
    thumbnail:
      'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2424&q=80',
  },
];

const Homepage = (props: Props) => {
  const MainHero = dynamic(() => import('src/components/Homepage/MainHero'), {
    loading: () => <CarouselLoading />,
  });

  return (
    <div>
      {/* <Algolia /> */}
      <div className="container mx-auto p-4 max-w-screen-2xl my-8">
        <MainHero />
      </div>
      <div className="container mx-auto p-4 max-w-screen-xl my-8">
        <MiniCards />
      </div>
      <div className="container mx-auto p-4 max-w-screen-xl my-8">
        <PromotedHome />
      </div>
      <div className="container mx-auto my-1">
        <PosterHome />
      </div>
      <div className="container mx-auto p-4 max-w-screen-xl my-1">
        <Steps />
      </div>
      <div className="container mx-auto p-4 max-w-screen-xl my-1">
        <SectionSliderNewCategories
          categories={DEMO_CATS_2}
          categoryCardType="card3"
          itemPerRow={5}
          heading="Live Anywhere"
          subHeading="Find your home in the largest cities in the US"
          uniqueClassName="PageHome2_s1"
        />
      </div>
      <div className="container mx-auto p-4 max-w-screen-xl my-8">
        <CtaHome />
      </div>
      <div className="container mx-auto p-4 max-w-screen-xl my-8">
        <FeaturesHome />
      </div>
      <div className="container mx-auto my-8 max-w-screen-xl">
        <ReviewsHome
          categories={DEMO_REVIEWS}
          categoryCardType="card9"
          itemPerRow={1}
          heading="What's our community saying?"
          subHeading="Love where you live. 21000+ reviews to help you find the best place."
          uniqueClassName="PageHome2_s1"
        />
      </div>
      <div className="container mx-auto p-4 xl:p-0 my-16 max-w-screen-xl">
        <ListBottom />
      </div>
    </div>
  );
};

export default Homepage;
