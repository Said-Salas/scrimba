import markerIcon from '../assets/marker.svg'

export const Entry = props => {
    const {img, title, country, maps, dates, text} =  props
    return (
        <>
            <article>
                <div className='loc-image-container'>
                    <img src={img.src} alt={img.alt}/>
                </div>
                <div>
                    <div className='loc-title'>
                        <img src={markerIcon} alt='Marker icon' className='marker-icon'/>
                        <span>{country}</span>
                        <a href={maps}>View on Google Maps</a>
                    </div>
                    <h2>{title}</h2>
                    <p className='trip-dates'>{dates}</p>
                    <p>{text}</p>
                </div>
                
            </article>
            <hr />
        </>
    )
}