export interface ProductInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
}

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;

  constructor(info: ProductInfo) {
    this.id = info.id;
    this.title = info.title;
    this.description = info.description;
    this.category = info.category;
    this.price = info.price;
    this.discountPercentage = info.discountPercentage;
    this.rating = info.rating;
    this.stock = info.stock;
    this.brand = info.brand;
    this.thumbnail = info.thumbnail;
  }
}
