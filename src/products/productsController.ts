import { ProductsService } from "./productsService";

export class ProductsController {
  private readonly productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  async listAllProducts() {
    return await this.productsService.listAllProducts()
  }
}