import BannerSlider from "./components/banner/BannerSlider";
import SingleBannerSlider from "./components/banner/SingleBannerSlider";
import ProductCard from "./components/product/ProductCard";

export default function Home() {
	return (
		<main>
			<section className="banner-area pt-3">
				<div className="container-fluid">
					<BannerSlider />
				</div>
			</section>

			<section className="product-area py-5">
				<div className="container">
					<div className="section-title text-center">
						<h2 className="title">new arrivals</h2>
						<a href="#0" className="view-all-btn">
							View All
						</a>
					</div>
					<div className="row g-4">
						<div className="col-lg-3">
							<ProductCard />
						</div>
						<div className="col-lg-3">
							<ProductCard />
						</div>
						<div className="col-lg-3">
							<ProductCard />
						</div>
						<div className="col-lg-3">
							<ProductCard />
						</div>
					</div>
				</div>
			</section>

			<section className="single-banner">
				<div className="container">
					<a href="#0" className="image">
						<img src="/images/banner/single-banner.jpg" alt="Image" />
					</a>
				</div>
			</section>

			<section className="product-area py-5">
				<div className="container">
					<div className="section-title text-center">
						<h2 className="title">Best Selling Products</h2>
						<a href="#0" className="view-all-btn">
							View All
						</a>
					</div>
					<div className="row g-4">
						<div className="col-lg-3">
							<ProductCard />
						</div>
						<div className="col-lg-3">
							<ProductCard />
						</div>
						<div className="col-lg-3">
							<ProductCard />
						</div>
						<div className="col-lg-3">
							<ProductCard />
						</div>
					</div>
				</div>
			</section>

			<section className="single-banner">
				<div className="container">
					<SingleBannerSlider />
				</div>
			</section>

			<section className="product-area py-5">
				<div className="container">
					<div className="section-title text-center">
						<h2 className="title">feature product</h2>
						<a href="#0" className="view-all-btn">
							View All
						</a>
					</div>
					<div className="row g-4">
						<div className="col-lg-3">
							<ProductCard />
						</div>
						<div className="col-lg-3">
							<ProductCard />
						</div>
						<div className="col-lg-3">
							<ProductCard />
						</div>
						<div className="col-lg-3">
							<ProductCard />
						</div>
					</div>
				</div>
			</section>

			<section className="dual-banner pb-5">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-6">
							<a href="#0" className="image">
								<img src="/images/banner/dual-banner.jpg" alt="Image" />
							</a>
						</div>
						<div className="col-lg-6">
							<a href="#0" className="image">
								<img src="/images/banner/dual-banner.jpg" alt="Image" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
