import React from 'react';

type Props = {};

const footerNavigation = {
  products: [
    { name: 'All Homes in Austin', href: '#' },
    { name: 'Houses in Austin', href: '#' },
    { name: 'Condos in Austin', href: '#' },
    { name: 'Townhouses in Austin', href: '#' },
    { name: 'Lots in Austin', href: '#' },
  ],
  customerService: [
    { name: '1 Bedroom Homes', href: '#' },
    { name: '2 Bedroom Homes', href: '#' },
    { name: '3 Bedroom Homes', href: '#' },
    { name: '4 Bedroom Homes', href: '#' },
    { name: '5 Bedroom Homes', href: '#' },
  ],
  company: [
    { name: 'Homes Under $200K', href: '#' },
    { name: 'Homes Under $300K', href: '#' },
    { name: 'Homes Under $400K', href: '#' },
    { name: 'Homes Under $500K', href: '#' },
    { name: 'Homes Under $1M', href: '#' },
  ],
  legal: [
    { name: 'Miami Homes for Sale', href: '#' },
    { name: 'Hollywood Homes for Sale', href: '#' },
    { name: 'Key West Homes for Sale', href: '#' },
    { name: 'Tampa Homes for Sale', href: '#' },
    { name: 'Naples Homes for Sale', href: '#' },
  ],
  bottomLinks: [
    { name: 'Accessibility', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

const BottomListSection = (props: Props) => {
  return (
    <div>
      <div className="mt-16 max-w-7xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
        <div className="grid grid-cols-2 gap-8 xl:col-span-2">
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            <div>
            <h3 className="font-display text-sm font-semibold text-gray-900">
                PROPERTIES FOR SALE
              </h3>
              <ul role="list" className="mt-8 space-y-4">
                {footerNavigation.products.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a
                      href={item.href}
                      className="font-display text-gray-500 hover:text-gray-600 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
            <h3 className="font-display text-sm font-semibold text-gray-900">
                HOMES IN AUSTIN BY BEDROOMS
              </h3>
              <ul role="list" className="mt-8 space-y-4">
                {footerNavigation.customerService.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a
                      href={item.href}
                      className="font-display text-gray-500 hover:text-gray-600 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="font-display text-sm font-semibold text-gray-900">
                HOMES IN AUSTIN BY PRICE RANGE
              </h3>
              <ul role="list" className="mt-8 space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a
                      href={item.href}
                      className="font-display text-gray-500 hover:text-gray-600 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
            <h3 className="font-display text-sm font-semibold text-gray-900">
                NEARBY CITIES
              </h3>
              <ul role="list" className="mt-8 space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name} className="text-sm">
                    <a
                      href={item.href}
                      className="font-display text-gray-500 hover:text-gray-600 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomListSection;
