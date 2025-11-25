import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

export const getConnection = async () => {
    const dbPath = path.join('database.db')
    return open({
        filename: dbPath,
        driver: sqlite3.Database
    })
}