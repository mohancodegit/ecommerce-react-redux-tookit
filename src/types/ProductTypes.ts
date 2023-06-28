export type ProductType = {
    id: number;
    title: string;
    price: number;
    description?: string;
    category?: string;
    image: string;
    rating?: { rate: number; count: number };
  };
  
  export type ProductState = {
    loading: boolean;
    data: ProductType[];
    error: boolean;
    errorMessage: string;
  };
  