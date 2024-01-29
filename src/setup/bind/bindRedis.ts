import {Container} from 'inversify'
import {RedisOptions} from 'ioredis'
import {default as Redis} from 'ioredis/built/Redis'

export async function bindRedis(container: Container, interfaceType: symbol, redisOptions: RedisOptions): Promise<void> {
  const redis = new Redis(redisOptions)
  await new Promise((resolve) => {
    redis.on('ready', () => {
      resolve(null)
    })
  })
  container.bind<Redis>(interfaceType).toConstantValue(redis)
}
