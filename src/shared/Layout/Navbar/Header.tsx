import React from 'react';

import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import Logo from './Logo';
import MobileHeader from './MobileHeader';

export interface IHeaderProps {
  name: string;
  href: string;
}

const Header = ({
  navigation,
  logo,
}: {
  navigation: IHeaderProps[];
  logo: string;
}) => {
  const RenderLoginSignupButtons = () => (
    <div className="hidden md:flex md:items-center md:space-x-6">
      <Link
        href="login"
        passHref
        className="text-base text-white hover:text-gray-300">
        Log in
      </Link>
      <Link
        href="signup"
        passHref
        className="inline-flex items-center px-4 py-2 text-base text-white bg-gray-600 border border-transparent rounded-md hover:bg-gray-700">
        
          Become a member
        
      </Link>
    </div>
  );

  const RenderNavigationItems = () => (
    <div className="hidden space-x-8 md:flex md:ml-10">
      {navigation.length > 0 &&
        navigation.map((link) => (
          (<Link
            key={link.name}
            href={link.href}
            className="text-base text-white hover:text-gray-300">

            {link.name}

          </Link>)
        ))}
    </div>
  );

  const RenderMobileMainMenu = () => (
    <div className="flex items-center -mr-2 md:hidden">
      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
        <span className="sr-only">Open main menu</span>
        <MenuIcon className="w-6 h-6" aria-hidden="true" />
      </Popover.Button>
    </div>
  );

  return (
    <div className="relative">
      <Popover as="header" className="relative">
        {({ open }) => (
          <>
            <div className="pt-6 pb-10 bg-gray-900">
              <nav
                className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
                aria-label="Global"
              >
                <div className="flex items-center flex-1">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Logo source={logo} />
                    <RenderMobileMainMenu />
                  </div>
                  <RenderNavigationItems />
                </div>
                <RenderLoginSignupButtons />
              </nav>
            </div>
            <MobileHeader
              navigation={navigation}
              isOpen={open}
              imageSource={logo}
            />
          </>
        )}
      </Popover>
    </div>
  );
};

export default Header;
