import AppError from '../errors/AppError';
import { ProductsRepository } from './productsRepository';

const productsRepository = new ProductsRepository();
export class ProductsService {
  async listAllProducts(): Promise<void>  {
    try {
      return await productsRepository.getAllProducts()
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }
}
