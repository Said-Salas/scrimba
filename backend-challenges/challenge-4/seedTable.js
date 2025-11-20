import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'
import { vinyl } from './data.js'

const seedTable = async () => {
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    try {   

        console.log('All records inserted successfully')
    } catch (err) {

        console.error('Error inserting data: ', err.message)
    } finally {
        await db.close()
        console.log("Database connection closed")
    }
}

seedTable()
