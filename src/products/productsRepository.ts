import db from '../config/database';
import AppError from '../errors/AppError';
import { ProductsDTO } from './ProductsDTO';

export class ProductsRepository {
  async getAllProducts(page: number, limit: number) {
    try {
      return await db(
        `
      SELECT * FROM products
      ORDER BY "products"."code"
      LIMIT $2
      OFFSET (($1 - 1) * $2);`,
        [page, limit]
      );
    } catch (err: any) {
      throw new AppError(err);
    }
  }

  async saveProduct(data: ProductsDTO): Promise<void> {
    try {
      return await db(
        'INSERT INTO products VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)',
        [
          data.code,
          data.imported_t,
          data.url,
          data.creator,
          data.created_t,
          data.last_modified_t,
          data.product_name,
          data.quantity,
          data.brands,
          data.categories,
          data.labels,
          data.cities,
          data.purchase_places,
          data.stores,
          data.ingredients_text,
          data.traces,
          data.serving_size,
          data.serving_quantity,
          data.nutriscore_score,
          data.nutriscore_grade,
          data.main_category,
          data.image_url,
        ]
      );
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
      return await db(
        'UPDATE products SET status=$2, imported_t=$3, url=$4, creator=$5, created_t=$6, last_modified_t=$7, product_name=$8, quantity=$9, brands=$10, categories=$11, labels=$12, cities=$13, purchase_places=$14, stores=$15, ingredients_text=$16, traces=$17, serving_size=$18, serving_quantity=$19, nutriscore_score=$20, nutriscore_grade=$21, main_category=$22, image_url=$23, WHERE code = $1',
        [
          code,
          data.imported_t,
          data.url,
          data.creator,
          data.created_t,
          data.last_modified_t,
          data.product_name,
          data.quantity,
          data.brands,
          data.categories,
          data.labels,
          data.cities,
          data.purchase_places,
          data.stores,
          data.ingredients_text,
          data.traces,
          data.serving_size,
          data.serving_quantity,
          data.nutriscore_score,
          data.nutriscore_grade,
          data.main_category,
          data.image_url,
        ]
      );
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
