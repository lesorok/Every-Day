export interface IComment {
  id?: number;
  content: string;
  author: string;
  countLike: number;
  postId: number;
}
