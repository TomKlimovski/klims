import React from 'react';

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import Link from 'next/link';

import Logo from '../Logo';
import HeaderWithSearchMobileMenu from './HeaderWithSearchMobileMenu';
import SearchInput from './SearchInput';

const userNavigation = [
  { name: 'Login', href: 'login' },
  { name: 'Signup', href: 'signup' },
];

const HeaderWithSearch = ({
  keyword,
  logo,
}: {
  keyword: string | string[];
  logo: string;
}) => {
  const RenderLoginSignupButtons = () => (
    <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
      <button
        type="button"
        className="flex-shrink-0 p-1 mr-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      >
        <span className="sr-only">Shopping Cart</span>
        <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
      </button>
      <div className="hidden md:flex md:items-center md:space-x-1">
        <Link
          href="login"
          passHref
          className="text-base text-white hover:text-gray-300">
          Log in
        </Link>
        <span className="text-base text-white">/</span>
        <Link
          href="signup"
          passHref
          className="text-base text-white hover:text-gray-300">
          Signup
        </Link>
      </div>
    </div>
  );

  const RenderMobileMainMenu = (open: boolean) => (
    <div className="relative z-10 flex items-center lg:hidden">
      <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="sr-only">Open menu</span>
        {open ? (
          <XIcon className="block w-6 h-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="block w-6 h-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );

  return (
    <Disclosure as="header" className="py-4 bg-gray-900">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex items-center flex-shrink-0">
                  <Logo source={logo} />
                </div>
              </div>
              <SearchInput keyword={keyword} />
              {RenderMobileMainMenu(open)}
              <RenderLoginSignupButtons />
            </div>
          </div>
          <HeaderWithSearchMobileMenu userNavigation={userNavigation} />
        </>
      )}
    </Disclosure>
  );
};

export default HeaderWithSearch;
