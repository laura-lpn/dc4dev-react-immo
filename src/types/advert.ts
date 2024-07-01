import { CategoryType } from "./category";

export type CreateAdvertDto = {
  title: string;
  description: string;
  price: number;
  nb_rooms: number;
  surface: number;
  category: CategoryType;
};

export type AdvertType = {
  id?: number;
  price?: number;
  title?: string;
  description?: string;
  createdAt?: string;
  nb_rooms?: number;
  surface?: number;
  category?: CategoryType;
};
