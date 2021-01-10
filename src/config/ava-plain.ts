import { TESTS_NAME } from '../shared/constants'

type Config = {
  verbose: true,
  files: string[],
}

const getConfig = async (): Promise<Config> => {
  return {
    verbose: true,
    files: [TESTS_NAME],
  }
}

export default getConfig
