import { isTrue } from './isTrue.js'

export const boolMatch = (dataBool, queryBool) => dataBool === isTrue(queryBool)
