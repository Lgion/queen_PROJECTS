import Header from './components/Header';
import Footer from './components/Footer';
import Page from './page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      
      <Page />
      
      <Footer />
    </div>
    
  )
}
