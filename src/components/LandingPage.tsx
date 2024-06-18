import { useEffect, useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { gsap } from "gsap";
import landingCard from "../assets/landing-card.jpg";

function LandingPage() {
    const textContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (textContainerRef.current) {
            const textElements = textContainerRef.current.querySelectorAll(".text-line");

            textElements.forEach((textElement, index) => {
                const text = textElement.textContent;
                if (text) {
                    textElement.innerHTML = text.split("").map(char => `<span class='char'>${char}</span>`).join("");
                }
                const chars = textElement.querySelectorAll(".char");

                gsap.from(chars, {
                    duration: 0.03,
                    opacity: 0.1,
                    y: 10,
                    ease: "power1.out",
                    stagger: {
                        amount: 2,
                        from: "start",
                    },
                    delay: index * 1.9
                });
            });
        }
    }, []);

    return (
        <>
            <div className="w-full h-screen bg-zinc-900 pt-1">
                <div ref={textContainerRef} className="textstructure mt-28 px-20">
                    {["Transform ideas", "into powerful", "solutions."].map((item, index) => (
                        <div className="masker" key={index}>
                            <div className="w-fit flex items-center">
                                {index === 1 && (
                                    <img src={landingCard} alt="Landing Card" className="w-[9vw] h-[5vw] object-cover mt-[1vw]" />
                                )}
                                <h1 className="text-line uppercase text-[7.5vw] tracking-tighter leading-[7.5vw] font-[Founders_Grotesk] ">{item}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t-2 border-zinc-700 mt-10 flex justify-between items-center py-5 px-20">
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                        <p className="text-md flex font-light tracking-tight leading-none" key={index}>{item}</p>
                    ))}
                    <div className="start flex items-center gap-5">
                        <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-sm uppercase rounded-full">start the project</div>
                        <div className="w-5 h-5 p-4 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
                            <span className="rotate-[45deg]">
                                <FaArrowUpLong />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
