import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    return (
        <>
            <div className="w-full h-screen bg-zinc-900 pt-1">
                <div className="textstructure mt-28 px-20">
                    {["Transform ideas", "into powerful", "solutions."].map((item, index) => {
                        return (
                            <div className="masker">
                                <div className="w-fit flex items-center">
                                    {index === 1 && (<div className="w-[9vw] h-[5vw] bg-red-500 mt-[1vw]"></div>)}
                                    <h1 className="uppercase text-[7.5vw] tracking-tighter leading-[7.5vw] font-['Founders_Grotesk] font-medium">{item} </h1>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="border-t-2 border-zinc-700 mt-10 flex justify-between items-center py-5 px-20">
                    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => <p className="text-md flex font-light tracking-tight leading-none">{item}</p>)}
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
    )
}

export default LandingPage;