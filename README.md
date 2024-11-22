## Exercices CI/CD A3 - J4 - Matin
(J'ai changé le nom de la CI à la fin ^^ [ici](https://github.com/Adambizien/PokemonDex/blob/37bccace830fc07bf54d5786d0ec2550bb600e00/.github/workflows/pokemonAction.yml))
### Exercice 0
  Mettez votre projet de carte de Pokemon sur un repo GitHub public et envoyez-moi le lien sur Discord.
  
  ok 
### Exercice 1
  Créez une pipeline qui se déclenche à chaque push sur votre repo et qui affiche un message.
  Ressources utiles :
  Mettre en place une CI https://docs.github.com/fr/actions/writing-workflows/quickstart
  Mettre en place une CI Node : https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-nodejs 

  - Réponse :
    - [ici](https://github.com/Adambizien/PokemonDex/actions/runs/11969897278)
    - [structure](https://github.com/Adambizien/PokemonDex/blob/cf9a758857a9f1844d1875edabfb023b34764c47/.github/workflows/test.yml)

 
### Exercice 2
  Sur votre repository, configurez prettier. (n’utilisez pas la partie “Git Hooks”)
  Eslint devrait déjà être présent grâce à vite, vérifiez que la commande “npm run lint” génère bien une erreur lorsque vous utilisez un “let” au lieu d’un “const”.
  
 - Réponses : 
      la même que l'ex 3
  
### Exercice 3
  Ajoutez quelques étapes de lint sur votre pipeline :
  prettier doit passer et générer une erreur si un fichier n’est pas correctement formaté
  eslint doit passer et générer une erreur si un fichier ne respecte pas vos règles
  Faites quelques commits de tests pour vous assurez que la pipeline “casse” bien lorsque l’un des 2 outils ne valide pas le code.
j'ai un warning pour le eslint mais je ne l'ai pas régler par soucis de temps.
- Réponses :
  - Success : [ici](https://github.com/Adambizien/PokemonDex/actions/runs/11970345324)
  - Prettier failure : [ici](https://github.com/Adambizien/PokemonDex/actions/runs/11970373305)
  - Eslint failure : [ici](https://github.com/Adambizien/PokemonDex/actions/runs/11970412385)
  - [Structure](https://github.com/Adambizien/PokemonDex/blob/27bbe10da90cfd569e05dde348d669b2c9f636b8/.github/workflows/test.yml)

  
### Exercice 4
Ajoutez 2 étapes supplémentaires sur votre pipeline :
typescript doit passer, avant le build, et générer une erreur si un fichier ne respecte pas les types
une étape doit “builder” le projet

- Réponses :
  - Failure type : [ici](https://github.com/Adambizien/PokemonDex/actions/runs/11971443009/job/33376280340)
  - Success type :  [ici](https://github.com/Adambizien/PokemonDex/actions/runs/11971475063/job/33376378352)
  - [Structure](https://github.com/Adambizien/PokemonDex/blob/44e383283bb63e2acf27c590b4b091b677562deb/.github/workflows/pokemonAction.yml)
  
  
### Exercice 5
Configurer l’action installant Node pour utiliser son système de cache : https://github.com/actions/setup-node?tab=readme-ov-file#caching-global-packages-data 

- Réponses :
  - [ici](https://github.com/Adambizien/PokemonDex/actions/runs/11971779986/job/33377298437)
  - [Structure](https://github.com/Adambizien/PokemonDex/blob/414e312b1e49d9eb1a1d3314cc547b4b5f74bcec/.github/workflows/pokemonAction.yml)


### Exercice 6
Rajoutez une branch policy sur votre branche “main” qui :
force les développeurs à faire des PR
empêche les PR qui ne build pas d’être mergées dans main

- Réponses :
  - Chemin la première fois : settings du repo GitHub -> Branches -> Add branch ruleset
  - Si c'est déjà créé : settings du repo GitHub -> Rules -> Rulesets -> sélectionner le ruleset souhaité
  - Je l'ai appelé Main -> je l'ai activé -> j'ai défini la branche cible par défaut -> j'ai coché restrict deletions, require a pull request before merging, require status checks to pass (en sélectionnant l'action pokemonAction) et block force pushes.
    
 
### Exercice 7
Configurez une étape supplémentaire pour lancer vos tests Cypress e2e.
Vous pouvez utiliser l’action faite pour ça : https://github.com/cypress-io/github-action 
La commande “npx wait-on” sera utile 🙂

- Réponses :
  - [ici](https://github.com/Adambizien/PokemonDex/actions/runs/11972529516/job/33379623988)
  - [Structure](https://github.com/Adambizien/PokemonDex/blob/7912ae00fe180260a79be899c60906cf9432ead7/.github/workflows/pokemonAction.yml)

### Exercice 8
Activez le mode vidéo de Cypress et hébergez le résultat vidéo sur un artifact GitHub.
(https://github.com/cypress-io/github-action?tab=readme-ov-file#artifacts)

