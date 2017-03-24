<template>
	<div class="banner">
		<div class="bd">
			<ul>
				<li v-for='(sd,index) in shufflingData' v-if='shufflingId==index' :class="{'carAnim':shufflingId==index}">
					<a><img :src="sd.url" /></a>
				</li>
			</ul>
		</div>
		<div class="wrap">
			<div class="hd clearfix">
				<ul class="car-ul" v-for="(cd,index) in shufflingData">
					<li :class="{'bgColor':shufflingId==index}" v-on:mouseover='mouseover(index,$event)' v-on:mouseout='mouseout'>{{index}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		mounted: function() {
			var _this = this;
			_this.timer = setInterval(function() {
				if (_this.shufflingId >= 0 && _this.shufflingId < _this.shufflingData.length - 1) {
					_this.shufflingId = parseInt(_this.shufflingId) + 1;
				} else if (_this.shufflingId == _this.shufflingData.length - 1) {
					_this.shufflingId = 0;
				}
			}, 5000)
		},
		methods: {
			mouseover: function(index, $event) {
				this.shufflingId = index;
				console.log(this.timer)
				clearInterval(this.timer)
			},
			mouseout: function() {
				var _this = this
				_this.timer = setInterval(function() {
					if (_this.shufflingId >= 0 && _this.shufflingId < _this.shufflingData.length - 1) {
						_this.shufflingId = parseInt(_this.shufflingId) + 1;
					} else if (_this.shufflingId == _this.shufflingData.length - 1) {
						_this.shufflingId = 0;
					}
				}, 5000)
			}
		},
		data() {
			return {
				shufflingId: 0,
				shufflingData: [{
					href: '1',
					url: 'static/01.jpg'
				}, {
					href: '2',
					url: 'static/02.jpg'
				}, {
					href: '3',
					url: 'static/03.jpg'
				}, {
					href: '4',
					url: 'static/04.jpg'
				}, {
					href: '5',
					url: 'static/05.jpg'
				}, {
					href: '6',
					url: 'static/06.jpg'
				}, {
					href: '7',
					url: 'static/07.jpg'
				}],
				timer: 0
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.banner {
		position: relative;
		width: 100%;
		overflow: hidden;
		z-index: 0;
		.bd {
			position: relative;
			left: 50%;
			width: 1900px;
			margin: 0 0 0 -950px;
			text-align: center;
			overflow: hidden;
			li {
				opacity: 1;
				&.carAnim {
					animation: carOpacity 1s;
				}
			}
		}
		.hd {
			position: absolute;
			bottom: 30px;
			width: 1200px;
			text-align: center;
			z-index: 999;
			.car-ul {
				display: inline-block;
				zoom: 1;
				li {
					float: left;
					width: 50px;
					height: 5px;
					margin-right: 10px;
					text-indent: -9999em;
					background-color: #7a7e81;
					cursor: pointer;
					&:hover {
						background-color: #23a2eb;
					}
					&.bgColor {
						background-color: #23a2eb;
					}
				}
			}
		}
	}
	
	@keyframes carOpacity {
		from {
			opacity: 0.7;
		}
		to {
			opacity: 1;
		}
	}
</style>