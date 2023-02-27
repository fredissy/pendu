<script>
    import Keyboard from "svelte-keyboard";
    import { dailyContext, processInput } from "./service/PenduService";
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
</script>

{#if context}
    <Pendu {context}/>
    <WordOfTheDay {context} />
{/if}

<Keyboard layout="wordle" localizationLayout="azerty" on:keydown={onKeydown} />
