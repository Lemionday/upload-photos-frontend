<script lang="ts">
	let input;
	let container;
	let image;
	let placeholder;
	let showImage = false;

	function onChange() {
		const file = input.files[0];

		if (file) {
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function () {
				image.setAttribute('src', reader.result);
			});
			reader.readAsDataURL(file);

			return;
		}
		showImage = false;
	}
</script>

<h1>Image Preview on File Upload</h1>

<form method="post" enctype="multipart/form-data">
	<label for="file">Upload your file</label>
	<input
		id="file"
		type="file"
		name="fileToUpload"
		accept=".jpg, .jpeg, .png, .webp"
		required
		bind:this={input}
		on:change={onChange}
	/>

	<button type="submit">Submit</button>
</form>
<div bind:this={container}>
	{#if showImage}
		<img bind:this={image} src="" alt="Preview" />
	{:else}
		<span bind:this={placeholder}>Image Preview</span>
	{/if}
</div>

<style>
	div {
		width: 300px;
		min-height: 100px;
		border: 2px solid #ddd;
		margin-top: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		color: #ccc;
	}
	img {
		width: 100%;
	}
</style>
