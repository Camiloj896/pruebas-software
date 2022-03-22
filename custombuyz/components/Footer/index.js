import { FaFacebookSquare, FaYoutube, FaInstagramSquare, FaMailBulk, FaPhoneAlt  } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-black">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 text-white py-10">
                    <div className="flex items-center justify-center flex-col">
                        <span className="text-6xl">CustomBuyz</span>
                        <span>Slogan</span>
                    </div>
                    <div className="flex items-center justify-center flex-col my-10 md:my-0">
                        <span className="text-3xl">Contact</span>
                        <div className="flex justify-center space-between">
                            <FaYoutube className="text-3xl m-3 cursor-pointer" />
                            <FaInstagramSquare className="text-3xl m-3 mr-10 ml-10 cursor-pointer" />
                            <FaFacebookSquare className="text-3xl m-3 cursor-pointer" />
                        </div>
                        <div className="flex justify-center">
                            <FaMailBulk className="mr-5 text-3xl" />
                            <span className="text-lg">loremipsum@loremipsum.com</span>
                        </div>
                        <div className="flex justify-center">
                            <FaPhoneAlt className="mr-5 text-2xl" />
                            <span className="text-lg">(236) 506-2620</span>
                        </div>
                    </div>
                    <div className="flex items-center flex-col">
                        <span className="text-3xl">About</span>
                        <span className="text-3xl my-5">Term &amp; Use</span>
                        <span className="text-3xl">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;