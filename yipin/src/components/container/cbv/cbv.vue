<!--建筑案例-->
<template>
	<div class="aArea01">
		<div class="box01 a1"  v-on:mouseenter="mouseentera" v-on:mouseleave="mouseleave" :class="{'hover':hoverIdx==0,'hide':hoverIdx==-1}">
			{{hoverIdx}}
			<img src="../../../image/cbv/c01.jpg" />
			<div class="a2">
				<span></span>
				<h1>单体建筑效果</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box02 a1">
			<img src="../../../image/cbv/c02.jpg" />
			<div class="a2">
				<span></span>
				<h1>规划鸟巢建筑效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box03 a1">
			<img src="../../../image/cbv/c03.jpg" />
			<div class="a2">
				<span></span>
				<h1>门头建筑效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box04 a1">
			<img src="../../../image/cbv/c04.jpg" />
			<div class="a2">
				<span></span>
				<h1>其他建筑效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box05 a1">
			<img src="../../../image/cbv/c05.jpg" />
			<div class="a2">
				<span></span>
				<h1>群体建筑效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box06 a1">
			<img src="../../../image/cbv/c06.jpg" />
			<div class="a2">
				<span></span>
				<h1>群体</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box07 a1">
			<img src="../../../image/cbv/c07.jpg" />
			<div class="a2">
				<span></span>
				<h1>群体</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
				hoverIdx: -1
			},
			methods: {
				mouseentera: function() {
					this.hoverIdx = 0
					console.log(this)
				},
				mouseleave: function() {
					this.hoverIdx = -1
					console.log(this.hoverIdx)
				}
			}
	}
</script>
<style lang="less" rel="stylesheet/less">
	@import "../../../less/index.less";

</style>