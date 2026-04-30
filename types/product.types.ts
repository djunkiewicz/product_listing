import { Image } from "@/types/shared.types";

export interface Product  {
    articleNumber: string;
    gtin: string;
    url: string;
    image: Image;
    title: string;
    description: string;
    brandName: string;
    brandLogo: string;
    price: number;
    promotion: Promotion | null
}

export interface Promotion {
    name: string;
    percentage: number;
}