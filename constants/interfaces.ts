// export interface ActionPayload {
//   isSticky?: boolean;
//   searchValue?: string;
//   searchResult?: Book[];
//   totalItems?: number;
//   selectedBook?: Book | null;
//   error?: ErrorObject;
// }

export interface Action {
  type: string;
  isLoading?: boolean;
  searchValue?: string;
  searchResult?: Book[];
  totalItems?: number;
  selectedBook?: Book | null;
  error?: ErrorObject;
}

export interface Book {
  id: string;
  volumeInfo: {
    imageLinks: { [key: string]: string };
    title: string;
    authors: string[];
    categories: string[];
    description: string;
  };
}
export type ErrorObject = {
  title: string;
  description: string;
};
