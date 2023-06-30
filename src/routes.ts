import { Response, Router, Request } from 'express';
import { ProductsController } from './products/productsController';

const routes = Router();
const productsController = new ProductsController();

// Detalhes da API, se conexão leitura e escritura com a base de dados está OK, horário da última vez que o CRON foi executado, tempo online e uso de memória.
routes.get('/', productsController.statsSystem);

// Listar todos os produtos da base de dados, adicionar sistema de paginação para não sobrecarregar o REQUEST.
routes.get('/products', productsController.listAllProducts);

// Será responsável por receber atualizações do Projeto Web
routes.put('/products/:code');

// Mudar o status do produto para trash
routes.delete('/products/:code', productsController.deleteProduct);

// Obter a informação somente de um produto da base de dados
routes.get('/products/:code', productsController.listProduct);

export default routes;
