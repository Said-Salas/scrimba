import { getConnection } from '../db/db.js'

export async function getGenres(req, res) {

  try {
	const db = await getConnection()
    const rows = await getConnection().all("SELECT DISTINCT genre FROM products")
    const genres = rows.map(row => row.genre)
    res.json(genres)
  } catch (err) {
      res.status(500).json({error: 'Failed to fetch genres', details: err.message})
  }
}

export async function getProducts() {
  console.log('products')
}