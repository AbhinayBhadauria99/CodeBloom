

function Navbar() {
    return (
        <>
            <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
                <div className="logo">
                    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="5" y="40" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="currentColor">CodeBloom</text>
                    </svg>

                </div>
                <div className="links flex gap-10">
                    {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index, array) => (
                        <a key={index} className={`text-lg captialize font-light ${index === array.length - 1 && "ml-32"}`}>{item}</a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Navbar;