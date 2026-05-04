import { Promotion } from "@/types/product.types"

export const calculateFinalPrice = (price: number, promotion: Promotion | null): number => {
    if (!promotion) return price;
    return Number(((100 - promotion.percentage) / 100 * price).toFixed(2));
}