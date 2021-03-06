export interface APIInterface {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

export interface APICategory {
  count: number;
  categories: string[];
}
