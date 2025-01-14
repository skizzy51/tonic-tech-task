import Image from "next/image"
import people from "../images/people.png"
import vector1 from "../images/last-section-imgs-1.png"
import vector2 from "../images/last-section-imgs-2.png"
import vector3 from "../images/last-section-imgs-3.png"
import profile1 from "../images/testimonial-profile1.png"
import profile2 from "../images/testimonial-profile2.png"
import profile3 from "../images/testimonial-profile3.png"
import { FaCircleChevronDown } from "react-icons/fa6"

export default function Section4() {
    return (
        <div className="w-full pt-16 px-40 flex flex-col overflow-x-hidden">
            <Image className="w-full rounded-3xl" src={people} alt="" />

            <div className="mt-10 flex justify-between gap-x-5">
                <h2 className="text-[40px] leading-[3.5rem] max-w-[45%]">
                    We connect our customers with the best, and help them keep
                    up-and stay open.
                </h2>
                <div className="flex flex-col w-[45%]">
                    <div className="flex justify-between items-center gap-x-3 py-5 border-b border-b-gray-400">
                        <span className="text-2xl">
                            We connect our customers with the best?
                        </span>
                        <FaCircleChevronDown color="#0a2640" size={24} />
                    </div>
                    <div className="flex justify-between items-center gap-x-3 py-5 border-b border-b-gray-400">
                        <span className="text-2xl">
                            Android research & development rockstar?
                        </span>
                        <FaCircleChevronDown color="#0a2640" size={24} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center max-w-[70%] mx-auto mt-40">
                <h6 className="text-center text-xl text-[#777777]">Our Blog</h6>
                <h2 className="text-5xl leading-[4.5rem] text-center mt-3">
                    Value proposition accelerator product management venture
                </h2>
            </div>

            <div className="flex w-full justify-evenly mt-20">
                <div className="w-[300px] h-[424px] flex flex-col cursor-pointer">
                    <Image
                        className="w-full h-[200px] rounded-[12px]"
                        src={vector1}
                        alt=""
                    />
                    <div className="flex items-center gap-x-2 mt-5 text-gray-500">
                        <b className="text-black">Category</b>November 22, 2021
                    </div>
                    <p className="mt-5 text-xl">
                        Pitch termsheet backing validation focus release.
                    </p>
                    <div className="mt-auto flex items-center gap-x-2">
                        <Image className="size-[32px]" src={profile1} alt="" />
                        <span className="">Chandler Bing</span>
                    </div>
                </div>
                <div className="w-[300px] h-[424px] flex flex-col cursor-pointer">
                    <Image
                        className="w-full h-[200px] rounded-[12px]"
                        src={vector2}
                        alt=""
                    />
                    <div className="flex items-center gap-x-2 mt-5 text-gray-500">
                        <b className="text-black">Category</b>November 22, 2021
                    </div>
                    <p className="mt-5 text-xl">
                        Seed round direct mailing non-disclosure agreement
                        graphical user interface rockstar.
                    </p>
                    <div className="mt-auto flex items-center gap-x-2">
                        <Image className="size-[32px]" src={profile2} alt="" />
                        <span className="">Rachel Green</span>
                    </div>
                </div>
                <div className="w-[300px] h-[424px] flex flex-col cursor-pointer">
                    <Image
                        className="w-full h-[200px] rounded-[12px]"
                        src={vector3}
                        alt=""
                    />
                    <div className="flex items-center gap-x-2 mt-5 text-gray-500">
                        <b className="text-black">Category</b>November 22, 2021
                    </div>
                    <p className="mt-5 text-xl">
                        Beta prototype sales iPad gen-z marketing network
                        effects value proposition
                    </p>
                    <div className="mt-auto flex items-center gap-x-2">
                        <Image className="size-[32px]" src={profile3} alt="" />
                        <span className="">Monica Geller</span>
                    </div>
                </div>
            </div>

            <button className="font-bold px-14 py-4 mx-auto mt-16 text-xl rounded-[56px] border-2 border-darkBlue text-darkBlue">
                Load more
            </button>

            <div className="w-full flex flex-col py-16 mt-28 gap-y-10 items-center bg-darkBlue rounded-[12px] relative overflow-hidden">
                <h2 className="text-5xl text-center leading-[4rem] max-w-[55%] text-white z-10">
                    An enterprise template to ramp up your company website
                </h2>
                <div className="flex gap-x-3.5 z-10">
                    <input
                        type="email"
                        className="text-xl pl-7 pr-4 py-4 w-[370px] rounded-[240px] outline-none"
                        placeholder="Your email address"
                    />
                    <button className="text-xl font-bold px-10 py-4 rounded-[240px] bg-[#65E4A3] text-darkBlue">
                        Start now
                    </button>
                </div>
                <div className="rounded-full size-[1293px] absolute -top-[1054] left-[466] z-0 bg-[#1C3D5B]"></div>
            </div>
        </div>
    )
}
