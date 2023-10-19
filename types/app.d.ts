export interface Blog {
  id: number;
  title: string;
  description: string;
}

export interface BlogResponse {
  data: Array<{
    id: number;
    title: string;
    description: Array<string>;
  }>;
}
