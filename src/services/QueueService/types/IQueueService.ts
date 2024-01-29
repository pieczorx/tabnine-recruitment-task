export interface IQueueService {
  addQueueMessage(queueName: string, message: unknown): Promise<void>
  getNextMessage(queueName: string, timeout: number): Promise<unknown>
}