import markerIcon from '../assets/marker.svg'

export const Entry = () => {
    return (
        <article>
            <div className='loc-image-container'>
                <img src='https://scrimba.com/links/travel-journal-japan-image-url' alt='Japan image'/>
            </div>
            <div>
                <div className='loc-title'>
                    <img src={markerIcon} alt='Marker icon' className='marker-icon'/>
                    <span>JAPAN</span>
                    <a href='https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9'>View on Google Maps</a>
                </div>
                <h2>Mount Fuji</h2>
                <p className='trip-dates'>12 Jan, 2023 - 24 Jan, 2023</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is 
                    the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </article>
    )
}