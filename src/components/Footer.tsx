
function Footer() {
    return (
        <div className="w-full flex h-screen bg-zinc-900 p-20">
            <div className="w-[50%] h-full flex flex-col justify-between font-[Founders_Grotesk] ">
                <div className="heading h-[50%]">
                    <h1 className="text-[6vw]  uppercase leading-none mb-10">EYE-</h1>
                    <h1 className="text-[6vw] uppercase leading-none mb-10">OPENING</h1>
                </div>
                <h3>CodeBloom</h3>
            </div>
            <div className="w-1/2 ">
                <h1 className="text-[6vw] font-semibold uppercase leading-none mb-10">Websites</h1>
                <div className="dets font-[Founders_Grotesk] mt-3px">
                    <a className="block text-2xl font-light" href="#">Facebook</a>
                    <a className="block text-2xl font-light" href="#">LinkedIn</a>
                    <a className="block text-2xl font-light" href="#">Twitter</a>
                    <a className="block text-2xl font-light" href="#">Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;