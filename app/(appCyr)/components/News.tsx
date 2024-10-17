import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const newsItems = [
  {
    title: "Nouveau jeu AAA annoncé",
    description: "Un studio renommé dévoilera son prochain blockbuster lors du salon.",
  },
  {
    title: "Tournoi e-sport international",
    description: "Les meilleures équipes s'affronteront pour un prix d'un million d'euros.",
  },
  {
    title: "Zone VR étendue",
    description: "Découvrez les dernières innovations en réalité virtuelle sur plus de 1000m².",
  },
];

const News = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Dernières Actualités</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default News;