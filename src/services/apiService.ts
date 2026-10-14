import type { ProductInfo } from "../models/Product.js";
import { ApiError, NetworkError} from "../utils/errorHandler.js"


const SITE_URL = "https://dummyjson.com/products";

const getData = async (url: string): Promise<any> => {
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new NetworkError('Network did not respond');
    }
    const data = await response.json();

    if (!data) {
      throw new ApiError("API could not fetch products!")
    }
    return data;
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error("Network Error:", error)
    } else if (error instanceof ApiError) {
      console.error("Api Error:", error)
    } else if (error instanceof Error) {
      console.error("Unknown Error:", error)
    }
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


