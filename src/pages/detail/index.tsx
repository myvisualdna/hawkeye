import React from 'react';
import dynamic from "next/dynamic";
import SpinnerLoading from 'src/components/SingleItem/singleElements/spinnerLoading'
import CarouselLoading from 'src/components/SingleItem/singleElements/carouselLoading'
import SectionSliderNewCategories from 'src/components/Homepage/SectionSliderNewCategories/SectionSliderNewCategories';
import BackgroundSection from 'src/components/SingleItem/BackgroundSection/BackgroundSection';
import Container  from 'src/components/Navigation/navContainer';



const PHOTOS: string[] = [
  "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/3851949/pexels-photo-3851949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2677398/pexels-photo-2677398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

type Props = {}

const SingleItem = (props: Props) => {

  const RenderPhotoHeader = dynamic(() => 
  import("src/components/SingleItem/singleSections/renderPhotoHeader"), {loading: () => <CarouselLoading />});

  const SectionOne = dynamic(() => 
  import("src/components/SingleItem/singleSections/sectionOne"), {loading: () => <SpinnerLoading />});

  const SectionTwo = dynamic(() => 
  import("src/components/SingleItem/singleSections/sectionTwo"), {loading: () => <SpinnerLoading />});

  const SectionThree = dynamic(() => 
import("src/components/SingleItem/singleSections/sectionThree"), {loading: () => <SpinnerLoading />});

const SectionFour = dynamic(() => 
import("src/components/SingleItem/singleSections/sectionFour"), {loading: () => <SpinnerLoading />});

const SectionFive = dynamic(() => 
import("src/components/SingleItem/singleSections/sectionFive"), {loading: () => <SpinnerLoading />});

const SectionSix = dynamic(() => 
import("src/components/SingleItem/singleSections/sectionSix"), {loading: () => <SpinnerLoading />});

const RenderSidebar = dynamic(() => 
import("src/components/SingleItem/singleSections/renderSidebar"), {loading: () => <SpinnerLoading />});

  return (
    <div>
      <Container>
    <div
      className={`ListingDetailPage nc-ListingStayDetailPage grid grid-cols-1 justify-items-center p-4`}
      data-nc-id="ListingStayDetailPage"
    >
      {/* SINGLE HEADER */}
      <RenderPhotoHeader
       imgs={PHOTOS}
       />

      {/* MAIn */}
      <main className="container relative z-10 mt-11 flex flex-col lg:flex-row xl:px-24 ">
        {/* CONTENT */}
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block flex-grow mt-14 lg:mt-0 xl:w-1/3">
          <div className="sticky top-2"><RenderSidebar /></div>
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
  )
}

export default SingleItem