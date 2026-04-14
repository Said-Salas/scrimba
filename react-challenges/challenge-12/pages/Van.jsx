import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import arrow from '../assets/arrow.svg'

export default function Van() {
    const { id } = useParams()
    const [van, setVan] = React.useState(null)
    
    React.useEffect(() => {
        async function fetchVan () {
            const response = await fetch(`/api/vans/${id}`)
            const data = await response.json()
            setVan(data.vans)
        }
        fetchVan()
    }, [id])
    
    if (!van) return <h2 className='loading'>Loading...</h2>
    
    return (
        <>
            <div className='van-header'>
                <Link to='/vans' className='arrow-btn'><img src={arrow}/></Link>
                <Link className='btn-c-four' to='/vans'>Back to all vans</Link>
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
            <button className='btn-c-five'>Rent this van</button>
        </>
    )
}