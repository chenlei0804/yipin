<template>
	<div class="leftsead">
		<ul>
			<li class="qqq">
				<a href="">
					<div class="shows">在线客服</div>
				</a>
			</li>
			<li class="weixin" @mouseenter="weixinenter" @mouseleave="weixinleave" >
				<img src="../../image/weixin.jpg" v-if="weixinShow==0" class="imghide" width="200" height="200" />
				<div class="shows">官方微信</div>
			</li>
			<li class="tel">
				<a href="">
					<div class="sideBox" style="width: 72px; opacity: 0.8; background: rgb(208, 145, 24);">
						<div class="hides">
							<span>
								<em>
									"&nbsp;13966759087"
									<br />
									"&nbsp;18133693620"
								</em>
							</span>
						</div>
						<div class="shows">客服电话</div>
					</div>
				</a>
			</li>
			<li class="qqq01">
				<a href="">
					<div class="shows">在线留言</div>
				</a>
			</li>
			<li id="toolBackTop" class="gotop">
				<a href="" onclick="window.scrollTop(0,0);return false">
					<div class="shows">返回顶部</div>
				</a>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return {
			weixinShow:1
		}
	},
	methods:{
		weixinenter:function(){
			this.weixinShow = 0
			console.log(11111)
		},
		weixinleave:function(){
			this.weixinShow = 1
			console.log(22222)
		}
	}
}
</script>
<style lang="less" rel="stylesheet/less">
	.leftsead {
		width: 72px;
		position: fixed;
		top: 30%;
		right: 0;
		z-index: 9999999;
		li {
			width: 100%;
			height: 72px;
			margin-top: 1px;
			clear: both;
			float: right;
			position: relative;
		}
		.shows {
			float: right;
			width: 72px;
			height: 29px;
			color: #fff;
			padding-top: 43px;
			text-align: center;
			position: absolute;
			right: 0;
			top: 0;
		}
		.qqq {
			.shows {
				background: url(../../image/qqq.png) no-repeat center 12px #6da9de;
			}
		}
		.imghide {
			position: absolute;
			right: 72px;
			top: 0;
		}
		.weixin {
			.shows {
				background: url(../../image/eixin.png) no-repeat center 11px #78c340;
			}
		}
		.tel {
			position: relative;
			background: #fbb01f;
			.sideBox {
				position: absolute;
				width: 72px;
				height: 72px;
				top: 0;
				right: 0;
				transition: all 0.3s;
				background: #d09118;
				opacity: 0.8;
				color: #fff;
				overflow: hidden;
				.hieds {
					em {
						height: 72px;
						padding-left: 15px;
						font-size: 23px;
					}
				}
			}
			.shows {
				background: url(../../image/ftel.png) no-repeat center 12px #fbb01f;
			}
		}
		.qqq01 {
			.shows {
				background: url(../../image/qq1.png) no-repeat center 12px #6da9de;
			}
		}
		.gotop {
			background: url(../../image/gotop.png) no-repeat center 18px #666;
		}
	}
</style>