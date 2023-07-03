import AppError from '../errors/AppError';
import { ProductsDTO } from './ProductsDTO';
import { ProductsRepository } from './productsRepository';

const productsRepository = new ProductsRepository();
export class ProductsService {
  async listAllProducts(page: number, limit: number) {
    try {
      return await productsRepository.getAllProducts(page, limit);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }

  async listProduct(code: string) {
    try {
      return await productsRepository.getProduct(code);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }

  async updateProduct(code: string, data: ProductsDTO) {
    try {
      return await productsRepository.updateProduct(code, data);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }

  async deleteProduct(code: string) {
    try {
      return await productsRepository.removeProducts(code);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }
}
