import React from 'react';

import {
  BookmarkIcon as BookmarkIconOutlined,
  HeartIcon,
} from '@heroicons/react/outline';

const BookMarkHeartIcon = ({
  isBookmarked,
  isLiked,
}: {
  isBookmarked: boolean;
  isLiked: boolean;
}) => (
  <>
    <BookmarkIconOutlined
      className={`w-6 h-6 text-gray-900 cursor-pointer ${
        isBookmarked ? 'fill-current' : ''
      }`}
    />
    <div className="h-8 border-l-2 border-black" />
    <HeartIcon
      className={`w-6 h-6 text-red-400 cursor-pointer ${
        isLiked ? 'fill-current' : ''
      }`}
    />
  </>
);

export default BookMarkHeartIcon;
