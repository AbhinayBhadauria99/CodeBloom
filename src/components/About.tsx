function About() {
    return (
        <>
            <div className="w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
                <h1 className=" font-[Founders_Grotesk] text-[4vw] tracking-tight">
                    CodeBloom is a strategic partner for fast-growing
                    tech businesses that need to raise funds, sell
                    products, explain complex ideas, and hire great people.
                </h1>
                <div className="w-full pt-5 border-t-[2px] mt-14 border-[#a1b562]">
                    <div className="mt-9 w-1/2">
                        <h1 className="text-[5vw]">Our Approach:</h1>
                        <button className="flex uppercase gap-10 items-center px-[4vw] py-[2vw] mt-3 bg-zinc-900 rounded-full text-white">Read More
                            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default About;