import { context } from "./stores"
import {processInput} from "./PenduService"

export const clearStorage = () => {
    if(!isProduction) {
        context.set(null)
    }
}
export const showWord = (game) => {
    if(!isProduction) {
        alert(game.word)
    }
}

export const solve= (game) => {
    if(!isProduction) {
        for (let c of game.word) {
            processInput(game, c)
        }
    }
    return game
}