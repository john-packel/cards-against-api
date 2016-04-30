import { Router } from 'express';
const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.send('Hello from apiRouter');
});

export default apiRouter;
