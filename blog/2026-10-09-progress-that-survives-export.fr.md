# Exportez la progression d'un enfant, réimportez-la, et rien n'est perdu

Un parent qui exportait la progression d'un enfant, supprimait le profil puis réimportait le fichier pouvait constater que le rapport ne ressemblait plus à l'original. C'est corrigé : la progression est maintenant conservée à un seul endroit, et ce que vous exportez est exactement ce qui revient.

**Le problème.** Les résultats d'exercices étaient gardés à deux endroits sur l'appareil. Le rapport lisait l'un, le fichier d'export était construit à partir de l'autre. Chacun conservait une quantité d'historique différente, si bien qu'un aller-retour pouvait faire disparaître des réponses et que les scores affichés ensuite ne correspondaient pas toujours.

**Ce qui change.** Il existe désormais un seul stockage des réponses de chaque enfant. Le rapport, les pourcentages de maîtrise, le radar et les scores d'activité en sont tous tirés, et le fichier d'export est fait avec les mêmes données.

```
exercices -> un seul stockage -> rapport, radar, scores
                             \-> fichier d'export -> import -> même stockage
```

**Quantité d'historique conservée.** Pour chaque compétence, niveau et activité, l'application garde les 50 réponses les plus récentes. La règle est fixe : exporter puis importer ne change jamais ce qui est conservé.

**Familles qui utilisent déjà l'application.** La progression enregistrée avant cette mise à jour est reprise automatiquement à la première ouverture, et l'ancienne copie n'est supprimée qu'une fois le transfert réussi. Les anciens fichiers d'export, de toutes les versions précédentes, s'importent toujours.

**Suppression et import plus sûrs.** Supprimer un enfant efface désormais toute sa progression : un nouveau profil repart de zéro. Si un import échoue en cours de route, aucun enfant à moitié restauré ne reste, et un message clair en français ou en anglais explique ce qui s'est passé.
