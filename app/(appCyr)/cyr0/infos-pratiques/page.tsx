import { Card, CardContent, CardHeader, CardTitle } from "../..//components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../..//components/ui/accordion";
import { MapPin, Clock, Utensils, HelpCircle } from 'lucide-react';

const InfosPratiques = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Informations Pratiques</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><MapPin className="mr-2" /> Accès</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Parc des Expositions de Paris</p>
            <p>1 Place de la Porte de Versailles, 75015 Paris</p>
            <p className="mt-4">Métro : Ligne 12, station Porte de Versailles</p>
            <p>Tramway : T2 et T3a, arrêt Porte de Versailles</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center"><Clock className="mr-2" /> Horaires</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Vendredi 15 septembre : 10h - 20h</p>
            <p>Samedi 16 septembre : 9h - 22h</p>
            <p>Dimanche 17 septembre : 9h - 18h</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center"><Utensils className="mr-2" /> Restauration</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Plusieurs points de restauration sont disponibles sur place :</p>
          <ul className="list-disc list-inside mt-2">
            <li>Food trucks variés</li>
            <li>Restaurants thématiques</li>
            <li>Cafétérias</li>
            <li>Bars à snacks</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center"><HelpCircle className="mr-2" /> FAQ</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Puis-je acheter mes billets sur place ?</AccordionTrigger>
              <AccordionContent>
                Oui, des billets seront disponibles à la vente sur place. Cependant, nous recommandons fortement l'achat en ligne pour éviter les files d'attente et bénéficier de tarifs préférentiels.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Y a-t-il un vestiaire ?</AccordionTrigger>
              <AccordionContent>
                Oui, un vestiaire payant est disponible à l'entrée du salon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Les cosplays sont-ils autorisés ?</AccordionTrigger>
              <AccordionContent>
                Les cosplays sont les bienvenus et encouragés ! Nous organisons même un concours de cosplay le dimanche.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfosPratiques;