import Header from './components/Header';
import Footer from './components/Footer';
// import Page from './gossip/page'
import './utils/styles/global.scss';
import './utils/styles/modal.scss';
import Client from './utils/client';
import { SpinLoaders } from "./utils/spinLoaders/index"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return<body>
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Header />
      
      <Client />
      
      {children}
      {/* <Page /> */}
      
      <Footer />
    </div>
    
    <SpinLoaders loaderId={4} duration={3000} />
  </body>
}
