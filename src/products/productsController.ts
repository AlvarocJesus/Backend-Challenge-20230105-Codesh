import { Request, Response } from 'express';
import { ProductsService } from './productsService';

const productsService = new ProductsService();

export class ProductsController {
  async listAllProducts(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      console.log('entrou no controller');
      const products = await productsService.listAllProducts();

      return res.json({ products }).status(201);
    } catch (err) {
      console.log({ err });
    }
  }

  async deleteProduct(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      console.log('entrou no controller');
      const { code } = req.params;
      const products = await productsService.deleteProduct(code);

      return res.json({ products }).status(201);
    } catch (err) {
      console.log({ err });
    }
  }
}
