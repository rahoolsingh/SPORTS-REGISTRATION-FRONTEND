import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-bg text-white pt-8 shadow-lg">
            <div className="container mx-auto flex flex-col md:gap-6 lg:gap-2 lg:flex-row justify-between items-center space-y-8 md:space-y-0 p-4 md:p-6">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src="https://res.cloudinary.com/dwiouayh7/image/upload/v1728839717/My%20Brand/veerRajpoot_mplaff.png"
                        alt="Logo"
                        className="w-32 transition-transform duration-300 transform hover:scale-105 invert"
                    />
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">
                            KHILADI SPORTS ASSOCIATION
                        </h2>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div>
                    <h3 className="text font-bold">Connect us</h3>
                    <div className="flex space-x-6 text-xl">
                        <a
                            href="https://x.com/i_veerrajpoot"
                            aria-label="Twitter"
                            className="transition duration-300"
                            target="_blank"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="https://instagram.com/i.veerrajpoot"
                            aria-label="Instagram"
                            className="transition duration-300"
                            target="_blank"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/rahoolsingh"
                            aria-label="LinkedIn"
                            className="transition duration-300"
                            target="_blank"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="border-white mt-7" />
            <div className="text-center -mb-3 py-3 text-xs md:text-sm text-white font-bold container px-4 m-auto lg:flex lg:justify-between">
                <p className="flex gap-3 justify-center">
                    <Link
                        to="https://instagram.com/i.veerrajpoot"
                        className="hover:underline"
                    >
                        Veer Rajpoot
                    </Link>
                </p>
                <p>
                    &copy; 2024 KHILADI SPORTS ASSOCIATION. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
