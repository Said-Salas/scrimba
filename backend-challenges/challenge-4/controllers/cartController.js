import { getDBConnection } from '../db/db.js'

export async function addToCart(req, res) {
  try {
      if (req.session.userId){
          const db = await getDBConnection()
          const row = await db.get('SELECT id, quantity FROM cart_items WHERE product_id = ? AND user_id = ?', [req.body.productId, req.session.userId])
          if (row) {
              await db.run('UPDATE cart_items SET quantity = ? WHERE id = ?', [row.quantity + 1, row.id])
              return res.json({message: 'Added to cart.'})
          }

          await db.run('INSERT INTO cart_items (user_id, product_id) VALUES (?, ?)', [req.session.userId, req.body.productId])
          res.json({message: 'Added to cart.'})
      }
  } catch (err) {
        res.status(500).json({error: 'Failed to add to cart', details: err.message})
  }

}
