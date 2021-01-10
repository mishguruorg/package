const TS_NODE_PATH = require.resolve('../shim/ts-node')

type Config = {
  verbose: boolean,
  require: string[],
  extensions: string[],
}

const getConfig = async (): Promise<Config> => {
  return {
    verbose: true,
    require: [TS_NODE_PATH],
    extensions: ['ts'],
  }
}

export default getConfig
