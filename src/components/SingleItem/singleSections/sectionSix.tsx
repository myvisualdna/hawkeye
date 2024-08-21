import Image from 'next/image';
import React from 'react';

type Props = {};

const SectionSix = (props: Props) => {
  return (
    <div>
      <div className="pb-5 border-b border-gray-200">
        <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
          <h3 className="ml-2 mt-2 text-2xl leading-6 font-medium text-gray-900">
            Property Location
          </h3>
          <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
            San Diego, CA
          </p>
        </div>
      </div>
      <div className='mt-12'>
        <Image src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80" alt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover"/>

      </div>
    </div>
  );
};

export default SectionSix;
