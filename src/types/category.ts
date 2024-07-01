import { AdvertType } from "./advert";

export type CreateCategoryDto = {
  name: string;
};

export type CategoryType = {
  id?: number;
  name?: string;
  createdAt?: string;
  posts?: AdvertType[];
};
