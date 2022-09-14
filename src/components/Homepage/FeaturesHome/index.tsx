import React from 'react';

type Props = {};

const FeaturesHome = (props: Props) => {
  return (
    <div>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-5xl font-display">
              Clear overview for efficient tracking
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </p>
            <button className='primary-button'>Learn More</button>
          </div>
          <div className="h-96 overflow-hidden bg-[url(https://images.unsplash.com/photo-1661242686756-de9bdeb69ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80)] bg-center bg-no-repeat bg-cover rounded-3xl"></div>
        </div>
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-5xl font-display">
              Decide how you integrate Payments
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </p>
            <button className='primary-button'>Learn More</button>
          </div>
          <div className="h-96 overflow-hidden bg-[url(https://images.unsplash.com/photo-1659614861242-ee945e448e68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80)] bg-center bg-no-repeat bg-cover rounded-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesHome;
