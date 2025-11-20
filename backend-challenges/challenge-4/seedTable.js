import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { vinyl } from './data.js'

async function seedTable() {
 
  const db = await open({
    filename: path.join('database.db'),
    driver: sqlite3.Database
  })

  db.serialize(() => {
    const insert = db.prepare('INSERT INTO products (title, artist, price, image, year, genre, stock) VALUES (?, ?, ?, ?, ?, ?, ?)'
    )

    try {
        db.run('BEGIN TRANSACTION')
        for (const record of vinyl) {
          insert.run([record.title, record.artist, record.price, record.image, record.year, record.genre])
        }
    } catch (err) {

    }
  })

  try {
    //
    console.log('All records inserted successfully.')
  } catch (err) {
    //
    console.error('Error inserting data:', err.message)
  } finally {
    await db.close()
    console.log('Database connection closed.')
  }
}

seedTable()