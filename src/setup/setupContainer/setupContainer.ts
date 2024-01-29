import {Container} from 'inversify'
import {bindControllers} from '../bind/bindControllers'
import {bindServices} from '../bind/bindServices'
import {bindConstants} from '../bind/bindConstants'
import {bindRedis} from '../bind/bindRedis'
import {InterfaceType} from '../../constants/InterfaceType'
import {RedisOptions} from 'ioredis'

export async function setupContainer(): Promise<Container> {
  const container: Container = new Container()

  bindControllers(container)
  bindServices(container)
  bindConstants(container)
  await bindRedis(
    container,
    InterfaceType.constants.RedisClient,
    container.get<RedisOptions>(InterfaceType.constants.RedisConnectionOptions)
  )

  return container
}
