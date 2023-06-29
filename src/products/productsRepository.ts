import db from '../config/database';

export class ProductsRepository {
  constructor() {}

  async getAllProducts() {
    return await db('SELECT * FROM products');
  }
}
