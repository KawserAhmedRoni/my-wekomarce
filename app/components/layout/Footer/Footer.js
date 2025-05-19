import Link from "next/link";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="footer-area">
			<div className="container">
				<div className="footer-widget">
					<div className="row justify-content-between g-5">
						<div className="col-lg-3">
							<div className="widget-item">
								<h4 className="title">About Us</h4>
								<p className="text">
									Lorem ipsum, dolor sit amet elit veritatis pariatur
									illo reiciendis hic voluptas corrupti expedita
									fugiat.
								</p>
								<div className="social-icons">
									<a href="#0">
										<FaFacebookF />
									</a>
									<a href="#0">
										<FaTwitter />
									</a>
									<a href="#0">
										<FaInstagram />
									</a>
									<a href="#0">
										<FaLinkedinIn />
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="widget-item">
								<h4 className="title">Useful Links</h4>
								<ul className="widget-link">
									<li>
										<Link href={"#0"}>Links Here</Link>
									</li>
									<li>
										<Link href={"#0"}>Links Here</Link>
									</li>
									<li>
										<Link href={"#0"}>Links Here</Link>
									</li>
									<li>
										<Link href={"#0"}>Links Here</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="widget-item">
								<h4 className="title">Useful Links</h4>
								<ul className="widget-link">
									<li>
										<Link href={"#0"}>Links Here</Link>
									</li>
									<li>
										<Link href={"#0"}>Links Here</Link>
									</li>
									<li>
										<Link href={"#0"}>Links Here</Link>
									</li>
									<li>
										<Link href={"#0"}>Links Here</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2">
							<div className="widget-item">
								<h4 className="title">Contact Us</h4>
								<p className="text mb-2">
									Maxime veritatis natus, autem, perferendis
								</p>
								<p className="text mb-2">
									0256312616065406
								</p>
								<p className="text">hello@sailor.com.bd</p>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<p className="text">
						Copyright ©{new Date().getFullYear()}{" "}
						<Link href={"/"}>WeKomarce</Link>. All rights reserved
					</p>
					<p className="text">
						design & developed by :{" "}
						<Link href={"/"}>Mediasoft Data Systems Limited</Link>.
					</p>
				</div>
			</div>
		</footer>
	);
}
