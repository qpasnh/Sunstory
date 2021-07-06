<template>
	<div class="sotap-blog">
		<section-title>
			<template #title>Blog</template>
			<template #subtitle>博文博览</template>
			<template #desc
				>我们会在 SoTap Blog 上更新时事，下面是最近的几篇博文<br /><small
					v-if="isMobile()"
					>p.s. 左右滑动可查看更多哦</small
				></template
			>
		</section-title>
		<div class="swiper-box">
			<div
				v-if="blogStatus === ''"
				@click="swiperSlide(0, $refs.blogSwiper.swiperInstance)"
				class="swiper-prev"
			>
				<span class="mdi mdi-arrow-left"></span>
			</div>
			<div
				v-if="blogStatus === ''"
				@click="swiperSlide(1, $refs.blogSwiper.swiperInstance)"
				class="swiper-next"
			>
				<span class="mdi mdi-arrow-right"></span>
			</div>
			<status :status="blogStatus" />
			<swiper
				class="blog-swiper"
				ref="blogSwiper"
				:options="getRealOptions()"
			>
				<swiper-slide v-for="(y, k) in blogs" :key="k">
					<blog-card
						:href="y.permalink"
						class="blog-post"
						:ref="'post-' + (k + 1)"
						:class="'post-' + (k + 1)"
						:key="2 * k + 1"
						:bg="y.bg"
					>
						<template #title>
							{{ y.title }}
						</template>
						<template #text>
							{{ y.text }}
						</template>
					</blog-card>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import BlogCard from "@/components/BlogCard.vue";
import removeMd from "remove-markdown";
import SectionTitle from "@/components/SectionTitle.vue";
import BlogSwiperOptions from "@/data/config/BlogSwiperOptions.json";
import { isMobile, swiperSlide } from "@/functions";
import Status from "@/components/Status.vue";

export default Vue.extend({
	data() {
		return {
			blogs: [] as Array<BlogInstance>,
			firstId: 0,
			lastId: 3,
			swiperOptions: BlogSwiperOptions,
			blogStatus: "loading",
		};
	},
	methods: {
		getBlogPosts() {
			axios
				.get("https://blog.sotap.org/api/posts?pageSize=6")
				.then((r) => {
					let data: Array<BlogInstance> = r.data.data;
					let textLenLimit = 200;
					let _blogs: Array<BlogInstance> = [];
					data.forEach((k) => {
						let quote = /\[\/\/\]:\((.*?)\)/.exec(k.text);
						let text = this.removeComment(removeMd(k.text));
						if (quote === null) return true;
						_blogs.push({
							title: k.title,
							cid: k.cid,
							permalink: k.permalink,
							text:
								text.substr(
									text[0] === ">" ? 1 : 0,
									textLenLimit
								) + (k.text.length > textLenLimit ? "..." : ""),
							created: k.created,
							bg: quote[1],
						});
					});
					this.blogStatus = "";
					this.blogs = _blogs.reverse();
				})
				.catch((err) => {
					this.blogStatus = "error";
				});
		},
		removeComment(str: string) {
			return str.replace(/\[\/\/\]:\(.*?\)/g, "").replace(/[\r\n]/g, "");
		},
		swiperSlide,
		isMobile,
		getRealOptions() {
			if (this.isMobile() && window.innerWidth <= 1024) {
				this.swiperOptions.slidesPerView = 1;
				this.swiperOptions.spaceBetween = 0;
			}
			return this.swiperOptions;
		},
	},
	mounted() {
		this.getBlogPosts();
        // fix unbinded swiper clonings.
        // https://github.com/nolimits4web/swiper/issues/2629
		window.addEventListener("load", () => {
			let swiper = document.querySelector(
				".blog-swiper .swiper-wrapper"
			) as HTMLDivElement;
			Array.from(swiper.children).forEach((k) => {
				let target = k.querySelector(".swiper-slide .blog-content");
                target?.addEventListener("click", e => {
                    e.preventDefault();
                    window.open(target?.getAttribute("data-href") as string);
                })
			});
		});
	},
	components: {
		BlogCard,
		SectionTitle,
		Status,
	},
});
</script>

<style lang="less" scoped>
.sotap-blog {
	width: 100%;
	margin-top: 32px;
	position: relative;

	.swiper-box {
		margin: auto;
		position: relative;
		max-width: 1200px;
	}

	.blog-posts {
		display: inline-flex;
		align-items: flex-start;
		justify-content: center;
		position: relative;

		.blog-post {
			margin-left: 16px;
			margin-bottom: 16px;
			position: relative;

			&:first-child {
				margin-left: 0;
			}

			&:nth-child(3n) {
				margin-right: 0;
			}
		}
	}
}

.swiper-next,
.swiper-prev {
	position: absolute;
	bottom: 50%;
	transform: translateY(50%);
	z-index: 200;

	@media screen and (max-width: 690px) {
		display: none;
	}
}

.swiper-next {
	right: calc(-48px - 16px);
}

.swiper-prev {
	left: calc(-48px - 16px);
}
</style>