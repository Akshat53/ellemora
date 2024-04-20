// src/types/product.types.ts
export interface Product {
    id: string;
    title: string;
    discount: number;
    description: string;
    discountedPrice: number;
    originalPrice: number;
    img: string[];
    colorsCode: string[];
    colorName: string[];
    shortDescription: string;
    length: string;
    sleeveTypes: string[];
    fit: string;
    pattern: string;
    fabric: string;
    typeOfWork: string;
    neckline: string;
    numberOfComponents: number;
    tags: string[];
    care: string;
    disclaimer: string;
    returnPolicy: string;
    components: string[];
}

export interface ProductsState {
    products: Product[];  // Ensure this property is defined
    selectedProduct?: Product;
    loading: boolean;
    error: string | null;
}


export interface ProductParams {
    limit: number;
    page: number;
}

export interface ProductPostData {
    name: string;
    description: string;
    price: number;
}