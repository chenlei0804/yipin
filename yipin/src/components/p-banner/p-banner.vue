<template>
	<div class="pBanner">
		<div id="pBd">
			<ul>
				<li>
					<a href="">
						<img src="../../image/pattern/pBannerBg.jpg" class="pImg" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style lang="less" rel="stylesheet/less">
	.pBanner {
		position: relative;
		width: 100%;
		overflow: hidden;
		z-index: 3;
		.pBd {
			position: relative;
			left: 50%;
			width: 1900px;
			margin: 0 0 0 -950px;
			text-align: center;
			overflow: hidden;
			.pImg {
				width: 100%!important;
				height: 335px!important;
			}
		}
	}
</style>