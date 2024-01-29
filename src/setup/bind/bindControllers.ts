import {IQueueController} from '../../controllers/QueueController/types/IQueueController'
import {InterfaceType} from '../../constants/InterfaceType'
import {Container} from 'inversify'
import {QueueController} from '../../controllers/QueueController/QueueController'

export function bindControllers(container: Container): void {
  container.bind<IQueueController>(InterfaceType.controllers.QueueController).to(QueueController)
}