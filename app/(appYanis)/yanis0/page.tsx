import Header from './components/Header'
import Presentation from './components/Presentation'
import Games from './components/Games'
import Events from './components/Events'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Presentation />
      <Games />
      <Events />
      <Pricing />
      <Footer />
    </main>
  )
}