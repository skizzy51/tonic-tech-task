import Image from "next/image"
import Logo from "../images/Boldo-Logo-white.svg"
import Hero1 from "../images/hero-img-1.svg"
import Hero2 from "../images/hero-img-2.svg"
import Hero3 from "../images/hero-img-3.svg"
import WheelLogo1 from "../images/Boldo-Logo-white2.svg"
import WheelLogo2 from "../images/Presto-Logo-white.svg"
import { FaBars } from "react-icons/fa6"

export default function Section1() {
    return (
        <div className="h-screen max-[550px]:h-auto w-full bg-[#0A2640] px-20 max-[425px]:px-5 max-md:px-8 py-8 relative overflow-x-hidden">
            <div className="flex justify-between max-[550px]:justify-start gap-x-3 items-center z-10 relative">
                <FaBars
                    className="hidden max-[550px]:block"
                    size={28}
                    color="white"
                />
                <Image className="" src={Logo} alt="Logo" />
                <div className="flex gap-x-10 max-md:gap-x-7 items-center max-md:text-xs max-[550px]:hidden">
                    <span className="text-white font-medium">Product</span>
                    <span className="text-white font-medium">Services</span>
                    <span className="text-white font-medium">About</span>
                    <button className="text-[#0A2640] px-10 max-md:px-5 py-2.5 rounded-3xl font-bold whitespace-nowrap bg-white">
                        Log In
                    </button>
                </div>
            </div>
            {/* navbar */}
            <div className="flex justify-between gap-x-4 items-center mt-10 text-white z-10 relative">
                <div className="flex flex-col max-md:items-center w-[50%] max-md:w-full">
                    <h1 className="text-5xl max-sm:text-4xl leading-[4.5rem] max-md:text-center">
                        Save time by building fast with Boldo Template
                    </h1>
                    <p className="font-light mt-5 max-md:text-center">
                        Funding handshake buyer business-to-business metrics
                        iPad partnership. First mover advantage innovator
                        success deployment non-disclosure.
                    </p>
                    <div className="flex gap-x-7 max-sm:gap-x-2 w-[80%] max-md:w-fit text-lg max-sm:text-base mt-8">
                        <button className="font-bold px-14 max-[500px]:px-8 py-4 max-[500px]:py-3 whitespace-nowrap text-[#0A2640] rounded-[56px] bg-[#69E6A6] hover:bg-[#429269]">
                            Buy template
                        </button>
                        <button className="font-bold px-14 max-[500px]:px-8 py-4 max-[500px]:py-3 whitespace-nowrap rounded-[56px] border-2 border-white hover:bg-white hover:text-[#0A2640]">
                            Explore
                        </button>
                    </div>
                </div>

                <div className="flex flex-col w-[38%] gap-y-6 max-md:hidden">
                    <Image className="w-full" src={Hero1} alt="" />
                    <div className="flex justify-between items-center">
                        <Image src={Hero2} alt="" />
                        <Image src={Hero3} alt="" />
                    </div>
                </div>
            </div>
            {/* hero */}

            <div className="partner-slider mt-14 overflow-hidden w-full mx-auto z-10 relative">
                <div className="partner-slide-track flex items-center gap-x-12">
                    <Image
                        className="partner-slide"
                        src={WheelLogo1}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo2}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo1}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo2}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo1}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo2}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo1}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo2}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo1}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo2}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo1}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo2}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo1}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo2}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo1}
                        alt="Logo"
                    />
                    <Image
                        className="partner-slide"
                        src={WheelLogo2}
                        alt="Logo"
                    />
                </div>
            </div>

            <div className="rounded-full size-[1293px] absolute -top-[850px] left-[850px] z-0 bg-[#1C3D5B] max-md:hidden"></div>
        </div>
    )
}

{
    /* <Image
    className="absolute z-0 top-0 right-0"
    src={ellipse}
    alt="Logo"
/> */
}
