<script>
    import { config } from "./referentiel/config.json";
    export let context;
</script>

{#if context.victoire}
    Gagné !
{:else if context.fails >= config.max_tries}
    Perdu !
{:else}
    Nb d'erreurs {context.fails} / {config.max_tries}
{/if}
