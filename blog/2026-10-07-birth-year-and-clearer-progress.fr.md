# L'année de naissance au lieu de l'année scolaire, une vue d'ensemble plus complète pour les parents, et un score pour chaque activité

Trois choses qui demandaient un petit effort se font maintenant toutes seules : l'application calcule l'année scolaire de votre enfant à partir de son année de naissance, l'espace parent montre le portrait complet dès la première visite, et chaque activité a maintenant son propre score.

**Entrez une année de naissance, pas une année scolaire.** Quand vous créez un enfant (ou corrigez son profil plus tard dans l'espace parent), vous saisissez maintenant une année de naissance à quatre chiffres. L'application en déduit l'année scolaire : l'année scolaire commence le 1er septembre, et un enfant est en 1re année l'année de ses six ans. Un enfant né en 2019 est en 2e année à l'automne 2026, et passe en 3e année le 1er septembre 2027 sans que vous ayez rien à faire. Les enfants de moins de six ans sont présentés comme préscolaires, et l'année scolaire s'arrête à la 5e. Toute valeur qui n'est pas une année plausible, comme une année future, est refusée avec un message clair et rien n'est enregistré. Les enfants créés auparavant gardent l'année scolaire que vous aviez choisie jusqu'à ce que vous ajoutiez une année de naissance, et les profils exportés contiennent l'année de naissance : changer un enfant d'appareil ne la fait donc pas perdre. Les fichiers exportés avant ce changement s'importent toujours sans problème.

**Une vue d'ensemble pour les parents qui n'est jamais vide.** L'espace parent s'ouvre maintenant sur une grande toile d'araignée globale, avec un axe par matière. Elle montre où en est votre enfant aujourd'hui à côté de l'endroit où l'on attend un enfant de son année scolaire, même s'il n'a encore rien pratiqué ; vous voyez ainsi toujours ce que l'application mesure. Chaque matière a aussi sa propre toile. En dessous se trouve un court bilan de progrès, comme un bulletin scolaire : pour chaque matière, l'année scolaire, la date du jour et un résumé en mots simples de la situation. Avant toute pratique, il indique simplement qu'il n'y a encore rien à signaler.

**Un score pour chaque activité.** Jusqu'ici, le score appartenait à la compétence : deux activités différentes pour la même compétence affichaient donc le même nombre. Chaque activité affiche maintenant son propre score, comme 7/10, calculé uniquement à partir de ses propres questions. Le score de la compétence est alors une moyenne pondérée de ses activités. Compter dans l'ordre en est l'exemple : « 1 à 10 » compte deux fois plus que « 1 à 5 ». Une activité pas encore jouée compte pour 0 %, de sorte qu'une compétence n'est pleinement notée qu'une fois toutes ses activités essayées.

```
Compétence : Compter dans l'ordre
  1 à 5   poids 1   score 100 %  ->  1 x 100
  1 à 10  poids 2   score  50 %  ->  2 x  50
  score de la compétence = (100 + 100) / 3 = 67 %
```

Le score de la compétence s'affiche en pourcentage, avec un petit bouton d'information qui explique comment il a été calculé. Les totaux par matière et par thème utilisent les mêmes scores : les pourcentages que vous voyez à chaque niveau concordent donc entre eux, et « Réussi » et « Pas encore » correspondent toujours au score affiché à côté.
