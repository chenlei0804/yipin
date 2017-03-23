<template>
	<div class="aArea">
		<div class="wrap">
			<div class="Area-hd">案例专场</div>
			<div class="aArea-bd">
				<div class="hd">
					<ul>
						<li v-for='(items,index) in pic' @mouseenter="mouseenter(index,$event)" :class="{'hover':index==0}">
							<img :src=items.img1 class="img01" :id="items.id" />
							<img :src=items.img2 class="img02" />
							<span>{{items.val}}</span>
							<p>{{items.msg}}</p>
						</li>
					</ul>
				</div>
				<div class="p">
					'合肥一品效果图有限责任公司成立于2006年，是一家专注于数字视觉表现的公司，经过十多年的创新和发展 ，目前公司拥有员工近五百人，业务覆盖国内31个省和直辖市；公司主营数字化效果表现、全景图、施工图等。'
				</div>
				<div class="bd">
					<v-ecv v-show="showIndex==0?show:!show" :class="{'anima':showIndex==0}"></v-ecv>
					<v-hotv v-show="showIndex==1?show:!show" :class="{'anima':showIndex==1}"></v-hotv>
					<v-cbv v-show="showIndex==2?show:!show" :class="{'anima':showIndex==2}"></v-cbv>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import Ecv from './ecv/ecv.vue'
	import Hotv from './hotv/hotv.vue'
	import Cbv from './cbv/cbv.vue'
	export default {
		data() {
				return {
					pic: [{
						img1: '/static/aArea01-1.png',
						img2: '/static/aArea01-2.png',
						val: '家装案例',
						msg: 'ENTERPRISE CLOUD VALLEY',
						id: 1,
					}, {
						img1: '/static/aArea02-1.png',
						img2: '/static/aArea02-2.png',
						val: '工装案例',
						msg: 'HIT OFF THE VALLEY',
						id: 2,
					}, {
						img1: '/static/aArea03-1.png',
						img2: '/static/aArea03-2.png',
						val: '建筑案例',
						msg: 'CROSS BORDER VALLEY',
						id: 3,
					}],
					showIndex: 0,
					show:true
				}
			},
			components: {
				'v-ecv': Ecv,
				'v-hotv': Hotv,
				'v-cbv': Cbv
			},
			methods: {
				mouseenter: function(index, e) {
					if (index == 0) {
						$(e.target).addClass('hover').siblings().removeClass('hover')
						this.showIndex = 0
					} else if (index == 1) {
						$(e.target).addClass('hover').siblings().removeClass('hover')
						this.showIndex = 1
					} else if (index == 2) {
						$(e.target).addClass('hover').siblings().removeClass('hover')
						this.showIndex = 2
					}
				}
			}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.aArea {
		background: url(../../image/aArea.png) no-repeat top center #f7f7f7;
		padding: 70px 0 0 0;
		.aArea-bd {
			margin: 30px 0 0 0;
			ul {
				width: 519px;
				margin: 0 auto;
				overflow: hidden;
				li {
					float: left;
					width: 170px;
					border-right: 1px solid #efefef;
					text-align: center;
					cursor: pointer;
					img {
						float: left;
					}
					.img01 {
						position: relative;
						left: 55px;
						z-index: 99;
					}
					.img02 {
						opacity: 0;
						position: relative;
						left: 55px;
						margin-left: -60px;
					}
					span {
						display: block;
						margin-top: 61px;
						font-size: 16px;
					}
					p {
						display: block;
						margin-top: 10px;
						color: #b2b2b2;
						text-transform: uppercase;
					}
				}
			}
		}
		.p {
			width: 905px;
			margin: 35px auto;
			line-height: 27px;
			font-size: 14px;
			text-align: center;
		}
	}
	
	.hover {
		.img01 {
			opacity: 0;
		}
		.img02 {
			opacity: 1!important;
		}
		span {
			color: #23a2eb;
		}
	}
	
	.bd {
		.aArea01 {
			&.anima {
				animation: myOpacity 1.3s;
			}
		}
	}
	
	@keyframes myOpacity {
		from {
			opacity: 0.3;
		}
		to {
			opacity: 1;
		}
	}
</style>