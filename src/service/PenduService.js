import seedrandom from "seedrandom"
import { get } from 'svelte/store'
import { words } from "../referentiel/dictionnaire.json"
import { config } from "../referentiel/config.json"
import { context } from "./stores"

const chooseWordOfDay = () => {
    let random = seedrandom(new Date().toLocaleDateString('fr-fr'))
    let rand = Math.floor(words.length * random())
    let word = words[rand]
    return word
}

export const dailyContext = () => {
    let fromstore = get(context)
    let word = chooseWordOfDay()
    if (fromstore == null || fromstore && fromstore.word != word) {
        let game = {}
        game.word = chooseWordOfDay()
        game.letters = ''
        game.fails = 0
        game.failure = false
        game.victoire = false
        context.set(game)
        return game
    } else {
        return fromstore
    }
}
const failure = (context) => {
    return context.fails >= config.max_tries
}

const victoire = (context) => {
    for (let c of context.word) {
        if (context.letters.indexOf(c) == -1) {
            return false
        }
    }
    return true
}

export const processInput = (game, input) => {
    if (input == 'Backspace' || input == 'Enter') { return game }
    // si la proposition a déjà été faite, on ne fait rien :
    if (game.letters.indexOf(input) > -1) { return game }

    // si la proposition ne se trouve pas dans le mot à trouver, on fait +1 sur le nb d'erreurs
    if (game.word.indexOf(input) == -1) {
        game.fails++
    }
    // on ajoute la proposition à la chaine des propositions du contexte de jeu
    game.letters += input
    // jeu terminé ?
    game.victoire = victoire(game)
    game.failure = failure(game)
    context.set(game)
    return game
}
