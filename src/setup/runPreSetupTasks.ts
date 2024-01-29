import dotEnvExtended from 'dotenv-extended'

export async function runPreSetupTasks(): Promise<void> {
  dotEnvExtended.load()
}
