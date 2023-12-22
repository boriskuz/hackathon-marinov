export interface Product {
  id: number;
  price: number;
  title: string;
  images: string[];
  material: string[];
  maintenance: { title: string; text: string }[];
  description: string;
  quantity: number;
  category: string;
  type: string;
  isNew: boolean;
  date: string;
  weight: number;
  dimensions: string;
  isDiscounting: boolean;
  isFavorite: boolean;
  isAddedToCard: boolean;
}
