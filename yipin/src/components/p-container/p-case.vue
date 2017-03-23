<template>
	<div>
		<div class="p-case">
			<div class="wrap">
				<ul class="clearfix">
					<li v-for="items in contents">
						<a href="">
							<img :src=items.imgs />
							<span>{{items.span}}</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="page">
			<span v-for="(pages,index) in pageVal" >
				<a @mouseenter="pMouseenter" @mouseleave="pMouseleave" href="">{{pages.homePage}}</a>
				<a @mouseenter="pMouseenter" @mouseleave="pMouseleave" href="">{{pages.pageUp}}</a>
				<a @mouseenter="pMouseenter" @mouseleave="pMouseleave" v-for="(pageTexts,index) in pages.pageText" :href=pageTexts.pagePurl :class="{'current':index==curIdx}" >{{index+1}}</a>
				<!--&nbsp;-->
				<a @mouseenter="pMouseenter" @mouseleave="pMouseleave" href="">{{pages.nextPage}}</a>
				<a @mouseenter="pMouseenter" @mouseleave="pMouseleave" href="">{{pages.endPage}}</a>
			</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
				return {
					curIdx: 0,
					contents: [{
						imgs: 'static/p-container/case01.jpg',
						span: '衣帽间效果图'

					}, {
						imgs: 'static/p-container/case01.jpg',
						span: '衣帽间效果图'
					}, {
						imgs: 'static/p-container/case01.jpg',
						span: '衣帽间效果图'
					}, {
						imgs: 'static/p-container/case01.jpg',
						span: '衣帽间效果图'
					}, {
						imgs: 'static/p-container/case01.jpg',
						span: '衣帽间效果图'
					}, {
						imgs: 'static/p-container/case01.jpg',
						span: '衣帽间效果图'
					}, {
						imgs: 'static/p-container/case01.jpg',
						span: '衣帽间效果图'
					}, {
						imgs: 'static/p-container/case01.jpg',
						span: '衣帽间效果图'
					}, {
						imgs: 'static/p-container/case01.jpg',
						span: '衣帽间效果图'
					}],
					pageVal: [{
						homePage: '首页',
						pageUp: '上一页',
						nextPage: '下一页',
						endPage: '尾页',
						pageText: [{
							pagePurl: '#'
						}, {
							pagePurl: '#'
						}]
					}]
				}
			},
			methods: {
				pMouseenter: function(e) {
					console.log(e.target)
					$(e.target).addClass('currents')
				},
				pMouseleave:function(e){
					$(e.target).removeClass('currents')
				}
			}
	}
</script>

<style lang="less" rel="stylesheet/less">
	.p-case {
		margin-top: 15px;
		li {
			float: left;
			width: 355px;
			padding: 10px;
			border: 1px solid #e1e1e1;
			margin: 0 18px 25px 0;
			img {
				width: 355px;
				height: 265px;
			}
			span {
				display: block;
				margin-top: 13px;
				color: #000;
				font-size: 14px;
			}
		}
	}
	
	.page {
		padding: 0 0 40px;
		line-height: 24px;
		text-align: center;
	}
</style>