# PROJETS EN COURS

- **LegionUI**: À base des composants bootstrap générés par cursor:composer, j'extrait leur logique css et js
    - Pour la logique css, j'export tout vers un fichiers scss dédié
    - Pour la logique js, en analysant la doc bootstrap un composant à la fois, j'identifie sur le composant généré par cursor:composer les éléments qui ne sont pas gérés nativement par bootstrap, et je les gère avec du js vanilla.
    - enfin, j'imbrique la logique du rendu des composant, dans le système de wrapper mis en place sur legionUI. 
    Ceci permettant de gérer les props passées au composant en tant que props du wrapper utilisé, et donc de gérer le rendu côté client **de façon standardisé** avec des fonctionnalités de base identidiques quelque soit le composant (actuellement juste la **fonctionnalité de modification dynamique du contenu**).
- **Workouts**: Il s'agit du résultat de workouts en vue d'accéder au paradigme de composant nu. Il est basé sur bootstrap, et je dois à l'aide de l'IA le ***standardiser***.
    