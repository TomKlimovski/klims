export interface IResult {
  id: number;
  category: {
    id: string;
    name: string;
    href: string;
  };
  tags: ITag[];
  title: string;
  description: string;
  price: number;
  author: {
    name: string;
    href: string;
    imageUrl: string;
  };
  starRating: number;
  popularityScore: number;
  publishedDate: string;
  version: string;
  imageUrl: string;
  isBookmarked: boolean;
  isLiked: boolean;
}

export interface ITag {
  id: string;
  name: string;
  href: string;
}
