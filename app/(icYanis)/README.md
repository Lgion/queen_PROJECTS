# COWORKING AVEC COMPOSER
## FIL DE LA DISCUSSION



---
### FAST-REFACTORING
---
#### prompt rapide: 
- transfere toutes les classes css du Header.tsx vers la structure de sélecteurs déjà présents dans header.scss. Utilise des @apply

#### long prompt: 
- pour l'instant header2.scss et header2Components.tsx sont vides, et Header2.tsx ne peux pas les utiliser. 
Pour construire header0.scss , j'ai transféré les classes tailwind, et rendu nu les balises jsx de Header0.tsx
Pour construire header0Components.tsx, j'ai refactorisé le code de Header0.tsx de sorte à potentiellement otenir des composants dont le contenu est ersonnalisable via une varibale "data".
Mais je voudrais que header2.scss et header2Components.tsx  aient la meme structure que header0.scss et header0Components.tsx, et reprennent les meme modifications faites sur Header.0tsx header0.scss et header0Components.tsx .
Penses-tu pouvoir faire ça ?

#### report bug prompt: 
- je vois dans le scss les class overlay et mobile-menu,mais elles ne sont applicqué nulpart dans le jsx est-ce normal ou moi qui n'a pas trouvé où ?
- okay c'est super, mais il reste qlq petits détails à régler.
Tu as créer "menuItems" pour les données, cependant je voudrais un objet "data, comme dans Header0. tu en profiteras pour passer les donnée à ActionButtons
- dans la varaible data tu  définis "contactButtons" mais tu ne l'utilise à aucun moment..



---
### PERFORMER LOGO COMPONENT
---
#### long prompt:
- Je voudrais performer Logo.
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

#### command prompt: 
-met les tous dans un dossier _/Logo/animations
- report bug prompt: 
je ne vois rien de génére...
Dans tous les cas:
1. le seul canvas que je vois dans Header2;, déplace le dans _/Logo/canvas
2. crée à en plus les 5 canvas que tu m'as proposé juste avant (Particules Gravitationnelles, Spirographe, OndesConcentriques, Kaléidoscope, MatrixDigitalRain)

#### report bug prompt: 
-Dans le code généré dans Logo, concernant les données par défaut, tu as LogoProps qui prévoit 4 propriétés possibles, mais ligne 81, tu ne retourne un objet ne contenant que la propriété "visual".
Il faudrait que la valeur retourné ai autant de chance de contenir seulement la propriété "visual" que seulement la propriété "text" ou encore les propriété combinés text et visual, ou tout autre combinaisaon de propriétés.



---
### MODAL APPEARENCES
---
- J'aimerai maitriser la pluralité d'affichage des élément s'affichant en modal.
Dans un 1er temps,explique moi comment tu mettrais en place un systeme permettant d'associer à l'affichage d'une modale (donc au clic sur un bouton ouvrant une modale) une style d'apparition de la modale.
Je vois que les interface des "bouton modal" ont 2 propriétés, il parait s'agir d'y ajouter une 3eme pour le style d'apparition de la modale/
En vrai le 3eme paramètre pourrait etre un array à 2 valeurs: la 1er pour le style d'aaparition de la modale, le second pour la forme de la modale elle meme.

Tu comprends ce que je te demande ?

#### report bug prompt: 
- il manque la propriété "modalStyle" dans les propriétés de actionButtons dans header2.js
- je ne comprend plus trop bien le code, mais je voudrai voir l'animation ou la form s'appliquer sur la modal. Il semble que quelque chose que tu n'as pas prévu empêche son affichage
- dans le composant de ActionButtons, les 2 composants  BookingButton, et ContactButtons ne sont pas à jour par raport aux autres composants, ils n'incluent pas  le composant de la modale (exemple: BookingModal) dans son propre fichier, je veux que ce soit le cas
- tu as oublié de rajouté les 2 nouvelles propriétés dans le fichier header2.js propriété "contactButtons"

#### refactoring prompt: 
- j'observe que on a finalement 2 type de AdditionButton: 
    - le 1er est le bouton simple en tant qu'objet respectant une interface comme celle de BookingButtonProps
    - le 2nd est un ensemble de boutons en tant qu'array respectant une interface comme celle de SocialMediaButtonProps
    Enfin, certains boutons d'action peuvent avoir des caractéristiques différentes, comme CartButton avec sa propriété itemCount, mais force est de constater que tous ces composants ont quasiment exactement le meme code.
    Quand c'est ainsi il faut refactoriser. 
    Alors j'aimerai avoir un composant ModalButton, qui prend (comme les autres Button) une seule props "data". On l'utilisera dans la fonction ActionButtons du fichier header2Components en lieu et place des présents composants, comme BookingButton SocialMediaButtons ou CartButton pour ne citer qu'eux.
    Pour le modèle à prendre pour effectuer la refactorisation, il s'agit des composant précédemment cités: BookingButton, SocialMediaButtons, ou encore CartButton.

    À la fin de ta refactorisation, il faut donc utiliser le nouveau composant ModalButton pour afficher tous les boutons d'action présents dans le fichier de données header2.js, as-tu tout bien compris ?



