import Navbar from './components/UI/Navbar'
import Hero from './components/UI/Hero'
import ProductBenefits from './components/UI/ProductBenefits'
import Botanicals from './components/UI/Botanicals'
import Commitments from './components/UI/Commitments'
import ValuesBar from './components/UI/ValuesBar'
import Footer from './components/UI/Footer'

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden font-sans bg-qori-beige text-qori-dark selection:bg-qori-green selection:text-white">
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />
        <Hero />

        <div className="w-full relative z-10">
          <ProductBenefits />
          <Botanicals />
          <Commitments />
          <ValuesBar />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
