import { Response, Router, Request } from 'express';

const routes = Router();

routes.get('/api', (req: Request, res: Response) => {
  return res.json({ message: 'Hello World!' });
});

export default routes;
