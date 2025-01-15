import Image from "next/image"
import Vector1 from "../images/vector-sec2-1.png"
import Vector2 from "../images/vector-sec2-2.png"
import Vector3 from "../images/vector-sec2-3.png"
import PersonStats1 from "../images/person-stats-1.png"
import PersonStats2 from "../images/person-stats-2.png"
import { FaArrowRight } from "react-icons/fa"
import { FaCheck } from "react-icons/fa6"
import { FiEye, FiFeather, FiSun } from "react-icons/fi"

export default function Section2() {
    return (
        <div className="w-full py-20 px-40 max-[900px]:px-10 max-sm:px-5 overflow-x-hidden bg-white">
            <div className="flex flex-col items-center w-[70%] max-md:w-full mx-auto">
                <h6 className="text-center text-xl text-[#777777]">
                    Our Services
                </h6>
                <h2 className="text-5xl max-md:text-[2.5rem] leading-[4.5rem] max-md:leading-[3rem] text-center">
                    Handshake infographic mass market crowdfunding iteration.
                </h2>
            </div>
            <div className="flex max-md:grid max-[550px]:grid-cols-1 max-md:grid-cols-2 justify-between gap-x-5 gap-y-5 mt-16">
                <div className="flex flex-col w-[300px] max-md:w-full">
                    <Image
                        className="h-[354px] w-full rounded-[24px]"
                        src={Vector1}
                        alt=""
                    />
                    <h6 className="text-2xl mt-5">Cool feature title</h6>
                    <p className="text-xl text-[#777777] mt-3.5 leading-8">
                        Learning curve network effects return on investment.
                    </p>
                    <button className="flex items-center w-fit pb-2.5 text-xl font-bold gap-x-3 border-b-2 border-b-darkBlue text-darkBlue mt-6">
                        Explore page <FaArrowRight />
                    </button>
                </div>
                <div className="flex flex-col w-[300px] max-md:w-full">
                    <Image
                        className="h-[354px] w-full rounded-[24px]"
                        src={Vector2}
                        alt=""
                    />
                    <h6 className="text-2xl mt-5">Cool feature title</h6>
                    <p className="text-xl text-[#777777] mt-3.5 leading-8">
                        Learning curve network effects return on investment.
                    </p>
                    <button className="flex items-center w-fit pb-2.5 text-xl font-bold gap-x-3 border-b-2 border-b-darkBlue text-darkBlue mt-6">
                        Explore page <FaArrowRight />
                    </button>
                </div>
                <div className="flex flex-col w-[300px] max-md:w-full">
                    <Image
                        className="h-[354px] w-full rounded-[24px]"
                        src={Vector3}
                        alt=""
                    />
                    <h6 className="text-2xl mt-5">Cool feature title</h6>
                    <p className="text-xl text-[#777777] mt-3.5 leading-8">
                        Learning curve network effects return on investment.
                    </p>
                    <button className="flex items-center w-fit pb-2.5 text-xl font-bold gap-x-3 border-b-2 border-b-darkBlue text-darkBlue mt-6">
                        Explore page <FaArrowRight />
                    </button>
                </div>
            </div>
            {/* cool feature title */}

            <div className="flex max-[900px]:flex-col justify-between items-center gap-5 mt-40">
                <Image src={PersonStats1} alt="" />

                <div className="flex flex-col w-[40%] max-md:w-full">
                    <h3 className="text-4xl leading-[3.5rem]">
                        We connect our customers with the best, and help them
                        keep up-and stay open.
                    </h3>

                    <div className="flex flex-col gap-y-6 mt-8">
                        <div className="flex items-center gap-x-5">
                            <div className="rounded-full p-2.5 bg-darkBlue">
                                <FaCheck color="white" />
                            </div>
                            <span className="text-xl">
                                We connect our customers with the best.
                            </span>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <div className="rounded-full p-2.5 bg-darkBlue">
                                <FaCheck color="white" />
                            </div>
                            <span className="text-xl">
                                Advisor success customer launch party.
                            </span>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <div className="rounded-full p-2.5 bg-darkBlue">
                                <FaCheck color="white" />
                            </div>
                            <span className="text-xl">
                                Business-to-consumer long tail.
                            </span>
                        </div>
                    </div>

                    <button className="font-semibold px-14 py-4 text-xl mt-12 bg-darkBlue w-fit rounded-[56px] text-white">
                        Start now
                    </button>
                </div>
            </div>

            <div className="flex max-[900px]:flex-col max-[900px]:flex-col-reverse justify-between items-center gap-5 mt-10">
                <div className="flex flex-col w-[45%] max-md:w-full">
                    <h3 className="text-4xl leading-[3.5rem]">
                        We connect our customers with the best, and help them
                        keep up-and stay open.
                    </h3>

                    <div className="flex flex-col gap-y-6 mt-8">
                        <span className="flex items-center gap-x-3 text-lg rounded-[4px] py-5 px-5 bg-darkBlue text-white">
                            <FiFeather size={24} /> We connect our customers
                            with the best.
                        </span>
                        <span className="flex items-center gap-x-3 text-lg rounded-[4px] py-5 px-5 bg-white drop-shadow-md">
                            <FiEye size={24} /> Advisor success customer launch
                            party.
                        </span>
                        <span className="flex items-center gap-x-3 text-lg rounded-[4px] py-5 px-5 bg-white drop-shadow-md">
                            <FiSun size={24} /> Business-to-consumer long tail.
                        </span>
                    </div>
                </div>

                <Image src={PersonStats2} alt="" />
            </div>
        </div>
    )
}
