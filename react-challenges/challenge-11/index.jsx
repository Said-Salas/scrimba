import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from "./Product"
import productsData from "./data"

function App() {
  const [count, setCount] = React.useState(0)
  const [sort, setSort] = React.useState(false)
  const sortedProducts = React.useMemo(() => [...productsData].sort((a, b) => a.name.localeCompare(b.name)), [productsData])
  const visibleProducts = sort ? sortedProducts : productsData

  const increment = () => setCount(prevCount => prevCount + 1)
  const decrement = () => setCount(prevCount => prevCount - 1)

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setSort(prev => !prev)}
      >
        {sort ? "Unsort" : "Sort"}
      </button>
      <br />
      <br />
      <div className="products-list">
        {
          visibleProducts.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);