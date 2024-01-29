import {Container} from 'inversify'
import {Router} from 'express'
import ExpressPromiseRouter from 'express-promise-router'
import {InterfaceType} from '../../constants/InterfaceType'
import {setupApiRouter} from './setupApiRouter'

export function setupRouter(container: Container): Router {
  const router = ExpressPromiseRouter()

  const apiRouter = setupApiRouter(container)
  const apiPath = container.get<string>(InterfaceType.constants.ApiPath)
  router.use(apiPath, apiRouter)

  return router
}