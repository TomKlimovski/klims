import React, { ReactElement } from 'react';

import StarRatings from 'react-star-ratings';

interface IStarRatingProps {
  rating: number;
}

function StarRating({ rating }: IStarRatingProps): ReactElement {
  const tealColor = 'rgba(45, 212, 191)';

  return (
    <StarRatings
      rating={rating}
      starRatedColor={tealColor}
      numberOfStars={5}
      starDimension="20px"
      starSpacing="1px"
      name="rating"
    />
  );
}

export default StarRating;
