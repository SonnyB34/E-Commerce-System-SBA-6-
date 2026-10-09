import type { ProductInfo } from "../models/Product.js";

const SITE_URL = "https://dummyjson.com/products";

const getData = async (url: string): Promise<any> => {
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network did not respond');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

export const fetchProductData = async (limit = 10): Promise<ProductInfo[]> => {
  try {
    const productData = await getData(`${SITE_URL}?limit=${limit}`)

    if(!Array.isArray(productData.products)) {
      throw new Error("Expecting an array of products");
    }
    return productData.products;
  } catch (error) {
    console.error("fetching product data failed");
    throw error;
  }
}


