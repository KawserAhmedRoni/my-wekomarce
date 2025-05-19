"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SingleBannerSlider() {
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
				<a href="#0" className="image">
					<img src="/images/banner/single-banner.jpg" alt="Image" />
				</a>
			</SwiperSlide>

			<SwiperSlide>
				<a href="#0" className="image">
					<img src="/images/banner/single-banner.jpg" alt="Image" />
				</a>
			</SwiperSlide>

			<SwiperSlide>
				<a href="#0" className="image">
					<img src="/images/banner/single-banner.jpg" alt="Image" />
				</a>
			</SwiperSlide>
		</Swiper>
	);
}
