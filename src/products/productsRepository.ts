import db from '../config/database';

export class ProductsRepository {
  async getAllProducts() {
    return await db('SELECT * FROM products');
  }
}
