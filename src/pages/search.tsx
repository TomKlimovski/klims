// import { api } from 'api/axios';
import React from 'react';

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import ResultsText from 'components/SearchResults/ResultsText';
import { RouterContext } from 'components/SearchResults/RouterContext';
import Layout from 'shared/Layout/Layout';
import { IPagination } from 'shared/models/Pagination.model';
import { IResult } from 'shared/models/Result.model';

import { mockApi } from '../../test/mock-search-result';
import ResultsContainer from '../components/SearchResults/ResultsContainer';

const Search = ({
  results,
  pageCount,
  currentPage,
  totalResults,
  pageSize,
  error,
}: {
  results: IResult[];
  error: Error;
  pageCount: number;
  pageSize: number;
  currentPage: number;
  totalResults: number;
}) => {
  const router = useRouter();
  const { query } = router.query;

  const paginationInfo: IPagination = {
    pageCount,
    currentPage,
    pageSize,
  };

  return (
    <Layout searchKeyword={query}>
      <Head>
        <title>
          Epicarc | {totalResults} Search Results for &quot;{query}&quot;
        </title>
        <meta name="description" content="home | epicarc.com.au" />
      </Head>
      <ResultsText keyword={query} resultsCount={totalResults} />
      <hr className="h-5 mx-20" />
      <RouterContext.Provider value={{ router }}>
        <ResultsContainer
          results={results}
          error={error}
          paginationInfo={paginationInfo}
        />
      </RouterContext.Provider>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  try {
    const response = mockApi(Number(page));

    // const response = await api.get('results&page=${page}');
    // const { results }: { results: IResult[] } = response.data;
    return {
      props: {
        results: response.results,
        pageCount: response.pageCount,
        currentPage: response.currentPage,
        totalResults: response.totalResults,
        pageSize: response.pageSize,
      },
    };
  } catch (error) {
    return {
      props: {
        error: JSON.stringify(error),
      },
    };
  }
};

export default Search;
