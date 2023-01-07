import React from 'react';

import TrailingFooter from './TrailingFooter';

export interface IFooterProps {
  titles: {
    sectionOne: string;
    sectionTwo: string;
    sectionThree: string;
    sectionFour: string;
  };
  sectionOne: {
    name: string;
    href: string;
  }[];
  sectionTwo: {
    name: string;
    href: string;
  }[];
  sectionThree: {
    name: string;
    href: string;
  }[];
  sectionFour: {
    name: string;
    href: string;
  }[];
  social: {
    name: string;
    href: string;
    icon: (props: any) => JSX.Element;
  }[];
}

const Footer = ({
  navigation: {
    titles,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    social,
  },
}: {
  navigation: IFooterProps;
}) => {
  const RenderNavigationItems = (
    navigationItems: { name: string; href: string }[],
  ) => (
    <ul className="mt-4 space-y-4">
      {navigationItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="text-base text-gray-300 hover:text-white"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );

  const RenderTwoColumnSection = (
    sectionOneTitle: string,
    sectionTwoTitle: string,
    sectionOneNav: { name: string; href: string }[],
    sectionTwoNav: { name: string; href: string }[],
  ) => (
    <div className="md:grid md:grid-cols-2 md:gap-8">
      <div>
        <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
          {sectionOneTitle}
        </h3>
        {RenderNavigationItems(sectionOneNav)}
      </div>
      <div className="mt-12 md:mt-0">
        <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
          {sectionTwoTitle}
        </h3>
        {RenderNavigationItems(sectionTwoNav)}
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            {RenderTwoColumnSection(
              titles.sectionOne,
              titles.sectionTwo,
              sectionOne,
              sectionTwo,
            )}
            {RenderTwoColumnSection(
              titles.sectionThree,
              titles.sectionFour,
              sectionThree,
              sectionFour,
            )}
          </div>
        </div>
        <TrailingFooter navigation={social} />
      </div>
    </footer>
  );
};

export default Footer;
