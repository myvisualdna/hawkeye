import React from 'react';
import dynamic from 'next/dynamic';
import SpinnerLoading from 'src/components/SingleItem/singleElements/spinnerLoading';
import CarouselLoading from 'src/components/SingleItem/singleElements/carouselLoading';
import SectionSliderNewCategories from 'src/components/Homepage/SectionSliderNewCategories/SectionSliderNewCategories';
import BackgroundSection from 'src/components/SingleItem/BackgroundSection/BackgroundSection';
import Container from 'src/components/Navigation/navContainer';
import { useRouter } from 'next/router';

const property = {
  id: '21521551',
  date: '03-05-1997',
  href: '/detail',
  listingCategoryId: 17,
  listingType: 'buy',
  propertyType: 'Townhouse',
  description: 'bla bla bla',
  price: '260000',
  features: {
    bedrooms: 3,
    bathrooms: 2,
    sqft: 431,
    builtIn: '1988',
    hoa: '127',
    airCentral: true,
    heat: false,
    smartThermo: false,
    parking: true,
    laundry: true,
    furnished: true,
    energy: 'A',
    emission: 'C',
    elevator: 'true',
    floorNumber: '3',
    pool: false,
    deck: false,
    balcony: false,
    securityCam: true,
    gym: false,
    petFriendly: false,
    mediaRoom: false,
    communityRoom: true,
    gatedAccess: false,
    storage: false,
    outdoorSpace: false,
    kitchenAppl: true,
    fence: true,
    insWindows: false,
    fireplace: true,
    flooring: 'Carpet',
    sewer: false,
    basement: true,
    roofType: 'Shingle'
  },
  featuredImage:
    'https://images.unsplash.com/photo-1663337048856-64be84c7d931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
  galleryImgs: [
    'https://images.unsplash.com/photo-1663337048856-64be84c7d931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    'https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ],
  hasVideo: false,
  videos: [],
  address: {
    title: '123 Limestone Ln, Suite #482',
    county: 'Sarasota',
    state: 'FL',
    zipCode: '22141',
    country: 'us',
    latitude: '55.2094559',
    longitude: '61.5594641',
  },
  advertiser: {
    clientAlias: 'Swan Brookers',
    clientId: 9202751408833,
    logo: {
      url: '',
    },
    phone: '954302563',
    typeId: 3,
    urlAlias: 'swan-brokers',
    reviewStart: 4.8,
    reviewCount: 28,
  },
  commentCount: 70,
  viewCount: 602,
  like: false,
  isFeatured: false,
  isNew: false,
  isTop: false,
  isVirtualTour: false,
  isSold: false,
  isSchedule: false,
  saleOff: '-10% off',
  isAds: null,
};

const PHOTOS: string[] = [
  'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/3851949/pexels-photo-3851949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/2677398/pexels-photo-2677398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

type Props = {};

const SingleItem = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const RenderPhotoHeader = dynamic(
    () => import('src/components/SingleItem/singleSections/renderPhotoHeader'),
    { loading: () => <CarouselLoading /> }
  );

  const SectionOne = dynamic(
    () => import('src/components/SingleItem/singleSections/sectionOne'),
    { loading: () => <SpinnerLoading /> }
  );

  const SectionTwo = dynamic(
    () => import('src/components/SingleItem/singleSections/sectionTwo'),
    { loading: () => <SpinnerLoading /> }
  );

  const SectionThree = dynamic(
    () => import('src/components/SingleItem/singleSections/sectionThree'),
    { loading: () => <SpinnerLoading /> }
  );

  const SectionFour = dynamic(
    () => import('src/components/SingleItem/singleSections/sectionFour'),
    { loading: () => <SpinnerLoading /> }
  );

  const SectionFive = dynamic(
    () => import('src/components/SingleItem/singleSections/sectionFive'),
    { loading: () => <SpinnerLoading /> }
  );

  const SectionSix = dynamic(
    () => import('src/components/SingleItem/singleSections/sectionSix'),
    { loading: () => <SpinnerLoading /> }
  );

  const RenderSidebar = dynamic(
    () => import('src/components/SingleItem/singleSections/renderSidebar'),
    { loading: () => <SpinnerLoading /> }
  );

  return (
    <div>
      <Container>
        <div
          className={`ListingDetailPage nc-ListingStayDetailPage grid grid-cols-1 justify-items-center p-4`}
          data-nc-id="ListingStayDetailPage"
        >
          {/* SINGLE HEADER */}
          <RenderPhotoHeader imgs={PHOTOS} />

          {/* MAIn */}
          <main className="container relative z-10 mt-11 flex flex-col lg:flex-row xl:px-24 ">
            {/* CONTENT */}
            <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
              <SectionOne propertyData={property} />
              <SectionTwo />
              <SectionThree propertyData={property} />
              <SectionFour />
              <SectionFive />
              <SectionSix />
            </div>

            {/* SIDEBAR */}
            <div className="hidden lg:block flex-grow mt-14 lg:mt-0 xl:w-1/3">
              <div className="sticky top-2">
                <RenderSidebar />
              </div>
            </div>
          </main>

          {/* STICKY FOOTER MOBILE */}
          {/* {!isPreviewMode && <MobileFooterSticky />} */}

          {/* OTHER SECTION */}
          {
            <div className="container py-24 lg:py-32">
              {/* SECTION 1 */}
              <div className="relative py-16">
                <BackgroundSection />
                <SectionSliderNewCategories
                  heading="Explore by types of stays"
                  subHeading="Explore houses based on 10 types of stays"
                  categoryCardType="card5"
                  itemPerRow={5}
                  sliderStyle="style2"
                  uniqueClassName={'ListingStayDetailPage1'}
                />
              </div>
            </div>
          }
        </div>
      </Container>
    </div>
  );
};

export default SingleItem;
