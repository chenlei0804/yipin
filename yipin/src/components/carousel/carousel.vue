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
				<ul class="car-ul">
					<li :class="{'hover': shufflingId==0,'bgColor':shufflingId==0}" v-on:mouseover='mouseovera'>1</li>
					<li :class="{'hover': shufflingId==1,'bgColor':shufflingId==1}" v-on:mouseover='mouseoverb'>2</li>
					<li :class="{'hover': shufflingId==2,'bgColor':shufflingId==2}" v-on:mouseover='mouseoverb'>3</li>
					<li :class="{'hover': shufflingId==3,'bgColor':shufflingId==3}" v-on:mouseover='mouseoverd'>4</li>
					<li :class="{'hover': shufflingId==4,'bgColor':shufflingId==4}" v-on:mouseover='mouseovere'>5</li>
					<li :class="{'hover': shufflingId==5,'bgColor':shufflingId==5}" v-on:mouseover='mouseoverf'>6</li>
					<li :class="{'hover': shufflingId==6,'bgColor':shufflingId==6}" v-on:mouseover='mouseoverg'>7</li>
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
			var timer = setInterval(function() {
				if (_this.shufflingId >= 0 && _this.shufflingId < _this.shufflingData.length - 1) {
					_this.shufflingId = parseInt(_this.shufflingId) + 1;
				} else if (_this.shufflingId == _this.shufflingData.length - 1) {
					_this.shufflingId = 0;
				}
				//				console.log(timer)
			}, 5000)
		},
		methods: {
			mouseovera: function() {
				this.shufflingId = 0;
			},
			mouseoverb: function() {
				this.shufflingId = 1;
			},
			mouseoverc: function() {
				this.shufflingId = 2;
			},
			mouseoverd: function() {
				this.shufflingId = 3;
			},
			mouseovere: function() {
				this.shufflingId = 4;
			},
			mouseoverf: function() {
				this.shufflingId = 5;
			},
			mouseoverg: function() {
				this.shufflingId = 6;
			}
		},
		data() {
			return {
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
				shufflingId: 0
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