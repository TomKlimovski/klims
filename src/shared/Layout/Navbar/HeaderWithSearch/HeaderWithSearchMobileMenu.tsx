import React, { ReactElement } from 'react';

import { Disclosure } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/solid';

interface Props {
  userNavigation: {
    name: string;
    href: string;
  }[];
}

export default function HeaderWithSearchMobileMenu({
  userNavigation,
}: Props): ReactElement {
  return (
    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="px-2 space-y-1">
          {userNavigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
        <button
          type="button"
          className="flex-shrink-0 p-1 mt-2 ml-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">Shopping Cart</span>
          <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </Disclosure.Panel>
  );
}
