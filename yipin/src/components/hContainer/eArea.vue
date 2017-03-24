<template>
	<div class="eArea">
		<div class="wrap">
			<div class="Area-hd">发展历程</div>
			<div class="eArea-hd">
				<p class="p1">DEVELOPMENT HISTORY</p>
				<p class="p2">
					<img src="../../image/eArea.jpg" />
				</p>
			</div>
			<div class="eArea-bd">
				<div class="hd">
					<div class="tempWrap">
						<ul class="clearfix eArea-ul">
							<li class="eArea-li" v-for="(eAreas,index) in eAreaContent" @mouseenter="eAreaMouseenter(index,$event)" @mouseleave="eAreaMouseleave">
								<img :src=eAreas.eAreaImgA />
								<img :src=eAreas.eAreaImgB class="img2" />
								<span>{{eAreas.eAreaSpan}}</span>
							</li>
						</ul>
					</div>
					<a class="prev01" @click='prev01(clickIndex)'></a>
					<a class="next01" @click='next01(clickIndex)'></a>
				</div>
				<div class="bd">
					<div v-for="(bdTexts,index) in bdText" v-if="bdShow==index" :class="{'bdShow':index==0}" class="bdShow02">
						<i>{{bdTexts.dateText}}</i>
						<p>{{bdTexts.charText}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
				return {
					bdShow: 0,
					eAreaContent: [{
						eAreaImgA: 'static/eArea/eArea-db01.jpg',
						eAreaImgB: 'static/eArea/eArea-bd.jpg',
						eAreaSpan: '2016'
					}, {
						eAreaImgA: 'static/eArea/eArea-db02.jpg',
						eAreaImgB: 'static/eArea/eArea-bd.jpg',
						eAreaSpan: '2015'
					}, {
						eAreaImgA: 'static/eArea/eArea-db03.jpg',
						eAreaImgB: 'static/eArea/eArea-bd.jpg',
						eAreaSpan: '2014'
					}, {
						eAreaImgA: 'static/eArea/eArea-db04.jpg',
						eAreaImgB: 'static/eArea/eArea-bd.jpg',
						eAreaSpan: '2013'
					}, {
						eAreaImgA: 'static/eArea/eArea-db01.jpg',
						eAreaImgB: 'static/eArea/eArea-bd.jpg',
						eAreaSpan: '2012'
					}, {
						eAreaImgA: 'static/eArea/eArea-db03.jpg',
						eAreaImgB: 'static/eArea/eArea-bd.jpg',
						eAreaSpan: '2008'
					}, {
						eAreaImgA: 'static/eArea/eArea-db02.jpg',
						eAreaImgB: 'static/eArea/eArea-bd.jpg',
						eAreaSpan: '2006'
					}],
					bdText: [{
						dateText: '2016',
						charText: '一品十周年， 公司在拓展业务的同时， 进一步完善员工的福利， 让员工在工作之余， 依然能够享受卓越的生活品质， 如果您和我们一样认同一品的企业文化， 我们期待你的加入。 '
					}, {
						dateText: '2015',
						charText: '这一年， 一品看的更远， 杭州公司成立， 探索虚拟现实（ VR）、 增强现实（ AR）、 VR视频和全景， 致力于为客户带来更完美的体验， 将目光看向行业的未来。 '
					}, {
						dateText: '2014',
						charText: '一品在2014年取得极大的进步，年初成立施工图部门，4月份成立改图部，9月份成立售后部门，为了让客户有更好的体验，一品成为首家推出赔付制度的效果图公司。 '
					}, {
						dateText: '2013',
						charText: '在一品取得令人瞩目的业绩之后，公司不满足现状，积极开辟新业务，成为安徽省第一家引进全景业务的效果图公司。 '
					}, {
						dateText: '2012',
						charText: '经过6年的积累，一品公司厚积薄发，团队人才稳定，业务量大幅增长，销售二部成立，扩大公司营销部门，成为安徽省成长速度最快的效果图公司。'
					}, {
						dateText: '2008',
						charText: '随着业务量的增加，一品推出订单管理系统，订单进度、质量和客户信息能及时得到反馈，简化订单流程，使客户在最短时间内得到高品质的效果图。 '
					}, {
						dateText: '2006',
						charText: '一品公司成立，公司创始人带着最初团队，挤在一间小办公室里，白天和客户谈，晚上加班做图，靠着良好的工作态度，一点点地积累原始客户。'
					}],
					clickIndex: 1
				}
			},
			methods: {
				eAreaMouseenter: function(index, e) {
					$(e.target).find('.img2').css('opacity', '1')
					this.bdShow = index
					console.log($('div').find('.bdShow'))
					if ($('div').hasClass('bdShow') == false) {
						$('div').find('.bdShow02').stop().animate({'opacity': 0.3}, 30, function() {
							$('div').find('.bdShow02').stop().animate({'opacity': 1}, 500)
						})
					} else {
						$('div').find('.bdShow02').removeClass('bdShow')
					}

				},
				eAreaMouseleave: function(e) {
					$(e.target).find('.img2').css('opacity', '0')
				},
				prev01: function(index) {
					if (this.clickIndex <= 3 && this.clickIndex > 1) {
						console.log(index)
						this.clickIndex = index - 1
						var num2 = index - 2
						const num = -240 * num2 + 'px'
						$('.eArea-ul').animate({"margin-left": num}, 500)
					}
				},
				next01: function(index) {
					if (this.clickIndex <= 2) {
						this.clickIndex = index + 1
						console.log(this.clickIndex)
						const num = -240 * index + 'px'
						$('.eArea-ul').animate({"margin-left": num}, 500)
					}
				}
			}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.eArea {
		.eArea-hd {
			margin-top: 50px;
			padding-bottom: 20px;
			.p1 {
				text-align: center;
				font-size: 18px;
				color: #b1b1b1;
			}
			.p2 {
				text-align: center;
				margin-top: 50px;
			}
		}
		.eArea-bd {
			position: relative;
			margin-top: 60px;
			background: url(../../image/eArea-bg.jpg) no-repeat center;
			.hd {
				.tempWrap {
					overflow: hidden;
					position: relative;
					width: 1200px;
					.eArea-ul {
						width: 1680px;
						left: 0px;
						position: relative;
						overflow: hidden;
						padding: 0px;
						margin: 0 0 34px 0;
						.eArea-li {
							float: left;
							width: 170px;
							margin: 0 35px;
							cursor: pointer;
							img {
								width: 170px;
								height: 92px;
							}
							.img2 {
								position: absolute;
								opacity: 0;
								margin-left: -170px;
							}
							span {
								display: block;
								margin-top: 10px;
								font-size: 16px;
								text-align: center;
								font-weight: bold;
							}
						}
					}
				}
				.prev01,
				.next01 {
					position: absolute;
					top: 80px;
					width: 26px;
					height: 17px;
				}
				.prev01 {
					left: -30px;
					right: auto;
					background: url(../../image/left.jpg) no-repeat;
				}
				.next01 {
					left: auto;
					right: -30px;
					background: url(../../image/right.jpg) no-repeat;
				}
			}
			.bd {
				i {
					position: absolute;
					top: -170px;
					left: 290px;
					font-size: 38px;
					color: #0797ea;
				}
				p {
					position: absolute;
					top: -178px;
					left: 442px;
					width: 480px;
					font-size: 14px;
					color: #888;
					line-height: 25px;
				}
			}
			.bdShow {
				opacity: 1;
			}
			.bdShow02 {}
		}
	}
</style>