import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import arrow from '../assets/arrow.svg'

export default function Van() {
    const { id } = useParams()
    const [van, setVan] = React.useState(null)
    const [status, setStatus] = React.useState('loading')
    
    React.useEffect(() => {
        async function fetchVan () {
            setStatus('loading')

            try {   
                const response = await fetch(`/api/vans/${id}`)
                if (!response.ok) {
                    setStatus('error')
                    return
                }

                const data = await response.json()
                const vanData = data.van ?? data.vans ?? null

                if(!vanData) {
                    setStatus('error')
                    return
                }

                setVan(vanData)
                setStatus('ready')
            } catch {
                setStatus('error')
            }
        }

        fetchVan()
    }, [id])
    
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
    
    return (
        <>
            <div className='van-header'>
                &larr;
                <Link className='btn-c-five' to='/vans'>Back to all vans</Link>
            </div>
            <main className='van-section'>
                <img src={van.imageUrl}/>
                <button className={`${van.type}`}>
                    {van.type[0].toUpperCase() + van.type.slice(1)}
                </button>
                <h2>{van.name}</h2>
                <h2 className='van-price'>${van.price}<p>/day</p></h2>
                <p>{van.description}</p>
            </main>
            <Link className='btn-c-one'>Rent this van</Link>
        </>
    )
}