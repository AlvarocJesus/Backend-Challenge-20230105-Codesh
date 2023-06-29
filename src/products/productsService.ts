import { ProductsRepository } from "./productsRepository";

export class ProductsService {
  private readonly productsRepository: ProductsRepository;

  constructor() {
    this.productsRepository = new ProductsRepository();
  }

  async listAllProducts() {
    return await this.productsRepository.getAllProducts()
  }
}