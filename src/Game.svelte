<script>
    import Keyboard from "svelte-keyboard";
    import { dailyContext, processInput } from "./service/PenduService"
    import { clearStorage, solve, showWord } from "./service/DebugService"
    import WordOfTheDay from "./WordOfTheDay.svelte";
    import Pendu from "./Pendu.svelte"
    import { onMount } from "svelte/internal";

    let context;

    onMount(async () => {
        context = dailyContext();
    });

    const onKeydown = (event) => {
        context = processInput(context, event.detail)
    };

    const onButtonClear = () => {
        clearStorage()
        context = dailyContext()
    }

    const onButtonSolve= () => {
        context = solve(context)
    }
    const onShowWord= () => {
        showWord(context)
    }
</script>

{#if context}
    <Pendu {context}/>
    <WordOfTheDay {context} />
{/if}
{#if context && !context.failure && !context.victoire}
    <Keyboard layout="wordle" localizationLayout="azerty" on:keydown={onKeydown} />
{/if}
{#if !isProduction}
<div>Dev features :
    <br>
    <button on:click={onButtonClear}>Clear storage</button>
    <br>
    <button on:click={onButtonSolve}>Solve</button>
    <br>
    <button on:click={onShowWord}>Show word</button>
</div>
{/if}
