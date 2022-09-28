import React from 'react';

type Props = {};

const SectionSix = (props: Props) => {
  return (
    <div>
      <div>
        <h1 className="font-display font-bold text-2xl mb-2 text-gray-800">Where you'll live</h1>
        <span className="block font-regular font-display text-sm text-gray-800 dark:text-neutral-400">
          San Diego, CA, United States of America (SAN-San Diego Intl.)
        </span>
      </div>
      <hr className="border-1 border-gray-200 rounded-full duration-500 my-8" />
    </div>
  );
};

export default SectionSix;
