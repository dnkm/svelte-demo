<script>
	let { data } = $props();
</script>

<h1>clubs</h1>

<h2>list of clubs</h2>

<ul>
	{#each data.clubs as { id, name }}
		<li><a href="/clubs/{id}">{id} {name}</a></li>
	{/each}
</ul>
