// Les tuples
// http://localhost:3000/alone/exercise/06.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, {init} from './helper/exerciseHelper'
init()

// ✔️ Début de l'exercice

// 🐶 Déclare un type `Connexion` un tuple contennant toutes les informations utile a la connexion
// - le nom de la connexion  (ex : Connexion à Google) `string`
// - le protocole (ex : ftp, http) `string`
// - le hostname (ex : google.com) `string`
// - le port  (ex : 423) `number`
// - le username : (ex : admin) `string`
// - le password (ex : admin) `string`
// 📝 documentation tuples https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types

type Connexion = [string, string, string, number, string, string]

// 🐶 Créer une variable 'google' qui contiendra les infos de connexion à google
// https google.com 443
// Affiche le resultat à l'ecran avec le code
// 🤖 displayText(`Connexion ${google[0]} : ${google[1]}://${google[2]}:${google[3]} `)

const google: Connexion = [
  'Connexion à Google',
  'https',
  'google.com',
  423,
  'admin',
  'password123',
]

displayText(`${google[0]} : ${google[1]}://${google[2]}:${google[3]}`)

// 🐶 créer 3 autres connexions de ton choix et affiche le resultat à l'écran

let github: Connexion

github = [
  'Connexion à Github',
  'https',
  'github.com',
  37,
  'user',
  'password456',
]

displayText(`${github[0]} : ${github[1]}://${github[2]}:${github[3]}`)

const ftpMike: Connexion = [
  'Connexion à Mike ftp',
  'ftp',
  'mike223',
  42,
  'Mike',
  'password789',
]

displayText(`${ftpMike[0]} : ${ftpMike[1]}://${ftpMike[2]}:${ftpMike[3]}`)

// 🐶 créer un tableau `connexions` qui contiendra toutes les connexions
// Ajoute des connexion via l'initialisation et via la méthode `push`

type Connexions = any[]
const connexions: Connexions = []
connexions.push(google)
connexions.push(github)
connexions.push(ftpMike)

displayText(`${connexions[0]}`)
displayText(`${connexions[1]}`)
displayText(`${connexions[2]}`)
displayText(`Il y a ${connexions.length} connexions`)

// Bonus1

enum Protocol {
  HTTP = 'http',
  HTTPS = 'https',
  FTP = 'ftp',
}

type SafeConnexion = [string, Protocol, string, number, string, string]

const notion: SafeConnexion = [
  'Connexion à Notion',
  Protocol.HTTPS,
  'notion.com',
  101,
  'Lolo',
  'mybestmdp',
]

displayText(`${notion[0]} : ${notion[1]}://${notion[2]}:${notion[3]}`)
displayText(`L'utilisateur ${notion[4]} est maintenant connecté`)

// Bonus2

const [,googleProtocol, googleHostname] = google

displayText(`protocole : ${googleProtocol}`)
displayText(`domaine : ${googleHostname}`)

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
