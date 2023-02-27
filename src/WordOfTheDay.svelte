<script>
    export let context;
</script>

<br />
{#each context.word.split("") as letter}
    <span class="char">
        {#if context.letters.indexOf(letter) == -1}
            _&nbsp;
        {:else}
            {letter.toUpperCase()}
        {/if}
    </span>
{/each}

<br />
{#each context.letters.split("") as proposition}
    {#if context.word.indexOf(proposition) == -1}
        <span class="proposition">
            {proposition.toUpperCase()}
        </span>
        &nbsp;
    {/if}
{/each}

<style>
    .proposition {
        text-decoration: line-through;
    }
</style>
