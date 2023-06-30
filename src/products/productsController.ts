import { Request, Response } from 'express';
import { ProductsService } from './productsService';
import fs from 'fs';
import process from 'process';
import AppError from '../errors/AppError';

const productsService = new ProductsService();

export class ProductsController {
  async statsSystem() {
    // ultima execucao do cron
    fs.readFileSync('../../logs.txt');
    // Uso da memoria e tempo em pe
    console.log(process.memoryUsage());
    console.log(new Date(process.uptime()));
  }

  async listAllProducts(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      console.log('entrou no controller');
      const products = await productsService.listAllProducts();

      return res.json({ products }).status(201);
    } catch (err: any) {
      throw new AppError(err.message);
    }
  }

  async listProduct(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      console.log('entrou no controller');
      const { code } = req.params;
      const products = await productsService.listProduct(code);

      return res.json({ products }).status(201);
    } catch (err: any) {
      throw new AppError(err.message);
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
    } catch (err: any) {
      throw new AppError(err.message);
    }
  }
}
