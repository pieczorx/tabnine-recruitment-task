import {InterfaceType} from '../../constants/InterfaceType'
import {Container} from 'inversify'
import {RedisOptions} from 'ioredis'

export function bindConstants(container: Container): void {
  container.bind<string>(InterfaceType.constants.ApiPath).toConstantValue('/api')
  container.bind<string>(InterfaceType.constants.RedisHost).toConstantValue(process.env.REDIS_HOST)
  container.bind<number>(InterfaceType.constants.RedisPort).toConstantValue(Number(process.env.REDIS_PORT))
  container.bind<string>(InterfaceType.constants.RedisPassword).toConstantValue(process.env.REDIS_PASSWORD)
  container.bind<string>(InterfaceType.constants.RedisUsername).toConstantValue(process.env.REDIS_USERNAME)
  container.bind<RedisOptions>(InterfaceType.constants.RedisConnectionOptions).toConstantValue({
    host: container.get<string>(InterfaceType.constants.RedisHost),
    port: container.get<number>(InterfaceType.constants.RedisPort),
    password: container.get<string>(InterfaceType.constants.RedisPassword),
    username: container.get<string>(InterfaceType.constants.RedisUsername),
  })
}