import logo from "../assets/logo.png"; // Replace with actual logo path
import img3 from "../assets/Asset3.png";
import img4 from "../assets/Asset4.png";
import img5 from "../assets/Asset5.png";
import img6 from "../assets/Asset6.png";
import { Navbar } from "./Navbar";

const Header = () => {
    return (
        <header className="relative">
            <>
                <div className="container mx-auto flex gap-2 items-center p-4 md:p-6">
                    {/* Left Logo */}
                    <img
                        src={logo}
                        alt="Khiladi Sports Association"
                        className="w-20 md:w-48 rounded-full transition-transform duration-300 transform"
                    />

                    {/* Title */}
                    <div className="">
                        <h1 className="text-lg md:text-5xl font-extrabold tracking-wide md:text-left uppercase text-red-600 leading-tight">
                            Khiladi Sports Association
                        </h1>
                        {/* Affiliated Section */}
                        <div className="container mx-auto md:text-left">
                            <p className="text-xs md:text-2xl capitalize">
                                Affiliated with: Taekwondo Federation of India
                                (TFI) <br />
                                <span className="text-base leading-tight block mb-4">
                                    Recognised By : J & K Sports Council (JKSC),
                                    Indian Olympic Association (IOA)
                                </span>
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="container items-center divide-x-2 hidden md:flex">
                            {[img5, img3, img4, img6].map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Image ${index + 1}`}
                                    className="w-12 md:w-28 h-auto px-1 md:px-5 transition-transform duration-300 transform"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </>
            {/* Image Section */}
            <div className="container mx-auto  justify-center items-center divide-x-2 md:hidden flex pb-4">
                {[img5, img3, img4, img6].map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Image ${index + 1}`}
                        className="w-12 md:w-28 h-auto px-1 md:px-5 transition-transform duration-300 transform"
                    />
                ))}
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
