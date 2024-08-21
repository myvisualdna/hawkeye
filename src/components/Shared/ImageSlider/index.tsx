import React, { useState } from 'react';
// import "./styles.css"
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

interface Props {}

const images = [
  'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
  'https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
  'https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
  'https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
];

export default function ImageSlider({ galleryImgs }) {
  console.log(galleryImgs);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [hoverArrows, setHoverArrows] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handleMouseOver = () => {
    console.log("🚀 ~ file: index.tsx ~ line 35 ~ handleMouseOver ~ hello")
    setHoverArrows(true)
  }

  const handleMouseOut = () => {
    console.log("🚀 ~ file: index.tsx ~ line 35 ~ handleMouseOver ~ OUT")
    setHoverArrows(false)
  }


  return (
    <>
      <div className="navigation-wrapper" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
        <div ref={sliderRef} className="keen-slider h-full">
          {galleryImgs.map((img, index) => (
            <div className="keen-slider__slide number-slide1" key={index}>
              <Image
                src={img}
                alt="Picture of the author"
                className="object-cover"
                layout="fill"
              />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
              className={hoverArrows === true ? "text-gray-800 bg-slate-200 shadow-2xl rounded-full p-2 duration-700 hover:opacity-75" : "text-transparent"}
            />
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              className={hoverArrows === true ? "text-gray-800 bg-slate-200 shadow-xl rounded-full p-2 duration-700 hover:opacity-75" : "text-transparent"}
            />
          </>
        )}
      </div>
      {/* {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )} */}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  className?: string,
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.className} ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      
      )}
      {!props.left && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      
      )}
    </svg>
  );
}

