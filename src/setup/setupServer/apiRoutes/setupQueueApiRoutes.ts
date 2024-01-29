import {Container} from 'inversify'
import {Router} from 'express'
import {IQueueController} from '../../../controllers/QueueController/types/IQueueController'
import {InterfaceType} from '../../../constants/InterfaceType'
import {ApiRouterParamType} from '../../../enum/ApiRouterParamType'

export function setupQueueApiRoutes(container: Container, router: Router): void {
  const queueController = container.get<IQueueController>(InterfaceType.controllers.QueueController)
  router.post(`/queue/:${ApiRouterParamType.QueueName}`, queueController.createMessage.bind(queueController))
  router.get(`/queue/:${ApiRouterParamType.QueueName}`, queueController.getNextMessage.bind(queueController))
}
