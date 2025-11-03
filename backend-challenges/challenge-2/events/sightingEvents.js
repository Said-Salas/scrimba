import { EventEmitter } from 'node:events'
import { createAlert } from '../utils/createAlert.js'

export const sightingEvents = new EventEmitter()

sightingEvents.on('sighting-added', event => {
  createAlert(event)
})
/*
Challenge 1
1. Create and export a new instance of EventEmitter called ‘sightingEvents’.
2. Register the listener function when an event called ‘sighting-added’ is detected. 
*/
 