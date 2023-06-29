import { Router } from 'express';
import { Controller } from './controller';

const routes = Router();
const controller = new Controller()

// Detalhes da API, se conexão leitura e escritura com a base de dados está OK, horário da última vez que o CRON foi executado, tempo online e uso de memória.
routes.get('/');

// Será responsável por receber atualizações do Projeto Web
routes.put('/products/:code');

// Mudar o status do produto para trash
routes.delete('/products/:code');

// Obter a informação somente de um produto da base de dados
routes.get('/products/:code');

// Listar todos os produtos da base de dados, adicionar sistema de paginação para não sobrecarregar o REQUEST.
routes.get('/products', controller.listAllProducts);
