<template>
	<div class="container">
		<div class="sidebar">
			<div class="wrap clearfix">
				<div class="menu">
					<dl class="clearfix">
						<dt v-for="txts in contents" @mouseenter="menuMouseenter" @mouseleave="menuMouseleave">
						<a href="" title="家装效果图">{{txts.txta}}</a>
					</dt>
					</dl>
				</div>
				<h2 class="leftTitle">
				<i>案例专场</i>
			</h2>
			</div>

		</div>
		<div class="main">
			<div class="vr vr-01">
				<p-hd></p-hd>
				<p-case></p-case>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import pHd from './p-hd.vue'
	import pCase from './p-case.vue'

	export default {
		components: {
			'p-hd': pHd,
			'p-case': pCase
		},
		data() {
			return {
				contents: [{
					txta: "家装效果图"
				}, {
					txta: "工装效果图"
				}, {
					txta: "建筑效果图"
				}]
			}
		},
		methods: {
			menuMouseenter: function(e) {
				console.log(e.target)
				$(e.target).addClass('currentm')
			},
			menuMouseleave: function(e) {
				$(e.target).removeClass('currentm')
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.currentm {
		background-color: #fff;
		transition: all 0.5s ease 0s;
		a {
			display: block;
			width: 155px;
			height: 65px;
			line-height: 65px;
			text-align: center;
			font-size: 16px;
			color: #23a2eb!important;
		}
	}
</style>