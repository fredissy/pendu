import { writable } from 'svelte/store'
import ls from 'localstorage-slim'

const CONTEXT = 'context-ls'

ls.config.encrypt = isProduction
ls.config.decrypt = isProduction

export const context = writable(ls.get(CONTEXT) != null ? ls.get(CONTEXT) : null)

context.subscribe(val => {
    ls.set(CONTEXT, val)
})
