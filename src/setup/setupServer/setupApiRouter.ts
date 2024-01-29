import {Container} from 'inversify'
import express, {Router} from 'express'
import {setupQueueApiRoutes} from './apiRoutes/setupQueueApiRoutes'
import ExpressPromiseRouter from 'express-promise-router'

export function setupApiRouter(container: Container): Router {
  const router = ExpressPromiseRouter()

  router.use(express.json())
  setupQueueApiRoutes(container, router)

  return router
}