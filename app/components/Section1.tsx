import Image from "next/image"
import Logo from "../images/Boldo-Logo-white.svg"
import Hero1 from "../images/hero-img-1.svg"
import Hero2 from "../images/hero-img-2.svg"
import Hero3 from "../images/hero-img-3.svg"
import WheelLogo1 from "../images/Boldo-Logo-white2.svg"
import WheelLogo2 from "../images/Presto-Logo-white.svg"
import ellipse from "../images/hero-ellipse.png"

export default function Section1() {
    return (
        <div className="h-screen w-full bg-[#0A2640] px-20 py-8 relative overflow-x-hidden">
            <div className="flex justify-between items-center z-10 relative">
                <Image src={Logo} alt="Logo" />
                <div className="flex gap-x-10 items-center">
                    <span className="text-white font-medium">Product</span>
                    <span className="text-white font-medium">Services</span>
                    <span className="text-white font-medium">About</span>
                    <button className="text-[#0A2640] px-10 py-2.5 rounded-3xl font-bold bg-white">
                        Log In
                    </button>
                </div>
            </div>
            {/* navbar */}
            <div className="flex justify-between gap-x-4 items-center mt-10 text-white z-10 relative">
                <div className="flex flex-col w-[50%]">
                    <h1 className="text-5xl leading-[4.5rem]">
                        Save time by building fast with Boldo Template
                    </h1>
                    <p className="font-light mt-5">
                        Funding handshake buyer business-to-business metrics
                        iPad partnership. First mover advantage innovator
                        success deployment non-disclosure.
                    </p>
                    <div className="flex gap-x-7 max-w-[80%] text-lg mt-8">
                        <button className="font-bold px-14 py-4 text-[#0A2640] rounded-[56px] bg-[#69E6A6] hover:bg-[#429269]">
                            Buy template
                        </button>
                        <button className="font-bold px-14 py-4 rounded-[56px] border-2 border-white hover:bg-white hover:text-[#0A2640]">
                            Explore
                        </button>
                    </div>
                </div>

                <div className="flex flex-col w-[38%] gap-y-6">
                    <Image className="w-full" src={Hero1} alt="" />
                    <div className="flex justify-between items-center">
                        <Image src={Hero2} alt="" />
                        <Image src={Hero3} alt="" />
                    </div>
                </div>
            </div>
            {/* hero */}

            <div className="flex justify-center items-center gap-x-12 mt-14 overflow-hidden max-w-[95%] mx-auto z-10 relative">
                <Image src={WheelLogo1} alt="Logo" />
                <Image src={WheelLogo2} alt="Logo" />
                <Image src={WheelLogo1} alt="Logo" />
                <Image src={WheelLogo2} alt="Logo" />
                <Image src={WheelLogo1} alt="Logo" />
                <Image src={WheelLogo2} alt="Logo" />
                <Image src={WheelLogo1} alt="Logo" />
                <Image src={WheelLogo2} alt="Logo" />
            </div>

            <div className="rounded-full size-[1293px] absolute -top-[850px] left-[850px] z-0 bg-[#1C3D5B]"></div>

            {/* <Image
                className="absolute z-0 top-0 right-0"
                src={ellipse}
                alt="Logo"
            /> */}
        </div>
    )
}
