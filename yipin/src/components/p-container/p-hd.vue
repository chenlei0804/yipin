<template>
	<div class="p-hd">
		<div class="wrap ulo1">
			<ul class="clearfix p-ul" v-for="(items,index) in contents">
				<li class="all-li01">{{items.content}}</li>
				<li class="all-current">
					<a href="">{{items.unlimited}}</a>
				</li>
				<li>
					<a href="" @mouseenter="hdMouseenter" @mouseleave="hdMouseleave" v-for="(cla,index) in items.classify">{{cla.claText}}</a>
				</li>
			</ul>
			<div class="p-serach clearfix">
				<form class="clearfix" action onsubmit="if(this.search_keyword.value == ''){ alert('搜索关键字不能为空！'); this.search_keyword.focus(); return false; }">
					<input type="search" class="p-txt" placeholder="请输入查询关键字" />
					<input type="submit" value="搜索" class="p-btn" />
				</form>
				<p>热门搜索：
					<a href="" @mouseenter="hsMouseenter" @mouseleave="hsMouseleave" v-for="(hotSearchs,index) in hotSearch">{{hotSearchs.hs}}</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
				return {
					contents: [{
						content: '风格分类',
						unlimited: '不限',
						classify: [{
							claText: '现代简约'
						}, {
							claText: '现代简约'
						}, {
							claText: '现代简约'
						}, {
							claText: '现代简约'
						}]
					}, {
						content: '功能分类',
						unlimited: '不限',
						classify: [{
							claText: '现代简约'
						}, {
							claText: '现代简约'
						}, {
							claText: '现代简约'
						}, {
							claText: '现代简约'
						}]
					}, {
						content: '户型分类',
						unlimited: '不限',
						classify: [{
							claText: '现代简约'
						}, {
							claText: '现代简约'
						}, {
							claText: '现代简约'
						}, {
							claText: '现代简约'
						}]
					}],
					hotSearch: [{
						hs: '平层'
					}, {
						hs: '新中式'
					}]
				}
			},
			methods: {
				hdMouseenter: function(e) {
					console.log(e.target)
					$(e.target).addClass('currenta')
				},
				hdMouseleave: function(e) {
					$(e.target).removeClass('currenta')
				},
				hsMouseenter: function(e) {
					console.log(e.target)
					$(e.target).addClass('currenths')
				},
				hsMouseleave: function(e) {
					$(e.target).removeClass('currenths')
				}
			}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.p-hd {
		padding: 10px 30px 10px 30px;
		background: url(../../image/pattern/vr-hd.jpg) no-repeat center top #fbfbfb;
		.p-ul {
			border-bottom: 1px dashed #dcdcdc;
			margin-right: 40px;
			li {
				float: left;
				height: 50px;
				line-height: 50px;
				margin: 0 5px;
				a {
					padding: 2px 9px;
					font-size: 14px;
				}
			}
		}
		.p-serach {
			padding: 20px;
			background: #f1f1f1;
			margin-right: 40px;
			form {
				float: left;
				.p-txt {
					float: left;
					width: 340px;
					height: 40px;
					line-height: 40px;
					border: 2px solid #00a7fe;
					background: #fff;
					font-size: 14px;
					padding-left: 40px;
				}
				.p-btn {
					float: left;
					width: 100px;
					height: 40px;
					text-align: center;
					line-height: 40px;
					background: #00a7fe;
					color: #fff;
					font-size: 20px;
				}
			}
			p {
				float: left;
				height: 40px;
				line-height: 40px;
				margin-left: 25px;
				color: #aaa;
				a {
					padding: 0 10px;
					color: #aaa;
				}
				.currenths {
					color: #23a2eb;
				}
			}
		}
	}
</style>