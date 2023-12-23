export interface Product {
  id: number;
  price: number;
  salePrice: number;
  isFeatured: boolean;
  title: string;
  images: string[];
  material: string[];
  maintenance: { title: string; text: string }[];
  description: string;
  quantity: number;
  category: string;
  type: string;
  date: string;
  weight: string;
  dimensions: string;
  isDiscounting: boolean;
  isFavorite: boolean;
  isAddedToCard: boolean;
}

export interface ClientComment {
  id: number;
  name: string;
  country: string;
  text: string;
}
