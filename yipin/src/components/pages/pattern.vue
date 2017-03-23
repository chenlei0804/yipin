<template>
	<div class="wrapper">
		<v-head></v-head>
		<v-pbanner></v-pbanner>
		<v-pcontainer></v-pcontainer>
		<v-footer></v-footer>
	</div>
</template>
<script type="text/javascript">
	import appHead from './../head/head.vue'
	import pBanner from './../p-banner/p-banner.vue'
	import pContainer from './../p-container/p-container.vue'
	import appFooter from './../footer/footer.vue'

	export default {
		components: {
			'v-head': appHead,
			'v-pbanner': pBanner,
			'v-pcontainer': pContainer,
			'v-footer': appFooter
		}
	}
</script>

<style lang="less" rel="stylesheet/less">

</style>