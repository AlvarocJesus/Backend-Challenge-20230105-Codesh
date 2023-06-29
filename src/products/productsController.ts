import { Request, Response } from 'express';
import { ProductsService } from './productsService';

export class ProductsController {
  private readonly productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  async listAllProducts(req: Request, res: Response) {
    const products = await this.productsService.listAllProducts();

    return res.json(products);
  }
}
