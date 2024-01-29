import {inject, injectable} from 'inversify'
import {InterfaceType} from '../../constants/InterfaceType'
import {IQueueService} from './types/IQueueService'
import {default as Redis} from 'ioredis/built/Redis'

@injectable()
export class QueueService implements IQueueService {
  constructor(
    @inject(InterfaceType.constants.RedisClient) private redisClient: Redis,
    // @inject(InterfaceType.constants.SocketIoClient) private socketIoClient: ,
  ) {

  }

  async addQueueMessage(queueName: string, message: unknown): Promise<void> {
    await this.redisClient.rpush(queueName, JSON.stringify(message))
    // TODO: Implement socket.io for cross server communication
    // Notify other servers about the new message
    // this.socketIoClient.emit('messageAdded', {
    //   queueName,
    //   message
    // });
  }

  async getNextMessage(queueName: string, timeout: number): Promise<unknown> {
    const [,message] = await this.redisClient.blpop('queue', timeout)
    return JSON.parse(message)
  }
}