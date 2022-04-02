import './App.css';
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
import Footer from "./components/Footer"

export default function App() {

  const cards = data.map(item =>{
    return (
      <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
    )
  })

  return(
    <div >
    <Navbar/>
    <Hero/>
    <section className="cards-list">
    {cards}
    </section>
    <Footer/>
    
    </div>
  )

}
