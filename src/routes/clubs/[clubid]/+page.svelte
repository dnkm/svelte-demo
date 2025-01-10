<script>
	import { supabase } from '$lib/supabaseClient.js';

	let { data } = $props();
	let club = $state(null);

	$effect(async () => {
		if (data) {
			let resp = await supabase.from('clubs').select('*').eq('id', data.clubid).single();
			club = resp.data;
		}
	});

	async function addLikes() {
		// club.like++;
		let resp = await supabase
			.from('clubs')
			.update({ like: club.like + 1 })
			// .increment('like')
			.eq('id', data.clubid)
			.select('like')
			.single();
		club.like = resp.data.like;
	}
</script>

<h1>club</h1>
<pre>{club?.id}</pre>
<pre>{club?.name}</pre>
<button class="bg-gray-200 px-2 py-1" onclick={addLikes}>{club?.like}</button>
