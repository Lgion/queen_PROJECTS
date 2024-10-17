const prices = [
    { title: "Session PC", price: "1000 FCFA / heure" },
    { title: "Session Console", price: "1500 FCFA / heure" },
    { title: "Pack journée illimitée", price: "8000 FCFA" },
  ]
  
  export default function Pricing() {
    return (
      <section id="tarifs" className="py-20 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-arcade mb-12 text-center neon-text text-neon-pink">Nos Tarifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prices.map((price, index) => (
              <div key={index} className="bg-black p-6 rounded-lg neon-border text-center">
                <h3 className="text-xl font-arcade mb-4 text-neon-blue">{price.title}</h3>
                <p className="text-2xl font-bold text-neon-green">{price.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }