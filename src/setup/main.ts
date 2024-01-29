import 'reflect-metadata'

import {setupServer} from './setupServer/setupServer'
import {setupContainer} from './setupContainer/setupContainer'
import {runPreSetupTasks} from './runPreSetupTasks'

async function setup() {
  await runPreSetupTasks()
  const container = await setupContainer()
  setupServer(container)
}


setup().then(() => {
  console.log('Setup complete')
}).catch((error) => {
  console.error('Setup failed', error)
})