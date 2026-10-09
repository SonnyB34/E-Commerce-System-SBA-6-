export const calculateDiscount = (price: number, discountPercent: number): number => {
    const amount = price * (discountPercent / 100);
    return Math.round(amount * 100) / 100;
};