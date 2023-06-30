import { ProductsService } from "../src/products/productsService";

describe('Products Controller', () => {
  const productsService = new ProductsService();

  describe('(GET) /mangas', () => {
    it('should return successfully when created mangas in list user', async () => {
      const manga = { nome: 'Titulo teste' };

      const { body: mangaSaved } = await productsService
        .createManga(manga)
        .expect(201);

      expect(mangaSaved).toEqual(expect.ObjectContaining(manga));
    });
  });
});
