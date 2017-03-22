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
							<li class="eArea-li">
								<img src="../../image/eArea/eArea-db01.jpg" />
								<img src="../../image/eArea-bd.jpg" class="img2" />
								<span>2016</span>
							</li>
							<li class="eArea-li">
								<img src="../../image/eArea/eArea-db02.jpg" />
								<img src="../../image/eArea-bd.jpg" class="img2" />
								<span>2015</span>
							</li>
							<li class="eArea-li">
								<img src="../../image/eArea/eArea-db03.jpg" />
								<img src="../../image/eArea-bd.jpg" class="img2" />
								<span>2014</span>
							</li>
							<li class="eArea-li">
								<img src="../../image/eArea/eArea-db04.jpg" />
								<img src="../../image/eArea-bd.jpg" class="img2" />
								<span>2013</span>
							</li>
							<li class="eArea-li">
								<img src="../../image/eArea/eArea-db01.jpg" />
								<img src="../../image/eArea-bd.jpg" class="img2" />
								<span>2012</span>
							</li>
							<li class="eArea-li">
								<img src="../../image/eArea/eArea-db03.jpg" />
								<img src="../../image/eArea-bd.jpg" class="img2" />
								<span>2008</span>
							</li>
							<li class="eArea-li">
								<img src="../../image/eArea/eArea-db02.jpg" />
								<img src="../../image/eArea-bd.jpg" class="img2" />
								<span>2006</span>
							</li>
						</ul>

					</div>
					<a class="prev01" href=""></a>
					<a class="next01" href=""></a>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
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
								margin-left: -170px;
								opacity: 0;
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
		}
	}
</style>