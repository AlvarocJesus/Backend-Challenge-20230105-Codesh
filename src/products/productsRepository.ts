import db from '../config/database';
import AppError from '../errors/AppError';

export class ProductsRepository {
  async getAllProducts(): Promise<void> {
    try {
      return await db('SELECT * FROM products');
    } catch (err: any) {
      throw new AppError(err);
    }
  }
}
