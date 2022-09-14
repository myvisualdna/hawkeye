import React from 'react';

type Props = {};

const CtaHome = (props: Props) => {
  return (
    <div>
      <aside className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1656248396925-ec086a35c568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)] bg-center bg-no-repeat bg-cover rounded-3xl h-64">
        <div className="p-8 md:p-12 lg:px-16 lg:py-12 ">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl xl:text-3xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!
            </h2>

            <p className="hidden max-w-md text-white/90 md:mt-6 md:text-lg md:leading-relaxed md:block xl:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CtaHome;
