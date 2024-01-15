import { appDirectoryName } from '@shared/constants'
import { homedir } from 'os'

export function getRootDir() {
  return `${homedir()}/${appDirectoryName}`
}
