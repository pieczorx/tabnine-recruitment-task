import {inject, injectable} from 'inversify'
import {InterfaceType} from '../../constants/InterfaceType'
import {IQueueService} from '../../services/QueueService/types/IQueueService'
import {Request, Response} from 'express'
import {IQueueController} from './types/IQueueController'
import {ApiRouterParamType} from '../../enum/ApiRouterParamType'

@injectable()
export class QueueController implements IQueueController {
  constructor(
    @inject(InterfaceType.services.QueueService) private queueService: IQueueService
  ) {
  }

  async createMessage(req: Request, res: Response): Promise<boolean> {
    const queueName = req.params[ApiRouterParamType.QueueName]
    const message = req.body.message
    if(!message) {
      res.status(400).json({
        success: false,
        errorMessage: 'Message is required'
      })
      return false
    }
    await this.queueService.addQueueMessage(queueName, message)
    res.status(200).json({
      success: true,
    })
    return true
  }

  async getNextMessage(req: Request, res: Response): Promise<boolean> {
    const queueName = req.params[ApiRouterParamType.QueueName]
    const timeoutInSeconds = req.query.timeout ? Number(req.query.timeout) : 10
    try {
      const message = await this.queueService.getNextMessage(queueName, timeoutInSeconds * 1000)
      res.status(200).json({
        success: true,
        message
      })
      return true
    } catch(error) {
      res.status(204).json({
        success: false,
        errorMessage: error.message
      })
    }
    return false
  }
}