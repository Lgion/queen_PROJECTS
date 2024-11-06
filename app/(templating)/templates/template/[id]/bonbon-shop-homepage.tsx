import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Candy, Gift, Truck } from "lucide-react"

export function BonbonShopHomepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primaryy text-primaryy-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Le Paradis des Bonbons</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="http://localhost:3000/" className="hover:underline">Accueil</a></li>
              <li><a href="#" className="hover:underline">Produits</a></li>
              <li><a href="#" className="hover:underline">À propos</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Bienvenue au Paradis des Bonbons</h2>
            <p className="text-xl mb-8">Découvrez notre sélection de délices sucrés pour tous les goûts !</p>
            <Button size="lg">Voir nos produits</Button>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Catégories de Bonbons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Bonbons Classiques', 'Chocolats', 'Bonbons Sans Sucre'].map((category) => (
                <Card key={category}>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{category}</h3>
                    <p className="text-muted-foreground">Découvrez notre sélection de {category.toLowerCase()}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Nous Choisir ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Candy, title: 'Qualité Premium', description: 'Nous sélectionnons les meilleurs bonbons pour vous' },
                { icon: Gift, title: 'Idées Cadeaux', description: 'Parfait pour offrir ou se faire plaisir' },
                { icon: Truck, title: 'Livraison Rapide', description: 'Recevez vos bonbons en un temps record' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <item.icon className="w-12 h-12 mb-4 text-primaryy" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primaryy text-primaryy-foreground py-8">
        <div className="container mx-auto text-center">
          <p className="mb-2">Le Paradis des Bonbons - Votre destination sucrée</p>
          <p className="mb-2">123 Rue des Sucreries, 75000 Paris</p>
          <p>Tél : 01 23 45 67 89 - Email : contact@paradisdesbonbons.fr</p>
        </div>
      </footer>
    </div>
  )
}