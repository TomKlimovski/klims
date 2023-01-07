import React, { Fragment } from 'react';

import { Transition, Popover } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import Link from 'next/link';

import Logo from './Logo';

export interface IMobileHeaderProps {
  name: string;
  href: string;
}

const MobileHeader = ({
  navigation,
  isOpen,
  imageSource,
}: {
  navigation: IMobileHeaderProps[];
  isOpen: boolean;
  imageSource: string;
}) => {
  const RenderNavigationItems = () => (
    <div className="px-2 space-y-1">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
        >
          {item.name}
        </a>
      ))}
    </div>
  );

  const RenderCloseMenuButton = () => (
    <div className="-mr-2">
      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
        <span className="sr-only">Close menu</span>
        <XIcon className="w-6 h-6" aria-hidden="true" />
      </Popover.Button>
    </div>
  );

  const RenderActionButtons = () => (
    <>
      <div className="px-5 mt-6">
        <Link
          href="signup"
          passHref
          className="block w-full px-4 py-3 font-medium text-center text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700">
          
            Become a member
          
        </Link>
      </div>
      <div className="px-5 mt-6">
        <p className="text-base font-medium text-center text-gray-500">
          Existing Member?{' '}
          <Link href="login" passHref className="text-gray-900 hover:underline">
            
              Login
            
          </Link>
        </p>
      </div>
    </>
  );

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        static
        focus
        className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top transform md:hidden"
      >
        <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between px-5 pt-4">
            <Logo source={imageSource} />
            <RenderCloseMenuButton />
          </div>
          <div className="pt-5 pb-6">
            <RenderNavigationItems />
            <RenderActionButtons />
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default MobileHeader;
