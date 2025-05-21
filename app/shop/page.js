import { RiFilter3Line } from "react-icons/ri";
import CategoryFilterOfcanvas from "../components/category/CategoryFilterOfcanvas";
import ProductCard from "../components/product/ProductCard";import Select from "react-select";

export default function Shop() {
	return (
		<main>
			<div className="shop-page py-5">
				<div className="container">
					<div className="top-bar mb-4">
						<button className="filter-btn"
							aria-label="Filter"
							data-bs-toggle="offcanvas"
							data-bs-target="#filterDrawer"
						>
							<RiFilter3Line />
							Filter
						</button>
						<div className="short">
							<select id="short">
								<option value="0">Short By</option>
								<option value="1">Newest</option>
								<option value="1">Oldest</option>
								<option value="1">Hight to Low</option>
								<option value="1">Low to High</option>
							</select>
						</div>
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
				<CategoryFilterOfcanvas />
			</div>
		</main>
	);
}
