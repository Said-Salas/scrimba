import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from './getData.js'

export async function addNewSighting(newSighting) {
  try {
    const pathJSON = path.join('data', 'data.json')
    const data = await getData()
    data.push(newSighting)

    await fs.writeFile(pathJSON, JSON.stringify(data, null, '\t'), 'utf8')

  } catch (err) {
      throw new Error(`Error: ${err}`)
  }

}
