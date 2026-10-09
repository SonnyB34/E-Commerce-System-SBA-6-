

export const getTaxRate = (category: string): number => {
    let defaultTax: number  = 4.75;
    let groceryTax: number = 3;
    return category.toLowerCase() === "groceries" ? groceryTax : defaultTax;
}

export const calculateTax = (price: number, category: string): number => {
    const amount: number = price * (getTaxRate(category) / 100);
    return Math.round(amount * 100) / 100;
};