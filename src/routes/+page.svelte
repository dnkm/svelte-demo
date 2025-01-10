<script>
	let x = $state(30);

	function increment() {
		x++;
		alert(x);
	}
</script>

<h1>Home</h1>
<p>homepage</p>

<button
	class="bg-slate-500 px-1 py-0.5 text-white hover:bg-yellow-500"
	style="font-size: {x}px"
	on:click={increment}>{x}</button
>
