<script lang="ts">
	export let data: { images: string[] };

	$: console.log(data);
</script>

<div>
	{#each data.images as image}
		<img
			src={`https://storage.googleapis.com/photos-upload-website/${image}`}
			alt=""
			width="100%"
		/>
	{/each}
</div>
