import { Response, Router, Request } from 'express';
import productsRoutes from './products/productsRoutes';

const routes = Router();

routes.use(productsRoutes);

routes.get('/api', (req: Request, res: Response) => {
  return res.json({ message: 'Hello World!' });
});

export default routes;
