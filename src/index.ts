import { Product } from "./models/Product.js";
import type { ProductInfo } from "./models/Product.js";
import { fetchProductData } from "./services/apiService.js";

const generateProduct = (info: ProductInfo): Product => {
    return new Product(info);
}

const generate = async () => {
    try {
        const productInfo = await fetchProductData(10);
        const products = productInfo.map(generateProduct);

        products.forEach((p) => {
            p.displayDetails();
            console.log("");
        });
    } catch (error) {
        console.error(error);
    }
}

generate();