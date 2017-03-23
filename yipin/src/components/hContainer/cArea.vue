<template>
	<div class="cArea">
		<div class="wrap">
			<div class="Area-hd">我们的优势</div>
			<div class="cArea-hd">
				<p>一品效果图-专注于数字视觉表现</p>
				<span>YIPINGXIAOGUOTU DIAGRAM FOCUSED ON DIGITAL VISUAL PERFORMANCE</span>
			</div>
			<div class="cArea-bd">
				<div class="cAreabox cArea01" :class="{'anima01':ascrollTop==0}">
					<h1>时间久规模大</h1>
					<span>OVER TIME A LARGE SCALE</span>
					<p>一品成立于2006年，十年风雨铸就今日辉煌，沉心十年，奋进成长。现拥有8家工作室，500名专业人员，与全国1000多家装饰设计机构达成长期合作关系。</p>
				</div>
				<div class="cAreabox cArea02" :class="{'anima01':ascrollTop==0}">
					<h1>分工细品质高</h1>
					<span>HIGH-QUALITY FINE DIVISION</span>
					<p>累计20万名设计师，以专业的态度对待每一张图纸，从细节入手，严抓操作流程，一切以客户为核心。公司专门设立了分图部，为客户提供精准的品质服务。</p>
				</div>
				<div class="cAreabox cArea03" :class="{'anima02':ascrollTop==0}">
					<h1>服务优保障多</h1>
					<span>MULTI-SERVICE PROTECTION</span>
					<p>私人订制，为客户提供管家式服务。行业内首创赔付流程，节省客户时间，保障图纸质量。定期对客户进行分类回访，对反馈的问题予以解决并形成闭环。</p>
				</div>
				<div class="cAreabox cArea04" :class="{'anima02':ascrollTop==0}">
					<h1>多元化范围广</h1>
					<span>WIDE DIVERSIFIED RANGE</span>
					<p>一品以效果图为基础，精耕市场，深入拓展全景图和VR虚拟现实等多元化业务。业务覆盖国内31个省和直辖市，为全国20万名设计师提供600万次优质服务。</p>
				</div>
				<div class="cAreabox cArea05">
					<img src="../../image/cArea03.png" />
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		created() {
				var _this = this
				$(window).scroll(function() {
					if ($(this).scrollTop() >= 1500) {
						_this.ascrollTop = 0
					}
				})
			},
			data() {
				return {
					ascrollTop: 1
				}
			}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.cArea {
		background: url(../../image/cArea.jpg) no-repeat top center;
		padding: 60px 0 0 0;
		height: 791px;
		.Area-hd {
			background: url(../../image/hd01.png) no-repeat center;
		}
		.cArea-bd {
			position: relative;
			.cAreabox {
				width: 365px;
				position: absolute;
				h1 {
					font-size: 26px;
					color: #000;
					font-weight: normal;
					background: url(../../image/cArea02.png) no-repeat left center;
					padding-left: 30px;
					line-height: 1;
				}
				span {
					display: block;
					color: #cacaca;
					padding-left: 30px;
					margin-top: 10px;
				}
				p {
					font-size: 14px;
					color: #9c9c9c;
					border-top: 1px solid #a6a6a6;
					padding-top: 10px;
					margin-top: 10px;
				}
			}
			.cArea01 {
				left: 0;
				top: 45px;
			}
			.anima01 {
				animation: myAnima01 1.5s;
			}
			.cArea02 {
				left: 0;
				top: 320px;
			}
			.anima02 {
				animation: myAnima02 1.5s;
			}
			.cArea03 {
				right: 0;
				top: 45px;
			}
			.anima03 {
				animation: myAnima03 1.5s;
			}
			.cArea04 {
				right: 0;
				top: 320px;
			}
			.anima04 {
				animation: myAnima04 1.5s;
			}
			.cArea05 {
				position: absolute;
				width: 454px;
				left: 50%;
				margin-left: -227px;
				top: 20px;
			}
		}
	}
	
	@keyframes myAnima01 {
		from {
			left: -365px;
			opacity: 0;
		}
		to {
			left: 0;
			opacity: 1;
		}
	}
	@keyframes myAnima02 {
		from {
			right: -365px;
			opacity: 0;
		}
		to {
			right: 0;
			opacity: 1;
		}
	}
</style>