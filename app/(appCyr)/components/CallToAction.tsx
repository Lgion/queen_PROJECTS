import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16 px-4 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ne manquez pas l'événement de l'année !</h2>
        <p className="text-xl mb-8">Réservez vos billets dès maintenant et bénéficiez de tarifs préférentiels.</p>
        <Button size="lg" variant="secondary">
          Acheter des billets
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;