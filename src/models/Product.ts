import { calculateDiscount } from '../utils/discountCalculator.js';
import { calculateTax } from '../utils/taxCalculator.js';

export interface ProductInfo {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
}

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;

  constructor(info: ProductInfo) {
    this.id = info.id;
    this.title = info.title;
    this.description = info.description;
    this.category = info.category;
    this.price = info.price;
    this.discountPercentage = info.discountPercentage;
  }

  getPriceWithDiscount(): number {
    return this.price - calculateDiscount(this.price, this.discountPercentage);
  }
  getTax(): number {
    return calculateTax(this.getPriceWithDiscount(), this.category);
  }
  getTotal(): number {
    return this.getPriceWithDiscount() + this.getTax();
  }

  displayDetails(): void {
    console.log(`--- ${this.title} ---`);
    console.log(`Id: ${this.id}`);
    console.log(`Description: ${this.description}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: ${this.price}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Sales Tax: $${this.getTax()}`);
    console.log(`Total: $${this.getTotal()}`);
  }
}
