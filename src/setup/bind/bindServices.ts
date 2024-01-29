import {IQueueController} from '../../controllers/QueueController/types/IQueueController'
import {InterfaceType} from '../../constants/InterfaceType'
import {Container} from 'inversify'
import {QueueController} from '../../controllers/QueueController/QueueController'
import {QueueService} from '../../services/QueueService/QueueService'
import {IQueueService} from '../../services/QueueService/types/IQueueService'

export function bindServices(container: Container): void {
  container.bind<IQueueService>(InterfaceType.services.QueueService).to(QueueService).inSingletonScope()
}