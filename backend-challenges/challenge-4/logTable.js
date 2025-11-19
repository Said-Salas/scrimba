import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

const viewAllProducts = (async ()=> {
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    try {
        const products = await db.all('SELECT * FROM products')
    } catch (err) {

    } finally {

    }
})

