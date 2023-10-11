<script>
	import { assets, base } from '$app/paths';
</script>

<nav>
	<div class="nav-links">
		<a href="{base}/">Home</a>
		<a href="{base}/about">About</a>
	</div>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.nav-links {
		font-weight: bold;
		align-items: center;
	}
</style>
