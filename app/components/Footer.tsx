import Image from "next/image"
import Logo from "../images/Boldo-Logo-black.svg"

export default function Footer() {
    return (
        <div className="px-20 max-sm:px-5 max-md:px-10 pt-40 pb-32 flex max-md:flex-col justify-between max-md:justify-start max-md:items-center gap-5">
            <div className="w-[30%] max-md:w-full flex flex-col">
                <Image className="flex-shrink-0" src={Logo} alt="" />
                <p className="text-[#777777] mt-7 w-[70%] max-md:w-full">
                    Social media validation business model canvas graphical user
                    interface launch party creative facebook iPad twitter.
                </p>
                <p className="text-[#777777] mt-14">All rights reserved.</p>
            </div>

            <div className="grid grid-cols-3 w-[50%] max-md:w-full">
                <div className="flex flex-col gap-y-10 text-xl max-sm:text-sm text-[#777777]">
                    <b className="text-black">Landings</b>
                    <p className="cursor-pointer hover:underline w-fit">Home</p>
                    <p className="cursor-pointer hover:underline w-fit">
                        Products
                    </p>
                    <p className="cursor-pointer hover:underline w-fit">
                        Services
                    </p>
                </div>
                <div className="flex flex-col gap-y-10 text-xl max-sm:text-sm text-[#777777]">
                    <b className="text-black">Company</b>
                    <p className="cursor-pointer hover:underline w-fit">Home</p>
                    <div className="flex gap-x-1.5 items-center">
                        <p className="cursor-pointer hover:underline w-fit">
                            Careers
                        </p>
                        <span className="px-4 py-1 max-[550px]:hidden text-sm font-semibold h-fit rounded-[120px] bg-[#65E4A3] text-darkBlue">
                            Hiring!
                        </span>
                    </div>
                    <p className="cursor-pointer hover:underline w-fit">
                        Services
                    </p>
                </div>
                <div className="flex flex-col gap-y-10 text-xl max-sm:text-sm text-[#777777]">
                    <b className="text-black">Resources</b>
                    <p className="cursor-pointer hover:underline w-fit">Blog</p>
                    <p className="cursor-pointer hover:underline w-fit">
                        Products
                    </p>
                    <p className="cursor-pointer hover:underline w-fit">
                        Services
                    </p>
                </div>
            </div>
        </div>
    )
}
