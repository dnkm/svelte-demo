<script>
	let { data } = $props();
</script>

<h1>clubs</h1>

<h2>list of clubs</h2>

<ul>
	{#each data.clubs as { name, title, slug }}
		<li><a href="/clubs/{slug}">{name}</a></li>
	{/each}
</ul>
