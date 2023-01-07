import { createContext } from 'react';

import { IResult } from 'shared/models/Result.model';

export const ResultsContext = createContext({
  initialResults: {} as IResult[],
  resultsInView: {} as IResult[],
  setResults: (_results: IResult[]) => {},
  setFilters: (_filters: any) => {},
});
