<!--建筑案例-->
<template>
	<div class="aArea01">
		<div class="box01 a1" v-on:mouseenter="mouseentera" v-on:mouseleave="mouseleave" :class="{'anima03':bscrollTop==0,'opacitys':bscrollTop==0}">
			<img src="../../../image/cbv/c01.jpg" />
			<div class="a2" v-show="showa">
				<span></span>
				<h1>单体建筑效果</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box02 a1" v-on:mouseenter="mouseenterb" v-on:mouseleave="mouseleave" :class="{'anima03':bscrollTop==0,'opacitys':bscrollTop==0}">
			<img src="../../../image/cbv/c02.jpg" />
			<div class="a2" v-show="showb">
				<span></span>
				<h1>规划鸟巢建筑效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box03 a1" v-on:mouseenter="mouseenterc" v-on:mouseleave="mouseleave" :class="{'anima03':bscrollTop==0,'opacitys':bscrollTop==0}">
			<img src="../../../image/cbv/c03.jpg" />
			<div class="a2" v-show="showc">
				<span></span>
				<h1>门头建筑效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box04 a1" v-on:mouseenter="mouseenterd" v-on:mouseleave="mouseleave" :class="{'anima04':bscrollTop==0,'opacitys':bscrollTop==0}">
			<img src="../../../image/cbv/c04.jpg" />
			<div class="a2" v-show="showd">
				<span></span>
				<h1>其他建筑效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box05 a1" v-on:mouseenter="mouseentere" v-on:mouseleave="mouseleave" :class="{'anima05':bscrollTop==0,'opacitys':bscrollTop==0}">
			<img src="../../../image/cbv/c05.jpg" />
			<div class="a2" v-show="showe">
				<span></span>
				<h1>群体建筑效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box06 a1" v-on:mouseenter="mouseenterf" v-on:mouseleave="mouseleave" :class="{'anima06':bscrollTop==0,'opacitys':bscrollTop==0}">
			<img src="../../../image/cbv/c06.jpg" />
			<div class="a2" v-show="showf">
				<span></span>
				<h1>群体</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box07 a1" v-on:mouseenter="mouseenterg" v-on:mouseleave="mouseleave" :class="{'anima07':bscrollTop==0,'opacitys':bscrollTop==0}">
			<img src="../../../image/cbv/c07.jpg" />
			<div class="a2" v-show="showg">
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
		created() {
				var _this = this
				$(window).scroll(function() {
					console.log($(this).scrollTop())
					if ($(this).scrollTop() >= 500) {
						_this.bscrollTop = 0
					}
				})
			},
			data() {
				return {
					showa: false,
					showb: false,
					showc: false,
					showd: false,
					showe: false,
					showf: false,
					showg: false,
					bscrollTop: 1
				}
			},
			methods: {
				mouseentera: function() {
					this.showa = true
				},
				mouseenterb: function() {
					this.showb = true
				},
				mouseenterc: function() {
					this.showc = true
				},
				mouseenterd: function() {
					this.showd = true
				},
				mouseentere: function() {
					this.showe = true
				},
				mouseenterf: function() {
					this.showf = true
				},
				mouseenterg: function() {
					this.showg = true
				},
				mouseleave: function() {
					this.showa = false,
						this.showb = false,
						this.showc = false,
						this.showd = false,
						this.showe = false,
						this.showf = false,
						this.showg = false
				}
			}
	}
</script>
<style lang="less" rel="stylesheet/less">
	@import "../../../less/index.less";
</style>