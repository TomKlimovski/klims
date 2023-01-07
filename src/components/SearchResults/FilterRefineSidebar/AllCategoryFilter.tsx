import React, { ReactElement, useContext, useEffect, useState } from 'react';

import { IFilters } from 'shared/models/Filters.model';
import { IResult } from 'shared/models/Result.model';

import { ResultsContext } from '../ResultsContext';

type ICategory = IResult['category'] & {
  count: number;
};

function AllCategoryFilter(): ReactElement {
  const { initialResults, setFilters } = useContext(ResultsContext);

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [categoryInFocus, setCategoryInFocus] = useState<ICategory[]>([]);

  const initialCategorySetup = () => {
    const getCategoryCountFromResults = (
      tempResults: IResult[],
      tempCategories: ICategory[],
    ) => {
      const cloneCategories = tempCategories;
      tempResults.forEach((result) => {
        const categoryId = result.category.id;
        const categoryIndex = cloneCategories.findIndex(
          (tempCategory) => tempCategory.id === categoryId,
        );
        cloneCategories[categoryIndex].count += 1;
      });
      return cloneCategories;
    };

    const uniqueKey = 'id';
    const uniqueCategories = [
      ...new Map(
        initialResults.map((item) => [
          item.category[uniqueKey],
          { ...item.category, count: 0 },
        ]),
      ).values(),
    ];

    const categoryCount = getCategoryCountFromResults(
      initialResults,
      uniqueCategories,
    );

    setCategories(categoryCount);
  };

  useEffect(() => {
    initialCategorySetup();
  }, [initialResults]);

  const RenderAllCategories = () => {
    const categorySwitch = (itemKey: string) => {
      const isItemFocussed = categoryInFocus.findIndex(
        (category) => category.id === itemKey,
      );

      if (isItemFocussed !== -1) {
        const newCategories = categoryInFocus.filter(
          ({ id }: { id: string }) => id !== itemKey,
        );
        setCategoryInFocus(newCategories);
      } else {
        const currentCategory = categories.find(
          (category) => category.id === itemKey,
        );

        setCategoryInFocus((categoriesInFocus: any) => [
          ...categoriesInFocus,
          currentCategory,
        ]);
      }
    };

    const RenderEachCategory = ({
      category,
      count,
      itemKey,
    }: {
      category: string;
      count: number;
      itemKey: string;
    }) => {
      const isCategoryInFocus = categoryInFocus.some(
        ({ id }: { id: string }) => id === itemKey,
      );

      return (
        <button
          type="button"
          className="block w-full"
          onClick={() => categorySwitch(itemKey)}
        >
          <div
            className={`flex items-center justify-between text-gray-700 ${
              isCategoryInFocus ? 'font-semibold' : ''
            }`}
          >
            <span className="ml-2 text-left">{category}</span>
            <span className="text-xs">{count}</span>
          </div>
        </button>
      );
    };

    const AllCategories = (
      <div className="my-2 space-y-2">
        {categories &&
          categories.map(({ id, name, count }) => (
            <RenderEachCategory
              key={id}
              itemKey={id}
              category={name}
              count={count}
            />
          ))}
      </div>
    );

    useEffect(() => {
      if (categoryInFocus.length) {
        setFilters((filters: IFilters) => ({
          ...filters,
          categories: categoryInFocus.map(({ id }) => id),
        }));
      } else {
        setFilters((filters: IFilters) => ({ ...filters, categories: [] }));
      }
    }, [categoryInFocus]);

    return AllCategories;
  };

  return (
    <div className="w-full mt-4 text-sm text-gray-900">
      <div className="flex items-center justify-between cursor-pointer">
        <button
          type="button"
          onClick={() => setCategoryInFocus([])}
          className={` ${!categoryInFocus.length ? 'font-medium' : ''}`}
        >
          All Categories
        </button>
        <span className="text-xs">
          {initialResults && initialResults.length}
        </span>
      </div>
      {RenderAllCategories()}
    </div>
  );
}

export default AllCategoryFilter;
