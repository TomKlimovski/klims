import React, { ReactElement } from 'react';

import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/solid';

import AllCategoryFilter from './AllCategoryFilter';

function CategoryFilter(): ReactElement {
  const defaultChevronClasses =
    'w-4 h-4 text-gray-500 align-middle hover:text-gray-900';

  return (
    <div>
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full">
              <p className="text-sm">Category</p>
              <ChevronRightIcon
                className={`${
                  open ? 'transform rotate-90' : ''
                } ${defaultChevronClasses}`}
              />
            </Disclosure.Button>
            <Disclosure.Panel>
              <AllCategoryFilter />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default CategoryFilter;
