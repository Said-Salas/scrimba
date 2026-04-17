import React from "react"
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {
    const [vans, setVans] = React.useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [status, setStatus] = React.useState('loading')

    const type = searchParams.get('type')
    const modifyURLParams = (key, value) => {
        setSearchParams(prevParams => {
            if (!value) prevParams.delete(key)
            else prevParams.set(key, value) 
            return prevParams
        })
    }

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
    
   const displayedVans = type ? vans.filter(van => van.type === type) : vans
   const vansCards = vans ? displayedVans.map(van => (
                    <div className='van-card' key={van.id}>
                        <Link 
                            to={van.id}
                            aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
                        >
                            <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                        </Link>
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
                            
                            className={`btn-c-four simpleTwo ${type === 'simple' ? 'active' : ''}`} 
                            onClick={() => modifyURLParams('type', 'simple')}
                        >
                            Simple
                        </button>
                        <button 
                            className={`btn-c-four luxuryTwo ${type === 'luxury' ? 'active' : ''}`} 
                            onClick={() => modifyURLParams('type', 'luxury')}
                        >
                            Luxury
                        </button>
                        <button 
                            className={`btn-c-four ruggedTwo ${type === 'rugged' ? 'active' : ''}`} 
                            onClick={() => modifyURLParams('type', 'rugged')}
                        >
                            Rugged
                        </button>
                    </div>
                    {type && <button 
                        className='btn-c-three'
                        onClick={() => modifyURLParams('type', null)}
                    >
                        Clear filters
                    </button> }
                </div>
            </section>
            <section className='vans-container'>
                {vansCards}
            </section>
        </main>
    )
}
