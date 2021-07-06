<template>
	<div class="sotap-links">
		<swiper :options="{ loop: true }" class="link-swiper" ref="linkSwiper">
			<swiper-slide
				v-for="(x, i) in getLinks(
					isMobile() && windowWidth <= 1024 ? 3 : 5
				)"
				:key="i"
			>
				<div class="link-container">
					<div
						class="link-item"
						:data-href="y.href"
						@click="go(y.href)"
						v-for="(y, k) in x"
						:key="k"
					>
						<img :src="y.img" />
					</div>
				</div>
			</swiper-slide>
		</swiper>
		<div
			@click="swiperSlide(0, $refs.linkSwiper.swiperInstance)"
			class="swiper-prev"
		>
			<span class="mdi mdi-arrow-left"></span>
		</div>
		<div
			@click="swiperSlide(1, $refs.linkSwiper.swiperInstance)"
			class="swiper-next"
		>
			<span class="mdi mdi-arrow-right"></span>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import HomeLinks from "@/data/content/HomeLinks.json";
import { swiperSlide, isMobile } from "@/functions";

export default Vue.extend({
	components: {
		SectionTitle,
	},
	data() {
		return {
			links: HomeLinks as Array<LinkObject>,
		};
	},
	methods: {
		getLinks(perpage: number) {
			let arr: Array<Array<LinkObject>> = [];
			let start = 0;
			let end = 0;
			for (let i = 0; i < Math.ceil(this.links.length / perpage); i++) {
				start = i * perpage;
				end = start + perpage;
				arr.push(this.links.slice(start, end));
			}
			return arr;
		},
		go(url: string) {
			window.open(url);
		},
		swiperSlide,
		isMobile,
	},
	computed: {
		windowWidth() {
			return window.innerWidth;
		},
	},
	mounted() {
		window.addEventListener("load", () => {
			let swiper = document.querySelector(
				".link-swiper .swiper-wrapper"
			) as HTMLDivElement;
			Array.from(swiper.children).forEach((k) => {
				let target = k.querySelector(
					".swiper-slide .link-container .link-item"
				);
				target?.addEventListener("click", (e) => {
					e.preventDefault();
					window.open(target?.getAttribute("data-href") as string);
				});
			});
		});
	},
});
</script>

<style lang="less" scoped>
.sotap-links {
	width: 100%;
	position: relative;
	background: #222222;

	.link-swiper {
		width: 100%;
		@media screen and (min-width: 1024px) {
			padding: 32px 0;
		}

		@media screen and (max-width: 1024px) {
			padding: 16px 0;
		}

		.link-container {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.link-item {
				@media screen and (min-width: 1024px) {
					margin: 0 32px;
					&:hover {
						transform: scale(1.5);
					}
				}

				@media screen and (max-width: 1024px) {
					margin: 0 10px;
				}

				cursor: pointer;
				transition: all 0.2s ease;

				img {
					@media screen and (min-width: 1024px) {
						height: 35px;
					}

					@media screen and (max-width: 1024px) {
						height: 30px;
					}
				}
			}
		}
	}

	.swiper-prev,
	.swiper-next {
		position: absolute;
		bottom: 50%;
		transform: translateY(50%);
		opacity: 1;

		&:hover {
			opacity: 1;
		}
	}

	.swiper-prev {
		left: 0;
	}

	.swiper-next {
		right: 0;
	}
}
</style>