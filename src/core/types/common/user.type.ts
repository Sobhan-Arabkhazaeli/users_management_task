type TUser = {
  id: number ;
  name: string;
  createdAt: string;
  avatar: string;
  isFavorite: boolean;
};

export type TUserDetails = Partial<TUser> ;
