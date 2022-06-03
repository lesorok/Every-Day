export interface IPost {
  title: string;
  author: string;
  img: string[];
  category: string;
  tags: {
    id?: number;
    name: string;
  }[];
  countLike: number;
  id?: number;
}
