import { Link } from 'react-router-dom'
import nightVan from '../assets/nightVan.png'

export default function About() {
  return (
    <main className='about-section'>
      <img src={nightVan} alt='Van in the night'/>
      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
      <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
      <br/>
      (Hitch costs extra 😉)
      </p>
      <br/>
      <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      <section>
        <h2>Your destination is waiting.</h2>
        <h2>Your van is ready.</h2>
        <Link to='/vans'>Explore our vans</Link>
      </section>
    </main>
  )
}