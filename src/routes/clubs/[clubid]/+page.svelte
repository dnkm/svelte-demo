<script>
	let { data } = $props();
</script>

<pre>{JSON.stringify(data)}</pre>
<h1>{data.club?.id}</h1>

<p>{data.club?.name}</p>
<p>{data.club?.description}</p>
