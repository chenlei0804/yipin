<template>
	<div class="header">
		<div class="toArea">
			<div class="wrap">
				<!--logo图片-->
				<div class="logo">
					<a href="/">
						<img src="../../image/logo.jpg" />
					</a>
				</div>
				<!--导航栏-->
				<div class="nav">
					<ul class="clearfix">
						<li v-for="(heads,index) in headVal" @mouseenter="navShow" @mouseleave="navAnimatHide">
							<a :href=heads.urlPath>{{heads.navContent}}</a>
							<div class="sub navHide" style="height: 0;">
								<div class="subnav">
									<div class="subnav01">
										<h1>{{heads.selectContent}}</h1>
									</div>
									<dl>
										<dt v-for="classifys in heads.selectClassify"><a href="">{{classifys.sc}}</a></dt>
									</dl>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
				return {
					headVal: [{
						navContent: '一品印象',
						selectContent: '一品印象',
						urlPath:'',
						selectClassify: [{
							sc: '企业简介'
						}, {
							sc: '新闻动态'
						}, {
							sc: '招贤纳士'
						}, {
							sc: '联系我们'
						}]
					}, {
						navContent: '案例专场',
						selectContent: '案例专场',
						urlPath:'#/pattern',
						selectClassify: [{
							sc: '家装效果图'
						}, {
							sc: '工装效果图'
						}, {
							sc: '建筑效果图'
						}]
					}, {
						navContent: 'VR全景',
						selectContent: 'VR全景',
						urlPath:'',
						selectClassify: [{
							sc: '家装部分'
						}, {
							sc: '工装部分'
						}]
					}, {
						navContent: '虚拟现实',
					}, {
						navContent: '服务范围',
						selectContent: '服务范围',
						urlPath:'',
						selectClassify: [{
							sc: '服务流程'
						}, {
							sc: '急速改图'
						}, {
							sc: '付款方式'
						}]
					}, {
						navContent: '客户保障',
						selectContent: '客户保障',
						urlPath:'',
						selectClassify: [{
							sc: '第一季'
						}, {
							sc: '第二季'
						}, {
							sc: '第三季'
						}]
					}, {
						navContent: '一品商学院',
						selectContent: '一品商学院',
						urlPath:'',
						selectClassify: [{
							sc: '在线课堂'
						}, {
							sc: '学习视频'
						}, {
							sc: '在线服务'
						}]
					}, {
						navContent: '我的一品',
						urlPath:'',
					}]
				}
			},
			methods: {
				navShow: function(e) {
					if ($(e.target).find('h1').text() !== '') {
						$(e.target).find('.sub').removeClass('navHide').stop().animate({
							height: '45px'
						}, 500)
					}
				},
				navAnimatHide: function(e) {
					if ($(e.target).find('h1').text() !== '') {
						$(e.target).find('.sub').stop().animate({
							height: 0
						}, 500, function() {
							$(e.target).find('.sub').addClass('navHide')
						})
					}
				}
			}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.header {
		padding-top: 65px;
		.toArea {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 100;
			background-color: #fff;
			border-bottom: 1px solid #ccc;
			.logo {
				float: left;
				width: 180px;
				height: 65px;
			}
			.nav {
				float: right;
				margin-right: 1px;
				ul {
					overflow: hidden;
					li {
						float: left;
						width: 125px;
						text-align: center;
						line-height: 65px;
						font-size: 16px;
						cursor: pointer;
						&:hover {
							background-color: #23a2eb;
						}
						a {
							color: #555;
							display: block;
							transition-duration: 0.3s, 0.3s;
							text-decoration: none;
							&:hover {
								color: #fff;
							}
						}
						.sub {
							position: absolute;
							background: url(../../image/nav.png) repeat;
							width: 100%;
							left: 0;
							z-index: 99;
							.subnav {
								width: 965px;
								margin: 0 auto;
								padding-left: 235px;
								.subnav01 {
									float: left;
									h1 {
										display: block;
										line-height: 45px;
										font-size: 18px;
										color: #fff;
										font-weight: normal;
										margin-top: 3px;
									}
								}
								dl {
									float: left;
									height: 45px;
									line-height: 45px;
									margin-left: 25px;
									dt {
										float: left;
										width: 125px;
										color: #aeadab;
										a {
											color: #fff;
											padding: 0 5px;
										}
									}
								}
							}
						}
						.navHide {
							display: none;
						}
					}
				}
			}
		}
	}
</style>