import Header from '../[id]/_beauty0/components/Header';
import Footer from '../[id]/_beauty0/components/Footer';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (          
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
