import db from '../config/database';
import AppError from '../errors/AppError';
import { ProductsDTO } from './ProductsDTO';

export class ProductsRepository {
  async getAllProducts(): Promise<void> {
    try {
      return await db('SELECT * FROM products');
    } catch (err: any) {
      throw new AppError(err);
    }
  }

  async getProduct(code: string): Promise<void> {
    try {
      return await db('SELECT * FROM products WHERE code = $1', [code]);
    } catch (err: any) {
      throw new AppError(err);
    }
  }

  async updateProduct(code: string, data: ProductsDTO): Promise<void> {
    try {
      return await db('UPDATE products SET status = trash WHERE code = $1', [
        code,
      ]);
    } catch (err: any) {
      throw new AppError(err);
    }
  }

  async removeProducts(code: string): Promise<void> {
    try {
      return await db('UPDATE products SET status = trash WHERE code = $1', [
        code,
      ]);
    } catch (err: any) {
      throw new AppError(err);
    }
  }
}
