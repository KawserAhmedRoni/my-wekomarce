"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BannerSlider() {
	return (
		<Swiper
			spaceBetween={10}
			slidesPerView={1}
			loop={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
		>
			<SwiperSlide>
				<a href="#0" className="banner__image">
					<img src="/images/banner/1.jpg" alt="Image" />
				</a>
			</SwiperSlide>

			<SwiperSlide>
				<a href="#0" className="banner__image">
					<img src="/images/banner/1.jpg" alt="Image" />
				</a>
			</SwiperSlide>

			<SwiperSlide>
				<a href="#0" className="banner__image">
					<img src="/images/banner/1.jpg" alt="Image" />
				</a>
			</SwiperSlide>
		</Swiper>
	);
}
