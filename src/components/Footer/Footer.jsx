import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import Facebook from "../../assets/images/facebook.png";
import Insta from "../../assets/images/insta.png";
import Twitter from "../../assets/images/twitter.png";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-8 bg-base-300 text-base-content">
                <aside>
                    <p className="text-2xl font-bold">ETSY</p>
                    <p>Providing reliable since 1992</p>
                </aside>
                <nav>
                    <h2 className="footer-title">Contact Details</h2>
                    <div>
                        <p className="font-semibold">Client Support:</p>
                        <div className="flex p-2 gap-3 items-center">
                            <FaPhoneAlt />
                            <p>01624-621440</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="font-semibold">Main Office:</p>
                        <div className="flex p-2 gap-3 items-center">
                            <FaLocationArrow></FaLocationArrow>
                            <p>Art Gallery WP 36 <br /> Battersea Square, London</p>
                        </div>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <img src={Facebook} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Twitter} alt="" />
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-10 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;