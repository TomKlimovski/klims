import React from 'react';

import Link from 'next/link';

const Logo = ({ source }: { source: string }) => (
  (<Link href="/" passHref>

    <span className="sr-only">Epicarc Logo</span>
    <img className="w-auto h-8 sm:h-10" src={source} alt="Epicarc Logo" />

  </Link>)
);
export default Logo;
