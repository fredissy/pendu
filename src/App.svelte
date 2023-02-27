<script>
	import Game from "./Game.svelte";
	import { Styles } from 'sveltestrap'

  </script>
  
  <div class="main">
    <Styles />
	<Game />
</div>
  

<style>
	/* .main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	} */

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		.main {
			width: 500px;
			margin: auto;
		}
	}
</style>