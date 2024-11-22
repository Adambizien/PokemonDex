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
    - [Action](https://github.com/Adambizien/PokemonDex/actions/runs/11969897278)
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
  - Failure type : [Action](https://github.com/Adambizien/PokemonDex/actions/runs/11971443009/job/33376280340)
  - Success type :  [Action](https://github.com/Adambizien/PokemonDex/actions/runs/11971475063/job/33376378352)
  - [Structure](https://github.com/Adambizien/PokemonDex/blob/44e383283bb63e2acf27c590b4b091b677562deb/.github/workflows/pokemonAction.yml)
  
  
### Exercice 5
Configurer l’action installant Node pour utiliser son système de cache : https://github.com/actions/setup-node?tab=readme-ov-file#caching-global-packages-data 

- Réponses :
  - [Action](https://github.com/Adambizien/PokemonDex/actions/runs/11971779986/job/33377298437)
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
  - [Action](https://github.com/Adambizien/PokemonDex/actions/runs/11972529516/job/33379623988)
  - [Structure](https://github.com/Adambizien/PokemonDex/blob/7912ae00fe180260a79be899c60906cf9432ead7/.github/workflows/pokemonAction.yml)

### Exercice 8
Activez le mode vidéo de Cypress et hébergez le résultat vidéo sur un artifact GitHub.
(https://github.com/cypress-io/github-action?tab=readme-ov-file#artifacts)

- Réponses : 
  - [Action](https://github.com/Adambizien/PokemonDex/actions/runs/11973603234)
  - [Structure](https://github.com/Adambizien/PokemonDex/blob/95631f5865200b646dc02449b2399d8c7a6348aa/.github/workflows/pokemonAction.yml)

## Exercices CI/CD A3 - J4 - Après-Midi
### Exercice 1
Ajoutez votre clé ssh privée aux secrets de votre projet GitHub.
https://docs.github.com/fr/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions 

- Réponses :
  - Chemin :  settings du repo GitHub -> Secrets and variables -> action -> New repository secret

### Exercice 2
Grâce à https://github.com/webfactory/ssh-agent , configurez l’agent ssh de votre runner CI pour qu’il utilise votre clé SSH privée.
Ajoutez une étape pour mettre à jour votre known_hosts (ssh-keyscan -H <IP_SERVER> >> ~/.ssh/known_hosts)
Ajoutez ensuite une étape qui fait un “ls” sur votre serveur à distance.

- Réponses :
  - [Action](https://github.com/Adambizien/PokemonDex/actions/runs/11974703109)
  - [Structure](https://github.com/Adambizien/PokemonDex/blob/da11e75263ead289f3c5b6192ff1bd96033d5428/.github/workflows/pokemonAction.yml)

### Exercice 3
Manuellement, sur votre serveur, configurez un nouveau vhost avec Apache ou Nginx (votre choix). Créez depuis votre serveur un fichier index.html dedans avec du texte.
Configurez un sous-domaine pour pointer sur ce domaine, ainsi qu’un certificat SSL (avec Cerbot).

- Réponses : 
https://pokemondex.bizienadam.fr/

### Exercice 4
Créez une nouvelle action (un nouveau fichier .yml) qui vous servira de CD, le trigger de cette action doit faire en sorte que cette action se déclenche uniquement pour les push sur la branche main.
Lien utile : https://docs.github.com/fr/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#push 
Dans cette action, re-configurez votre agent ssh et vos known_hosts, puis utilisez la commande scp pour envoyer vos fichiers sur le serveur.
La commande scp s’utilise comme ceci :
scp -r dist/* debian@<ip>:<chemin-distant>
Par exemple :
scp -r dist/* debian@151.80.58.182:/home/debian/
Les fichiers à envoyer sont ceux présents dans votre dossier “dist”, il faut au préalable exécuter la commande de build pour les générer.

- Réponses :
  - [Action]()
  - [Structure](https://github.com/Adambizien/PokemonDex/blob/9e2b95161d5ce66e5866f71a4581235a9255bd2d/.github/workflows/deploy.yml)


