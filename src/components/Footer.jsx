import logo from "../assets/logojk.jpeg"; // Ensure correct path to logo
import { Link } from "react-router-dom";

const footerLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Affiliated",
        href: "/affiliated",
    },
    {
        name: "Members",
        href: "/members",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

const Footer = () => {
    return (
        <footer className="footer-bg text-white pt-8 shadow-lg">
            <div className="text-center mt-8 text-xs md:text-sm text-white font-bold container px-4 m-auto">
                <p>
                    OUR MOTTO
                    <br />
                    "Women Empowerment through Taekwondo"
                </p>
            </div>
            <div className="container mx-auto flex flex-col md:gap-6 lg:gap-2 lg:flex-row justify-between items-center space-y-8 md:space-y-0 p-4 md:p-6">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src={logo}
                        alt="J & K Taekwondo Association Logo"
                        className="w-24 h-24 shadow-md rounded-full border-4 border-white transition-transform duration-300 transform hover:scale-105"
                    />
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">
                            J & K Taekwondo Association
                        </h2>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-base">
                    {footerLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="transition duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-white before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 font-bold"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/register">
                        <button className="bg-white transition-all duration-300 px-6 py-2 rounded-md text-black hover:bg-white/80 font-semibold shadow-md hover:shadow-lg">
                            Register
                        </button>
                    </Link>
                </nav>

                {/* Social Media Icons */}
                <div>
                    <h3 className="text font-bold">Connect us</h3>
                    <div className="flex space-x-6 text-xl">
                        <a
                            href="https://www.facebook.com/profile.php?id=100063725275738&mibextid=ZbWKwL"
                            aria-label="Facebook"
                            className="transition duration-300"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="transition duration-300"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/jkta_india/"
                            aria-label="Instagram"
                            className="transition duration-300"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="transition duration-300"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="border-white mt-7" />
            <div className="text-center -mb-3 py-3 text-xs md:text-sm text-white font-bold container px-4 m-auto lg:flex lg:justify-between">
                <p className="flex gap-3 justify-center">
                    <Link to="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="hover:underline">
                        TnC
                    </Link>
                    <Link to="/refund" className="hover:underline">
                        Refund Policy
                    </Link>
                </p>
                <p>
                    &copy; 2024 J & K Taekwondo Association of India. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
