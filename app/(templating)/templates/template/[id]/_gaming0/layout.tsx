import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './page';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-gray-100">
      <Header />
      <Page />
      <Footer />
    </div>
  )
}
