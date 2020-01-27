import AsyncStorage from '@react-native-community/async-storage'
import { to } from 'await-to-js'

const keys = {}

async function storeData(key: string, value: any): Promise<any> {
  const [err, oldValue] = await to(StorageAsync.getData(key))

  const hasChanged = oldValue !== value

  if (hasChanged) store(key, value)

  return hasChanged
}

async function removeData(key: string) {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    throw Error('Unable to remove value with key: ' + key)
  }
}

async function getData(key: string): Promise<any> {
  const [err, item] = await to(AsyncStorage.getItem(key))
  if (item !== null) {
    if (__DEV__) console.log('AsyncStorage READ: ', key, ', with value: ', JSON.parse(item))
    return JSON.parse(item)
  } else {
    throw Error('Unable to get value with key: ' + key)
  }
}

async function store(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    if (__DEV__) console.log('AsyncStorage WRITE: ', key, ', with value: ', JSON.parse(value))
  } catch (e) {
    throw Error('Unable to store value with key: ' + key)
  }
}

const StorageAsync = { getData, removeData, storeData, keys }

export default StorageAsync
