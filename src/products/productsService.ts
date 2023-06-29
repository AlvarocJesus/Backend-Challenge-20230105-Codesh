import AppError from '../errors/AppError';
import { ProductsRepository } from './productsRepository';

const productsRepository = new ProductsRepository();
export class ProductsService {
  async listAllProducts(): Promise<void> {
    try {
      return await productsRepository.getAllProducts();
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }

  async listProduct(code: string): Promise<void> {
    try {
      return await productsRepository.getProduct(code);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }

  async deleteProduct(code: string): Promise<void> {
    try {
      return await productsRepository.removeProducts(code);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }
}
