import { createContext } from 'react';

import { NextRouter } from 'next/router';

export const RouterContext = createContext({
  router: {} as NextRouter,
});
