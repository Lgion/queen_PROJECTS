const games = [
    { title: "Call of Duty: Modern Warfare", description: "Jeu de tir" },
    { title: "FIFA 24", description: "Jeu de simulation sportive" },
    { title: "League of Legends", description: "MOBA" },
    { title: "Mario Kart", description: "Jeu de course" },
    { title: "Fortnite", description: "Jeu de bataille royale" },
  ]
  
  export default function Games() {
    return (
      <section id="jeux" className="py-20 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-arcade mb-12 text-center neon-text text-neon-green">Nos Jeux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div key={index} className="bg-black p-6 rounded-lg neon-border">
                <div className="w-full h-48 bg-gray-800 mb-4 rounded-md"></div>
                <h3 className="text-xl font-arcade mb-2 text-neon-pink">{game.title}</h3>
                <p className="text-gray-400">{game.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }