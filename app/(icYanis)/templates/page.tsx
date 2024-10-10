import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


// Simulons une liste de modèles de sites vitrines
const templates = [
    { id: 1, name: "Restaurant Élégant", description: "Un design moderne pour les restaurants haut de gamme" },
    { id: 2, name: "Boutique de bonbon", description: "Une interface e-commerce attrayante et facile à utiliser" },
    { id: 3, name: "Portfolio d'Artiste", description: "Mettez en valeur vos créations avec ce design minimaliste" },
    // Ajoutez d'autres modèles ici
]

export default () => <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {templates.map((template) => (
        <Card key={template.id} className="flex flex-col">
            <CardHeader>
                <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{template.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
                <Link href={`/template/${template.id}`} passHref>
                    <Button>Voir le modèle</Button>
                </Link>
            </CardFooter>
        </Card>
    ))}
</main>