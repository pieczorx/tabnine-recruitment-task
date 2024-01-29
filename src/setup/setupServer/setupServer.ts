import express from 'express';
import {Container} from 'inversify'
import {setupApiRouter} from './setupApiRouter'
import {setupRouter} from './setupRouter'

export function setupServer(container: Container) {
  const app = express();

  const router = setupRouter(container);
  app.use(router)

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Queue server listening on port ${port}!`);
  });
}
