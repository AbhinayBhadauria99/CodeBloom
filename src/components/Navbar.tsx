import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="fixed z-[999] bg-zinc-900 bg-opacity-90 w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
                <div className="logo">
                    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="5" y="40" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="currentColor">CodeBloom</text>
                    </svg>
                </div>
                {/* Hamburger menu icon */}
                <div className="block lg:hidden">
                    <button className="text-white focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {/* Navigation links */}
                <div className={`lg:flex lg:flex-col lg:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="links flex flex-col lg:flex-row gap-4 lg:gap-10 lg:ml-32">
                        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
                            <a key={index} className={`text-lg capitalize font-light`}>{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
