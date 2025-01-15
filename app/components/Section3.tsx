import Image from "next/image"
import profile1 from "../images/testimonial-profile1.png"
import profile2 from "../images/testimonial-profile2.png"
import profile3 from "../images/testimonial-profile3.png"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"

export default function Section3() {
    return (
        <div className="w-full py-20 px-40 max-[900px]:px-10 max-sm:px-5 overflow-x-hidden bg-darkBlue">
            <div className="flex justify-between items-end">
                <h2 className="text-5xl max-md:text-4xl max-sm:text-2xl leading-[4.5rem] max-w-[60%] text-white">
                    An enterprise template to ramp up your company website
                </h2>
                <div className="flex gap-x-8">
                    <button className="p-5 max-md:p-3 rounded-full bg-white">
                        <FaArrowLeft className="max-md:size-[22px]" size={32} />
                    </button>
                    <button className="p-5 max-md:p-3 rounded-full bg-white">
                        <FaArrowRight
                            className="max-md:size-[22px]"
                            size={32}
                        />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 max-[600px]:grid-cols-1 max-md:grid-cols-2 gap-4 mt-16">
                <div className="p-10 flex flex-col rounded-[12px] h-fit max-md:h-auto bg-white">
                    <p className="text-2xl">
                        “Buyer buzz partner network disruptive non-disclosure
                        agreement business”
                    </p>
                    <div className="flex items-center gap-x-3 mt-10">
                        <Image src={profile1} alt="" />
                        <div className="flex flex-col">
                            <p className="font-bold">Albus Dumbledore</p>
                            <p className="">Manager @ Howarts</p>
                        </div>
                    </div>
                </div>
                <div className="p-10 flex flex-col rounded-[12px] h-fit max-md:h-auto bg-white">
                    <p className="text-2xl">
                        “Learning curve infrastructure value proposition advisor
                        strategy user experience hypotheses investor.”
                    </p>
                    <div className="flex items-center gap-x-3 mt-10">
                        <Image src={profile2} alt="" />
                        <div className="flex flex-col">
                            <p className="font-bold">Severus Snape</p>
                            <p className="">Manager @ Slytherin</p>
                        </div>
                    </div>
                </div>
                <div className="p-10 flex flex-col rounded-[12px] h-fit max-md:h-auto bg-white">
                    <p className="text-2xl">
                        “Release facebook responsive web design business model
                        canvas seed money monetization.”
                    </p>
                    <div className="flex items-center gap-x-3 mt-10">
                        <Image src={profile3} alt="" />
                        <div className="flex flex-col">
                            <p className="font-bold">Harry Potter</p>
                            <p className="">Team Leader @ Gryffindor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
