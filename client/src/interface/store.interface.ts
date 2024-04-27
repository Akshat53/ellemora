export interface Action {
  type: string;
  data: object;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  parentCategory: string | null;
  level: number;
  isActive: boolean;
  softDelete: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}