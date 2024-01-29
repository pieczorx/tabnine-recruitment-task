import {Request, Response} from 'express'

export interface IQueueController {
  createMessage(req: Request, res: Response): Promise<boolean>
  getNextMessage(req: Request, res: Response): Promise<boolean>
}