// Les tableaux
// http://localhost:3000/alone/exercise/02.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Créer une variable `names` mais sans initialiser de valeurs
//  ajoute ensuite 'John' et 'doe' à `name` sans utiliser la méthode `push()`
let names: string[]
names = ['John', 'Doe']

// 🤖 affiche 'Il y a 2 noms' dans le navigateur grace à `displayText` et `.length`

displayText(`Il y a ${names.length} noms `)

// 🐶 Créer une constante `games` et initialise avec un tableau vide
// avec la méthode `push()` ajoute 3 jeux
// ⛏️ const games
// 🤖 affiche le nombre d'élément à l'ecran

const games: string[] = []
games.push('Once human', 'Enshrouded', 'Against the storm')
displayText(`Il y a ${games.length} jeux `)

// 🐶 Créer une constante `things` : un tableau qui peut prendre n'importe quel type de donnée
// ⛏️ const things

// 🤖 affiche le nombre d'élément à l'ecran

const things = []
things.push('Hello', 42, {user: {name: 'Jean-Claude'}}, [1, 'ok'])
displayText(`Il y a ${things.length} choses`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
