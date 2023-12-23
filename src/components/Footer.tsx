import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/_footer.scss"


const Footer: React.FC = () => {

  return (
    <footer>
		<div className="container-fluid footer">
		  <div className="row d-flex flex-column">
			<div className="footer-img">
			   <img src="../../public/images/Home-Page/logomark L.svg" alt="logo L" />
			</div>
			  <div className="d-flex flex-column">
			   <div className="col-11 mx-3">
				<Link to={"/"}><img src="../../public/images/Home-Page/logotype.svg" alt="logotype" className="mt-4 mb-5 w-50" /></Link>
				<div className="d-flex flex-row justify-content-between mb-3">
					<Link to={"/"}><h3 className="text-uppercase font-weight-bold">jewelry</h3></Link>
					<h3>EN / MK</h3>
				</div>
				<div className="col-12 mr-auto ml-auto">
				<div className="d-flex flex-column justify-content-start">
					<Link to={"/"}>Earrings</Link>
					<Link to={"/"}>Rings</Link>
					<Link to={"/"}>Necklaces</Link>
					<Link to={"/"}>Bracelets</Link>
					<Link to={"/"}>Sets</Link>
					<Link to={"/"}>Other</Link>					
				</div>
				</div>

				<div className="d-flex flex-column justify-content-start my-3">
					<Link to={"/"}><h3 className="text-uppercase font-weight-bold mb-3">home decor</h3></Link>
					<Link to={"/"}>Helmets</Link>
					<Link to={"/"}>Other</Link>					
				</div>
				<div className="text-uppercase">
					<Link to={"/"}><h3 className="font-weight-bold mb-3">custom orders</h3></Link>
					<Link to={"/our-story"}><h3 className="font-weight-bold mb-3">our story</h3></Link>
					<Link to={"/"}><h3 className="font-weight-bold mb-3">faq</h3></Link>
					<Link to={"/"}><h3 className="font-weight-bold mb-3">contact</h3></Link>
					<Link to={"/"}><h3 className="font-weight-bold">profile</h3></Link>
				</div>
				<div className="d-flex flex-column justify-content-start my-5">
				  <div className="col-12 mr-auto ml-auto">
					<div className="d-flex flex-row mb-5">
						<div className="col-3 social-icons">
						<Link to={"https://www.instagram.com/marinovdesign/?igshid=MzRlODBiNWFlZA%3D%3D"}><img src="../../public/images/Icons/instagram.svg" alt="icon-instagram"/></Link>
						</div>
						<div className="col-3 social-icons">
						<Link to={"https://www.facebook.com/marinovworkshop"}><img src="../../public/images/Icons/facebook.svg" alt="icon-facebook" /></Link>
						</div>
						<div className="col-3 social-icons">
						<Link to={""}><img src="../../public/images/Icons/whatsapp.svg" alt="icon-whatsapp" /></Link>
						</div>
					</div>
					<p>Privacy Policy</p>
					<p>Terms & Conditions</p>
					<p>Shipping and Returns Policy</p>
					<p className="allRights small mt-5">© Marinov Design 2023 - All Rights Reserved.</p>
				  </div>
				</div>
			</div>
	  	  </div>
		</div>
	  </div>
	</footer>
  );
};

export default Footer;
