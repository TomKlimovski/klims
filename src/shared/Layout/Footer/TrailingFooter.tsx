import React from 'react';

interface ITrailingFooter {
  name: string;
  href: string;
  icon: (props: any) => JSX.Element;
}

const TrailingFooter = ({ navigation }: { navigation: ITrailingFooter[] }) => {
  return (
    <div className="pt-8 mt-8 border-t border-gray-700 md:flex md:items-center md:justify-between">
      <div className="flex space-x-6 md:order-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">{item.name}</span>
            <item.icon className="w-6 h-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
        &copy; {new Date().getFullYear()} Epicarc. All rights reserved.
      </p>
    </div>
  );
};

export default TrailingFooter;
