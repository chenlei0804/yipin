<template>
	<div class="wrapper">
		<v-head></v-head>
		<v-carousel></v-carousel>
		<v-container></v-container>
		<v-footer></v-footer>
		<v-rightsead></v-rightsead>
	</div>
</template>
<script type="text/javascript">
	import appHead from './../head/head.vue';
	import appCarousel from './../carousel/carousel.vue';
	import hContainer from './../hContainer/hContainer.vue';
	import appFooter from './../footer/footer.vue';
	import appRightsead from './../rightsead/rightsead.vue';

	export default {
		components: {
			'v-head': appHead,
			'v-carousel': appCarousel,
			'v-container': hContainer,
			'v-footer': appFooter,
			'v-rightsead':appRightsead
		}
	}
</script>

<style lang="less" rel="stylesheet/less">

</style>