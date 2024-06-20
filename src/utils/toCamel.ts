import camelCase from 'camelcase'
import type { AnyObject } from '@/types'

export function objectToCamelCase(input: AnyObject): AnyObject {
  const result: AnyObject = {}

  for (const key in input)
    result[camelCase(key)] = input[key]

  return result
}

export function arrayToCamelCase(array: AnyObject[]) {
  return array.map(obj => objectToCamelCase(obj))
}
