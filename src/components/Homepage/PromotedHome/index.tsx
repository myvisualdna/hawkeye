import React from 'react';
import dynamic from "next/dynamic";
import CardLoading from 'src/components/Loading/CardLoading';
import PromotedCards from 'src/components/Cards/PromotedCards';

type Props = {}

const PromotedHome = (props: Props) => {

  // const PromotedCards = dynamic(() => 
  // import("components/PromotedCards"), {loading: () => <CardLoading />});



  return (
    <div>
      <PromotedCards           
        categoryCardType="card2"
        subHeading="Find your home in the largest cities in the US"
        heading="Top Deals"
        itemPerRow={4}
        uniqueClassName="PageHome2_s1" />
              {/* <SectionSliderNewCategories
          categories={DEMO_CATS_2}
          categoryCardType="card3"
          itemPerRow={5}
          heading="Top Cities"
          subHeading="Find your home in the largest cities in the US"
          uniqueClassName="PageHome2_s1"
        /> */}
    </div>
  )
}

export default PromotedHome