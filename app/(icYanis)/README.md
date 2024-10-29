# COWORKING AVEC COMPOSER
## FIL DE LA DISCUSSION
- prompt rapide: 
transfere toutes les classes css du Header.tsx vers la structure de sélecteurs déjà présents dans header.scss. Utilise des @apply

- long prompt: 
pour l'instant header2.scss et header2Components.tsx sont vides, et Header2.tsx ne peux pas les utiliser. 
Pour construire header0.scss , j'ai transféré les classes tailwind, et rendu nu les balises jsx de Header0.tsx
Pour construire header0Components.tsx, j'ai refactorisé le code de Header0.tsx de sorte à potentiellement otenir des composants dont le contenu est ersonnalisable via une varibale "data".
Mais je voudrais que header2.scss et header2Components.tsx  aient la meme structure que header0.scss et header0Components.tsx, et reprennent les meme modifications faites sur Header.0tsx header0.scss et header0Components.tsx .
Penses-tu pouvoir faire ça ?
---
- report bug prompt: 
je vois dans le scss les class overlay et mobile-menu,mais elles ne sont applicqué nulpart dans le jsx est-ce normal ou moi qui n'a pas trouvé où ?
- report bug prompt: okay c'est super, mais il reste qlq petits détails à régler.
Tu as créer "menuItems" pour les données, cependant je voudrais un objet "data, comme dans Header0. tu en profiteras pour passer les donnée à ActionButtons
- dans la varaible data tu  définis "contactButtons" mais tu ne l'utilise à aucun moment..



---
PERFORMER LOGO COMPONENT
---
long prompt:
Je voudrais performer Logo.
J'aimerai que, en fonction des props le composant décide comment rendre le logo.
il faudrait qu'il soit possible d'afficher un logo simple, ou un logo avec un slogan, ou que le logo soit un texte associé à une font et une animation css via sous composant fourni en props, voilà c esont des exemples que j'aimerai possible dans ce meme composant Logo. Je te laisse la liberté d'en rajouter 2 variations ou plus possibles.
Enfin j'aimerai que, si il y a un slogan dans les données par exemple, qu'il y ait une balise figure afin d'afficher le slogan dans son figcaption, le coté visuel du figure pourra prendre bcp de formes: picture, svg, canvas, object. Aussi que les images exploitent pleinement le html5 pour rendre un jsx contenant une balise picture.

Voici quelques consignes à respecter avant d'appliquer ton plan.
1. tu dois créer un dossier Logo pour les sous-composants spécialisé
2. par défaut, si aucune donnée n'est fourni, il doit s'afficher un svg (Scissors) simple. Si juste le texte est fourni, il n'y a que le texte (donc sans le svg). Si le texte est fourni ainsi que l'élément visuel (image, canvas, etc..), le texte sera utilisé comme slogan. 2 textes doivent pouvoir etre fourni, dans quel cas l'élement visuel sera dans tous les cas ignoré dans le rendu, et le second texte fera office de slogan. Prends bien en compte tous les détails de ces 2 contraintes, c'est très important!
- trial generation prompt:
oui montre moi des exemples d'utilisation avec différentes configurations et animations ?
(montre moi un exemple avec canvas)
- sample generation prompt: 
créer moi 5 autre animation différentes stp
(créer moi 5 autre canvas différents stp)

- command prompt: 
met les tous dans un dossier _/Logo/animations
- report bug prompt: 
je ne vois rien de génére...
Dans tous les cas:
1. le seul canvas que je vois dans Header2;, déplace le dans _/Logo/canvas
2. crée à en plus les 5 canvas que tu m'as proposé juste avant (Particules Gravitationnelles, Spirographe, OndesConcentriques, Kaléidoscope, MatrixDigitalRain)

- rreport bug prompt: 
Dans le code généré dans Logo, concernant les données par défaut, tu as LogoProps qui prévoit 4 propriétés possibles, mais ligne 81, tu ne retourne un objet ne contenant que la propriété "visual".
Il faudrait que la valeur retourné ai autant de chance de contenir seulement la propriété "visual" que seulement la propriété "text" ou encore les propriété combinés text et visual, ou tout autre combinaisaon de propriétés.



---

---
