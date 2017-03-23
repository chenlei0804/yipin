<template>
	<div class="container">
		<a-area></a-area>
		<b-area></b-area>
		<c-area></c-area>
		<d-area></d-area>
		<e-area></e-area>
		<f-area></f-area>
	</div>
</template>
<script type="text/javascript">
	import aArea from './aArea.vue'
	import bArea from './bArea.vue'
	import cArea from './cArea.vue'
	import dArea from './dArea.vue'
	import eArea from './eArea.vue'
	import fArea from './fArea.vue'

	export default {
		components: {
			'a-area': aArea,
			'b-area': bArea,
			'c-area': cArea,
			'd-area': dArea,
			'e-area': eArea,
			'f-area': fArea,
		}
	}
</script>

<style lang="less" rel="stylesheet/less">

</style>