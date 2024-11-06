// Les fonctions
// http://localhost:3000/alone/exercise/08.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice
// 🐶 Remplace le type `any` de `doSomeThing` qui est trop généraliste
//  pour ques les fonctions `doSomeThing` ci-après fonctionnement
let doSomeThing: Function

// ❌ NE PAS MODIFIER
doSomeThing = () => {
  displayText(`Hello developpeur`)
}
doSomeThing()

doSomeThing = (name: string) => {
  displayText(`Hello ${name}`)
}
doSomeThing('John')
// ❌ END

// 🐶 Implemente et spécifie les paramètres et types de la fonction `sum`
// n'oublie pas de spécifier le type de retour

// 🚀 N'oublie pas les bonus
//
// Bonus 1 & 2

type CalculExpFunction = (base: number) => number
function calculExp(cb: CalculExpFunction, base: number): number {
  return cb(base)
}

function carre(base: number): number {
  return base * base
}

displayText(`Le carré de ${5} est ${calculExp(carre, 5)}`)

function cube(base: number): number {
  return base * base * base
}

displayText(`Le cube de ${5} est ${calculExp(cube, 5)}`)

// Bonus 2

carre.description = 'Fonction au carré'
cube.description = 'Fonction au cube'

console.log(carre, cube)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
