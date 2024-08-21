import React from 'react';

type Props = {};

const pages = [
  { name: 'Florida', href: '#', current: false },
  { name: 'Miami', href: '#', current: true },
];

const BreadcrumbSection = (props: Props) => {
  return (
    <div className="w-full max-w-7xl my-6">
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <div>
              <a
                href="#"
                className="text-gray-900 hover:underline font-display text-sm font-medium"
              >
                Home
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <a
                  href={page.href}
                  className="ml-4 text-sm font-medium font-display text-gray-900 hover:text-gray-700 hover:underline"
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbSection;
