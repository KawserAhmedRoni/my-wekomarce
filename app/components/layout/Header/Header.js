import Link from "next/link";
import {
	RiHeart3Line,
	RiSearch2Line,
	RiShoppingCartLine,
	RiUserLine,
} from "react-icons/ri";
import CartOffcanvas from "./CartOffcanvas";
import SearchOffcanvas from "./SearchOffcanvas";

export default function Header() {
	return (
		<header className="header-area">
			<div className="header-top">
				<p className="text">
					COMPLIMENTARY SHIPPING ON ORDERS ABOVE $200{" "}
					<Link href="/shop">Shop Now</Link>
				</p>
			</div>
			<div className="header-main">
				<div className="container">
					<div className="header__wrp">
						<div className="logo-box">
							<Link className="logo" href={"/"}>
								<img src="/images/logo/logo.png" alt="Logo" />
							</Link>
						</div>
						<ul className="menu">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/women">Women</Link>
							</li>
							<li>
								<Link href="/men">Men</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
							<li>
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
						<div className="info">
							<button
								aria-label="Search"
								data-bs-toggle="offcanvas"
								data-bs-target="#searchDrawer"
							>
								<RiSearch2Line />
							</button>
							<button aria-label="User">
								<RiUserLine />
							</button>
							<button aria-label="Wishlist">
								<RiHeart3Line />
							</button>
							<button
								aria-label="Cart"
								data-bs-toggle="offcanvas"
								data-bs-target="#cartDrawer"
							>
								<RiShoppingCartLine />
							</button>
						</div>
					</div>
				</div>
			</div>
			<SearchOffcanvas />
			<CartOffcanvas />
		</header>
	);
}
