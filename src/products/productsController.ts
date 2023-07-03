import { Request, Response } from 'express';
import { ProductsService } from './productsService';
import fs from 'fs';
import process from 'process';
import AppError from '../errors/AppError';
import { databaseStatus } from '../config/database';

const productsService = new ProductsService();

export class ProductsController {
  async statsSystem() {
    // ultima execucao do cron
    const lastCronExecute = fs.readFileSync('./logs.txt').toString();

    const dataSystem = {
      databaseStatus,
      lastCronExecute,
      // Uso da memoria e tempo em pe
      memoryUsage: process.memoryUsage(),
      uptime: new Date(process.uptime()),
    };

    return dataSystem;
  }

  async listAllProducts(req: Request, res: Response) {
    try {
      const { page, limit } = req.params;

      const products = await productsService.listAllProducts(parseInt(page), parseInt(limit));

      return res.json({ products }).status(201);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }

  async listProduct(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const { code } = req.params;
      const products = await productsService.listProduct(code);

      return res.json({ products }).status(201);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }

  async updateProduct(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const { code } = req.params;
      const data = req.body;
      const products = await productsService.updateProduct(code, data);

      return res.json({ products }).status(201);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }

  async deleteProduct(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const { code } = req.params;
      const products = await productsService.deleteProduct(code);

      return res.json({ products }).status(201);
    } catch (err: any) {
      throw new AppError(err.message, err.status);
    }
  }
}
