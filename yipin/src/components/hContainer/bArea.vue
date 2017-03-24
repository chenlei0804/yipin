<template>
	<div class="bArea">
		<div class="wrap">
			<ul class="clearfix">
				<li v-for="(bAreas,index) in contents" :style="{backgroundImage: 'url('+ bAreas.bAreaBgImg +')'}" :class="{'mag':index==4}">
					<h1>
					<img :src=bAreas.bAreaImg class="animated" @mouseover='mouseover' @mouseout='mouseout'/>
					</h1>
					<p>{{bAreas.bAreaP}}</p>
					<span>{{bAreas.bAreaSpan}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
				return {
					contents: [{
						bAreaBgImg: 'static/bArea/li01.png',
						bAreaImg: 'static/bArea/bArea01-1.png',
						bAreaP: '十周年',
						bAreaSpan: '10 ANNIVERSARY'
					}, {
						bAreaBgImg: 'static/bArea/li01.png',
						bAreaImg: 'static/bArea/bArea01-1.png',
						bAreaP: '十周年',
						bAreaSpan: '10 ANNIVERSARY'
					}, {
						bAreaBgImg: 'static/bArea/li01.png',
						bAreaImg: 'static/bArea/bArea01-1.png',
						bAreaP: '十周年',
						bAreaSpan: '10 ANNIVERSARY'
					}, {
						bAreaBgImg: 'static/bArea/li01.png',
						bAreaImg: 'static/bArea/bArea01-1.png',
						bAreaP: '十周年',
						bAreaSpan: '10 ANNIVERSARY'
					}, {
						bAreaBgImg: 'static/bArea/li01.png',
						bAreaImg: 'static/bArea/bArea01-1.png',
						bAreaP: '十周年',
						bAreaSpan: '10 ANNIVERSARY',
					}]
				}
			},
			methods: {
				mouseover: function(e) {
					console.log($(e.target).hasClass('bounce'))
					$(e.target).addClass('bounce')
				},
				mouseout: function(e) {
					if ($(e.target).hasClass('bounce') == true) {
						setTimeout(function() {
							$(e.target).removeClass('bounce')
						}, 1200)
					}
				}
			}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.bArea {
		background: url(../../image/bArea01.png) no-repeat top center;
		padding: 100px 0 37px 0;
		border-bottom: 1px solid #e6e6e6;
		ul {
			width: 1186px;
			margin: 0 auto;
			li {
				float: left;
				margin-right: 71px;
				width: 180px;
				height: 180px;
				position: relative;
				text-align: center;
				h1 {
					padding-top: 40px;
				}
				p {
					font-size: 20px;
					color: #000;
				}
				span {
					display: block;
					margin-top: 10px;
					font-size: 12px;
					color: #fff;
				}
			}
		}
		.mag {
			margin-right: 0;
		}
	}
</style>