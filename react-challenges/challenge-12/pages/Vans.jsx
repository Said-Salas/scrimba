import React from "react"
import { Link } from 'react-router-dom'

export default function Vans() {
    const [vans, setVans] = React.useState(null)
    const [filter, setFilter] = React.useState(null)
    const [status, setStatus] = React.useState('loading')

    React.useEffect(() => {
        async function fetchData () {
            setStatus('loading')

            try {   
                const response = await fetch(`/api/vans`)
                if (!response.ok) {
                    setStatus('error')
                    return
                }

                const data = await response.json()
                const vansData = data.van ?? data.vans ?? null

                if(!vansData) {
                    setStatus('error')
                    return
                }

                setVans(vansData)
                setStatus('ready')
            } catch {
                setStatus('error')
            }
        }

        fetchData()
    }, [])

    if (status === 'loading') {
        return (
            <main className="loading-container">
                <h2 className='message'>Loading...</h2>
            </main>
        )
    }

    if (status === 'error') {
        return (
            <main className="loading-container">
                <h2 className='message'>Couldn't get the data for this page.</h2>
            </main>
        )
    }
    
   const displayedVans = filter && vans ? vans.filter(van => van.type === filter) : vans
   const vansCards = vans ? displayedVans.map(van => (
                    <div className='van-card' key={van.id}>
                        <Link to={`/vans/${van.id}`}><img src={van.imageUrl} alt={van.name}/></Link>
                        <div>
                            <div className='name-tag'>
                                <h2>{van.name}</h2>
                                <button className={`${van.type}`}>
                                    {van.type[0].toUpperCase() + van.type.slice(1)}
                                </button>
                            </div>
                            <div className='price'>
                                <h2>${van.price}</h2>
                                <p>/day</p>
                            </div>
                        </div>
                    </div>
                )) : null
                
    if (!vans) {
        return (
            <main className="loading-container">
                <h2 className='loading'>Loading...</h2>
            </main>
        )
    }
                
    return (
        <main className='vans-section'>
            <h1>Explore our van options</h1>
            <section>
                <div>
                    <div>
                        <button 
                            
                            className={`btn-c-four simpleTwo ${filter === 'simple' ? 'active' : ''}`} 
                            onClick={() => setFilter('simple')}
                        >
                            Simple
                        </button>
                        <button 
                            className={`btn-c-four luxuryTwo ${filter === 'luxury' ? 'active' : ''}`} 
                            onClick={() => setFilter('luxury')}
                        >
                            Luxury
                        </button>
                        <button 
                            className={`btn-c-four ruggedTwo ${filter === 'rugged' ? 'active' : ''}`} 
                            onClick={() => setFilter('rugged')}
                        >
                            Rugged
                        </button>
                    </div>
                    <button 
                        className='btn-c-three'
                        onClick={() => setFilter(null)}
                    >
                        Clear filters
                    </button>
                </div>
            </section>
            <section className='vans-container'>
                {vansCards}
            </section>
        </main>
    )
}
