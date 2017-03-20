<template>
	<div id="app" class="wrapper">
		<v-head></v-head>
	</div>
</template>
<script type="text/javascript">
	import appHead from './head/head.vue'

	export default {
		components: {
			'v-head': appHead
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.wrapper {
		position: relative;
		widows: 100%;
		margin: 0 auto;
		overflow: hidden;
	}
</style>