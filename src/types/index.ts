export type User = {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  isAdmin?: boolean;
  token?: string;
  id?: string;
};
