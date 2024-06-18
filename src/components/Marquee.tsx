import { motion } from 'framer-motion';

function Marquee() {
    return (
        <>
            <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
                <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-4 overflow-hidden">
                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}  // Increased duration to 20 seconds
                        className="text-[16vw] leading-none uppercase font-semibold mb-[7vw] pt-10"
                    >
                        We are CodeBloom.com
                    </motion.h1>
                </div>
            </div>
        </>
    );
}

export default Marquee;
