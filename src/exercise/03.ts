// Les objets
// http://localhost:3000/alone/exercise/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Déclare une variable `person` (sans initialiser de valeur)
// definie les propriétés / types suivants
//
// - name de type string
// - age de type number
// - isActive de type boolean
// - roles un tableau de string
// - params un object non defini
// - payload peut avoir n'importe quel type

let person: {
  name: string
  age: number
  isActive: boolean
  roles: string[]
  params: {}
  payload: any
}

// 🐶 affecte des valeurs à person
// laisse payload undefined
person = {
  name: 'John',
  age: 30,
  isActive: true,
  roles: ['user', 'admin'],
  params: {
    darkMode: true,
    surname: 'Johnny',
  },
  payload: undefined,
}

// 🤖 Affiche dans le navigateur grace à `displayText` le libellé suivant
// 'John à 30 ans et a le role ADMIN'

displayText(`${person.name} a ${person.age} ans et le rôle ${person.roles[1]} `)

// Bonus

let friend: {
  name: string
  age: number
  isActive: boolean
  roles: string[]
  params: {}
  payload: any
}

friend = {
  name: 'Mike',
  age: 32,
  isActive: false,
  roles: ['user'],
  params: {
    darkMode: true,
    surname: 'Mikey',
  },
  payload: undefined,
}

displayText(`${person.name} a pour ami ${friend.name}.`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
