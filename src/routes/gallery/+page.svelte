<script lang="ts">
	interface Image {
		link: string;
		created: Date;
	}
	export let data: { images: Image[] };

	$: console.log(data);
</script>

<div>
	{#each data.images as image}
		<img
			src={`https://storage.googleapis.com/photos-upload-website/${image.link}`}
			alt=""
			width="50%"
		/>
		<span>{image.link}</span>
		<span>{image.created}</span>
	{/each}
</div>
