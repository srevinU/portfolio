export type AdminMessagesT = Array<AdminMessageT>;

export type AdminMessageT = {
  id: number;
  name: string;
  email: string;
  message: string;
  state: string;
  modified: boolean;
  delete: boolean;
};

export type SearchT = {
  name: string;
  email: string;
  message: string;
  state: string;
  modified: boolean;
  delete: boolean;
};
