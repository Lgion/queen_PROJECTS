'use client'

import { useEffect, useState } from "react"
import { RestaurantHomepage } from "./restaurant-homepage"
import { BonbonShopHomepage } from "./bonbon-shop-homepage"
import Beauty0 from "./_beauty0/layout"
import Gaming0 from "./_gaming0/layout"

const DefaultTemplate = () => <div>
  Template non trouvé
</div>

// Simulons une fonction pour obtenir les détails du template
const getTemplateDetails = (id: string) => {
  const templates = [
    { id: "1", name: "Restaurant Élégant", component: RestaurantHomepage },
    { id: "2", name: "Boutique de bonbon", component: BonbonShopHomepage },
    { id: "3", name: "Portfolio d'Artiste", component: null }, // À implémenter plus tard
    { id: "4", name: "Beauté d'Abidjan", component: Beauty0 },
    { id: "5", name: "Cyber Gaming", component: Gaming0 },
  ]
  return templates.find(t => t.id === id) || { id: "0", name: "Template non trouvé", component: DefaultTemplate }
}

export default function TemplatePage({ params }: { params: { id: string } }) {
  const [template, setTemplate] = useState(getTemplateDetails(params.id))

  useEffect(() => {
    setTemplate(getTemplateDetails(params.id))
  }, [params.id])

  if (!template.component) {
    return <div>Modèle non trouvé</div>
  }

  const TemplateComponent = template.component
  return <TemplateComponent />
}