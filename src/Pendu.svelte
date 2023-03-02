<script>
    import { steps } from "./referentiel/steps.json";
    export let context;

</script>

{#if context.victoire}
    Gagné !<br/>
{:else}
    <pre>
{steps[context.fails]}
</pre>
{/if}

<style>
    pre {
        margin: 0;
        line-height: normal;
        font-family: "Courier New", Courier, monospace;
    }
</style>
