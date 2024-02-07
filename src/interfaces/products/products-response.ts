// Generated by https://quicktype.io

export interface IProductsResponse {
    products: ISimpleProduct[];
}

export interface ISimpleProduct {
    id:          number;
    name:        string;
    description: string;
    stock:       number;
    slug:        string;
    price:       number;
    image:       string;
    category:    Category;
    createdAt:   string;
}

interface Category {
    id:         number;
    name:       string;
    slug:       string;
    created_at: string;
    updated_at: string;
}
