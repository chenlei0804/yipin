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
						<li>
							<a href="">一品印象</a>
							<div class="sub">
								<div class="subnav">
									<div class="subnav01">
										<h1>一品印象</h1>
									</div>
									<dl>
										<dt><a href="">企业简介</a></dt>
										<dt><a href="">新闻动态</a></dt>
										<dt><a href="">招贤纳士</a></dt>
										<dt><a href="">联系我们</a></dt>
									</dl>
								</div>
							</div>
						</li>
						<li>
							<router-link to="/pattern">案例专场</router-link>
							<div class="sub">
								<div class="subnav">
									<div class="subnav01">
										<h1>案例专场</h1>
									</div>
									<dl>
										<dt><a href="">装修效果图</a></dt>
										<dt><a href="">工装效果图</a></dt>
										<dt><a href="">建筑效果图</a></dt>
									</dl>
								</div>
							</div>
						</li>
						<li>
							<a href="">VR全景</a>
							<div class="sub">
								<div class="subnav">
									<div class="subnav01">
										<h1>VR全景</h1>
									</div>
									<dl>
										<dt><a href="">家装部分</a></dt>
										<dt><a href="">工装部分</a></dt>
									</dl>
								</div>
							</div>
						</li>
						<li>
							<a href="">实虚拟现</a>
						</li>
						<li>
							<a href="">服务范围</a>
							<div class="sub">
								<div class="subnav">
									<div class="subnav01">
										<h1>服务范围</h1>
									</div>
									<dl>
										<dt><a href="">服务流程</a></dt>
										<dt><a href="">急速改图</a></dt>
										<dt><a href="">付款方式</a></dt>
									</dl>
								</div>
							</div>
						</li>
						<li>
							<a href="">客户保障</a>
							<div class="sub">
								<div class="subnav">
									<div class="subnav01">
										<h1>服务范围</h1>
									</div>
									<dl>
										<dt><a href="">第一季</a></dt>
										<dt><a href="">第二季</a></dt>
										<dt><a href="">第三季</a></dt>
									</dl>
								</div>
							</div>
						</li>
						<li>
							<a href="">一品商学院</a>
							<div class="sub">
								<div class="subnav">
									<div class="subnav01">
										<h1>服务范围</h1>
									</div>
									<dl>
										<dt><a href="">在线课堂</a></dt>
										<dt><a href="">学习视频</a></dt>
										<dt><a href="">在线报名</a></dt>
									</dl>
								</div>
							</div>
						</li>
						<li>
							<a href="">我的一品</a>
						</li>

					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {

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
							display: none;
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
				}
			}
		}
	}
</style>