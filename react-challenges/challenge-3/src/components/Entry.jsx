import markerIcon from '../assets/marker.svg'

export const Entry = () => {
    return (
        <article>
            <img src='https://scrimba.com/links/travel-journal-japan-image-url'/>
            <div>
                <div className='loc-title'>
                    <img src={markerIcon} alt='Marker icon' className='marker-icon'/>
                    <h4>JAPAN</h4>
                    <a href='https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9'>View on Google Maps</a>
                </div>
                <h1>Mount Fuji</h1>
                <h3>12 Jan, 2023 - 24 Jan, 2023</h3>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is 
                    the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}