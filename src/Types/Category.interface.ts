export interface RootObject {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}

export interface Product {
    availabilityStatus: AvailabilityStatus;
    brand: string;
    category: Category;
    description: string;
    dimensions: Dimensions;
    discountPercentage: number;
    id: number;
    images: string[];
    meta: Meta;
    minimumOrderQuantity: number;
    price: number;
    rating: number;
    returnPolicy: string;
    reviews: Review[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    title: string;
    warrantyInformation: string;
    weight: number;
}

export enum AvailabilityStatus {
    InStock = "In Stock",
    OutOfStock = "Out of Stock",
}

export enum Category {
    Smartphones = "smartphones",
}

export interface Dimensions {
    depth: number;
    height: number;
    width: number;
}

export interface Meta {
    barcode: string;
    createdAt: Date;
    qrCode: string;
    updatedAt: Date;
}

export interface Review {
    comment: string;
    date: Date;
    rating: number;
    reviewerEmail: string;
    reviewerName: string;
}
