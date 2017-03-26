<!--工装案例-->
<template>
	<div class="aArea01">
		<div class="box01 a1" v-on:mouseenter="mouseentera" v-on:mouseleave="mouseleave" :class="{'anima03':hscrollTop==0,'opacitys':hscrollTop==0}">
			<img src="../../../image/hotv/h01.jpg" />
			<div class="a2" v-show="showa">
				<span></span>
				<h1>办公空间办公室效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box02 a1" v-on:mouseenter="mouseenterb" v-on:mouseleave="mouseleave" :class="{'anima03':hscrollTop==0,'opacitys':hscrollTop==0}">
			<img src="../../../image/hotv/h02.jpg" />
			<div class="a2" v-show="showb">
				<span></span>
				<h1>办公空间大堂效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box03 a1" v-on:mouseenter="mouseenterc" v-on:mouseleave="mouseleave" :class="{'anima03':hscrollTop==0,'opacitys':hscrollTop==0}">
			<img src="../../../image/hotv/h03.jpg" />
			<div class="a2" v-show="showc">
				<span></span>
				<h1>办公空间大厅效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box04 a1" v-on:mouseenter="mouseenterd" v-on:mouseleave="mouseleave" :class="{'anima03':hscrollTop==0,'opacitys':hscrollTop==0}">
			<img src="../../../image/hotv/h04.jpg" />
			<div class="a2" v-show="showd">
				<span></span>
				<h1>办公空间会议室效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box05 a1" v-on:mouseenter="mouseentere" v-on:mouseleave="mouseleave" :class="{'anima03':hscrollTop==0,'opacitys':hscrollTop==0}">
			<img src="../../../image/hotv/h05.jpg" />
			<div class="a2" v-show="showe">
				<span></span>
				<h1>办公空间活动室效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box06 a1" v-on:mouseenter="mouseenterf" v-on:mouseleave="mouseleave" :class="{'anima03':hscrollTop==0,'opacitys':hscrollTop==0}">
			<img src="../../../image/hotv/h06.jpg" />
			<div class="a2" v-show="showf">
				<span></span>
				<h1>办公空间接待室效果图</h1>
				<a href="">
					<img src="../../../image/aArea01.png" />
				</a>
			</div>
		</div>
		<div class="box07 a1" v-on:mouseenter="mouseenterg" v-on:mouseleave="mouseleave" :class="{'anima03':hscrollTop==0,'opacitys':hscrollTop==0}">
			<img src="../../../image/hotv/h07.jpg" />
			<div class="a2" v-show="showg">
				<span></span>
				<h1>办公空间开放办公区效果图</h1>
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
				return {
					showa: false,
					showb: false,
					showc: false,
					showd: false,
					showe: false,
					showf: false,
					showg: false,
					hscrollTop:this.hscrollTop
				}
			},
			props:['hscrollTop'],
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