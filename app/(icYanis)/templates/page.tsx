import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


// Simulons une liste de modèles de sites vitrines
const templates = [
    { id: 1, name: "Restaurant Élégant", description: "Un design moderne pour les restaurants haut de gamme" },
    { id: 2, name: "Boutique de bonbon", description: "Une interface e-commerce attrayante et facile à utiliser" },
    { id: 3, name: "Portfolio d'Artiste", description: "Mettez en valeur vos créations avec ce design minimaliste" },
    { id: 4, name: "Beauté d'Abidjan", description: "beauty0: Salon virtuel de beauté pour service à domicile" },
    { id: 5, name: "Cyber Gaming", description: "gaming0: Site vitrine pour salon de gaming" },
    // Ajoutez d'autres modèles ici
]

export default () => <>
    {templates.map((template) => (
        <Card key={template.id} className="flex flex-col">
            <CardHeader>
                <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{template.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
                <Link href={`/templates/template/${template.id}`} passHref>
                    <Button>Voir le modèle</Button>
                </Link>
            </CardFooter>
        </Card>
    ))}
</>