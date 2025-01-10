<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="space-x-4 text-blue-500">
	<a href="/">Home</a>
	<a href="/about">About</a>
</nav>

{@render children()}
