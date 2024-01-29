export const InterfaceType = {
  controllers: {
    QueueController: Symbol.for('QueueController'),
  },
  services: {
    QueueService: Symbol.for('QueueService'),
  },
  constants: {
    ApiPath: Symbol.for('ApiPath'),
    RedisClient: Symbol.for('RedisClient'),
    RedisConnectionOptions: Symbol.for('RedisConnectionOptions'),
    RedisHost: Symbol.for('RedisHost'),
    RedisPort: Symbol.for('RedisPort'),
    RedisPassword: Symbol.for('RedisPassword'),
    RedisUsername: Symbol.for('RedisUsername'),
  }
}