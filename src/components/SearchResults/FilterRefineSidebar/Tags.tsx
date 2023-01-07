import React, { useContext, useEffect, useState } from 'react';

import { countBy, flattenDeep, isEqual, uniqWith } from 'lodash';

import { IFilters } from 'shared/models/Filters.model';
import { ITag } from 'shared/models/Result.model';

import { ResultsContext } from '../ResultsContext';

type ITagWithCount = ITag & { count: number };

const Tags = () => {
  const { initialResults, setFilters } = useContext(ResultsContext);

  const [tags, setTags] = useState<ITagWithCount[]>([]);
  const [checkedTags, setCheckedTags] = useState<boolean[]>([]);

  const initialTagSetup = () => {
    const allTags = flattenDeep(
      initialResults.map((results) => results.tags.flat()),
    );
    const uniqueTags = uniqWith(allTags, isEqual);
    const tagCount = countBy(allTags.map((tag) => tag.id));

    const tagsWithCount = uniqueTags.map((tag) => {
      return { ...tag, count: tagCount[tag.id] };
    });

    setTags(tagsWithCount);
    setCheckedTags(new Array(tagsWithCount.length).fill(false));
  };

  useEffect(() => {
    initialTagSetup();
  }, [initialResults]);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedTags.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedTags(updatedCheckedState);

    const checkedTagItems = updatedCheckedState
      .map((item, index) => item && tags[index])
      .filter((item) => item) as ITagWithCount[];

    const isAllTagsUnchecked = !updatedCheckedState.includes(true);
    if (isAllTagsUnchecked) {
      setFilters((filters: IFilters) => ({ ...filters, tags: [] }));
      return;
    }

    setFilters((filters: IFilters) => ({
      ...filters,
      tags: checkedTagItems.map(({ id }) => id),
    }));
  };

  const RenderTag = ({
    name,
    count,
    index,
  }: {
    name: string;
    count: number;
    index: number;
  }) => (
    <div className="relative flex items-center justify-between text-sm text-gray-700">
      <div className="flex items-center justify-center">
        <div className="flex items-center h-5">
          <input
            id={`${name}-tag`}
            aria-describedby={`${name}-tag`}
            name={`${name}-tag`}
            type="checkbox"
            checked={checkedTags[index]}
            onChange={() => handleOnChange(index)}
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={`${name}-tag`} className="text-gray-700">
            {name}
          </label>
        </div>
      </div>
      <span id="tag-count" className="text-xs">
        {count}
      </span>
    </div>
  );

  const RenderAllTags =
    tags &&
    tags.map(({ id, name, count }, index) => (
      <RenderTag key={id} name={name} count={count} index={index} />
    ));

  return (
    <div id="tags-section">
      <p className="text-sm">Tags</p>
      <div className="mt-2 space-y-2">{RenderAllTags}</div>
    </div>
  );
};

export default Tags;
