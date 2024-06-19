import { useState } from "react";
import backgroundImage from '../assets/lady.jpg';

function About() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <div className="w-full h-2/4 py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
                <h1 className="font-[Founders_Grotesk] text-[4vw] tracking-tight">
                    CodeBloom is a strategic partner for fast-growing
                    tech businesses that need to raise funds, sell
                    products, explain complex ideas, and hire great people.
                </h1>
                <div className="w-full flex gap-5 pt-5 border-t-[2px] mt-14 border-[#a1b562]">
                    <div className="mt-9 w-1/2">
                        <h1 className="text-[5vw]">Our Approach:</h1>
                        <button
                            onClick={() => setIsClicked(true)}
                            className="flex uppercase gap-10 items-center px-[4vw] py-[2vw] mt-3 bg-zinc-900 rounded-full text-white group"
                        >
                            Read More
                            <div className="relative">
                                <div className={`w-3 h-3 bg-zinc-100 rounded-full transition-all duration-300 group-hover:w-5 group-hover:h-5 group-hover:bg-opacity-0 group-hover:border group-hover:border-zinc-100 ${isClicked ? 'w-5 h-5 bg-opacity-0 border border-zinc-100' : ''}`}></div>
                                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isClicked ? 'w-5 h-5' : ''}`}>
                                    <div className={`w-3 h-3 bg-zinc-100 rounded-full transition-all duration-300 ${isClicked ? 'w-5 h-5' : ''}`}></div>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="w-1/2 h-[60vw] rounded-2xl"
                        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        {/* Content inside the div */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
