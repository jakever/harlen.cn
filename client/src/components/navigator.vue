<template>
	<nav class="nav">
		<!-- <div class="profile-bg">
			<img src="@/assets/img/bg.jpg">
		</div> -->
		<div class="profile">
			<div class="avatar">
				<router-link :to="{name: 'home'}"><img src="@/assets/img/avatar2.png"></router-link></a>
			</div>
			<hgroup>
				<h1>
					<router-link :to="{name: 'home'}">Harlen Luan</router-link>
				</h1>
				<p class="desc">
					不妄取，不妄予，不妄想，不妄求<br>生死看淡，不服就干
				</p>
			</hgroup>
			<div class="nav-links">
				<ul>
					<li>
						<router-link :to="{name: 'home'}">首页</router-link>
					</li>
					<li>
						<router-link :to="{name: 'categories'}">分类</router-link>
					</li>
					<li>
						<router-link :to="{name: 'articles'}">归档</router-link>
					</li>
					<li>
						<router-link :to="{name: 'tags'}">标签</router-link>
					</li>
					<li>
						<router-link :to="{name: 'about'}">关于</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {
    },
}
</script>
<style lang="scss">
	.nav {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		width: 320px;
		color: #fff;
		text-shadow: 8px 3px 10px #2d2d2d;
		// background: #4d4d4d;
		background: url('../assets/img/nav-bg.png') no-repeat;
		background-position: center top;
		background-size: cover;
		.profile-bg {
			img {
				max-width: 100%;
				height: auto;
			}
		}
		.profile {
			padding: 0 30px;
			margin-top: 32px;
		}
		.avatar {
			text-align: center;
			// margin-top: -76px;
			margin-bottom: 16px;
			line-height: 1;
			> a {
				display: inline-block;
				width: 110px;
				height: 110px;
				border-radius: 50%;
				border: 4px solid #fff;
				overflow: hidden;
			}
			img {
				max-width: 100%;
				height: auto;
			}
		}
		hgroup h1{
			font-size: 26px;
			text-align: center;
		}
		.desc {
			margin: 16px 0;
			padding-bottom: 16px;
			line-height: 22px;
			font-size: 14px;
			text-align: center;
			border-bottom: 1px solid #fff;
		}
		.nav-links {
			font-size: 15px;
			text-align: center;
			li > a{
				font-weight: bold;
				display: inline-block;
				padding: 3px 0;
				transition: 0.5s;
				&:hover {
					color: #8CC152;
					transform: translate3d(10px, 0, 0);
				}
			}
		}
	}
	@media (min-width: 1400px) {
		.nav {
			width: 400px;
		}
	}
</style>