"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

export default function ShopDetails() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<main>
			<div className="shop-details-page py-5">
				<div className="container">
					<div className="row g-5 align-items-start">
						{/* Left Column - Image Slider */}
						<div className="col-md-5">
							<Swiper
								spaceBetween={10}
								navigation={true}
								thumbs={{ swiper: thumbsSwiper }}
								modules={[Navigation, Thumbs]}
								className="mb-2"
							>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Image 1" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Image 2" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Image 3" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Image 4" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Image 5" />
								</SwiperSlide>
							</Swiper>

							<Swiper
								onSwiper={setThumbsSwiper}
								spaceBetween={10}
								slidesPerView={5}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[FreeMode, Thumbs]}
								className="swiper-thumb"
							>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Thumb 1" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Thumb 2" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Thumb 3" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Thumb 4" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="/images/product/1.jpg" alt="Thumb 5" />
								</SwiperSlide>
							</Swiper>
						</div>

						{/* Right Column - Product Info */}
						<div className="col-md-7">
							<h2 className="mb-3">Premium Cotton T-Shirt</h2>
							<h4 className="text-primary mb-3">$29.99</h4>
							<p className="mb-4">
								This is a high-quality cotton t-shirt with excellent
								fabric, design, and fit. Available in all sizes.
							</p>
							<button className="btn btn-dark px-4">Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
