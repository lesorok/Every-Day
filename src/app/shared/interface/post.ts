export interface IPost {
  id?: number;
  title: string;
  author: string;
  category: string;
  tags: {
    id?: number;
    name: string;
  }[];
  countLike: number;
  file?: string;
}

export interface IPostForm {
  id?: number;
  title: string;
  author: string;
  category: string;
  tags: {
    id?: number;
    name: string;
  }[];
  countLike: number;
  file?: any;
}
