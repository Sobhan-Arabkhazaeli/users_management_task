type TUser = {
  id: number | string;
  name: string;
  createdAt: string;
  avatar: string;
  isFavorite: boolean;
};

export type TUserDetails = Partial<TUser> ;
