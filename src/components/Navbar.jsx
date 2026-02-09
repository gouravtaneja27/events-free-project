import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const isLightNavbar = location.pathname === "/feed" || location.pathname === "/User";
    const isBlurPage = location.pathname === "/" || location.pathname === "/events";


    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);


    useEffect(() => {
        if (open) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
        } else {
            const scrollY = -parseInt(document.body.style.top || "0");
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            window.scrollTo(0, scrollY);
        }
    }, [open]);


    const getNavLinkClass = () => {
        if (isLightNavbar) return " font-poppins text-[16px] text-black/70 font-semibold hover:text-black transition-all duration-500 ease-in-out";
        if (isBlurPage) {
            return isScrolled
                ? "text-black/70 font-semibold text-[16px] hover:text-black font-poppins transition-all duration-500 ease-in-out"
                : "text-white/80 hover:text-white font-poppins font-semibold text-[16px] transition-all duration-500 ease-in-out";
        }
        return "text-black/70 hover:text-black font-poppins font-semibold text-[16px] transition-all duration-500 ease-in-out";
    };


    const getMobileLinkClass = () => {
        if (isLightNavbar) return "text-black text-[20px] font-semibold transition-colors duration-500 ease-in-out";
        if (isBlurPage) return isScrolled ? "text-black text-[20px] font-semibold transition-colors duration-500 ease-in-out" : "text-white text-[20px] font-semibold transition-colors duration-500 ease-in-out";
        return "text-black text-[20px] font-semibold transition-colors duration-500 ease-in-out";
    };

    return (
        <>

            <div className="h-[90px]" />


            <div
                className={`fixed top-0 left-0 w-full z-9999 px-3 transition-colors duration-500 ease-in-out
          ${isLightNavbar ? "bg-white shadow-md" : isBlurPage && isScrolled ? "bg-white backdrop-blur-md shadow-md" : "bg-transparent"}`}
            >
                <div className="max-w-[1320px] mx-auto">
                    <div className="pt-[17px] pb-[17px] flex items-center justify-between">


                        <NavLink to="/" className="flex items-center max-w-[316px]">
                            <img src={logo} alt="logo" />
                            <h1 className="font-poppins font-bold max-lg:text-[25px] text-[36px] text-[#2C49FE]">
                                Events<span className="text-[#01C8FF]">Free</span>
                            </h1>
                        </NavLink>

                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden z-10001 flex flex-col justify-between h-[26px] w-[35px]"
                        >
                            <span className={`h-[5px] ${isLightNavbar || (isBlurPage && isScrolled) ? "bg-black" : "bg-white"} rounded transition-transform  duration-500 ease-in-out ${open && "rotate-45 translate-y-2.5"}`} />
                            <span className={`h-[5px] ${isLightNavbar || (isBlurPage && isScrolled) ? "bg-black" : "bg-white"} rounded transition-opacity duration-500 ease-in-out ${open && "opacity-0"}`} />
                            <span className={`h-[5px] ${isLightNavbar || (isBlurPage && isScrolled) ? "bg-black" : "bg-white"} rounded transition-transform  duration-500 ease-in-out ${open && "-rotate-45 -translate-y-2.5"}`} />
                        </button>


                        <div className="hidden lg:flex items-center gap-16">
                            <NavLink to="/" className={getNavLinkClass()}>HOME</NavLink>
                            <NavLink to="/events" className={getNavLinkClass()}>EVENTS</NavLink>
                            <NavLink to="/feed" className={getNavLinkClass()}>FEED</NavLink>
                            <NavLink to="/User" className={getNavLinkClass()}>USER NAME</NavLink>

                            <button className="transition-transform  cursor-pointer    active:scale-75 w-[118px] h-[46px] rounded-[23px] bg-[#2C49FE] hover:bg-[#1832db] text-white   duration-500 ease-in-out">
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>


                {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 opacity-90 transition-opacity duration-500 ease-in-out z-40 lg:hidden" />}


                <div
                    className={`fixed top-0 right-0 h-full w-full flex flex-col items-center justify-center gap-6 transition-transform  duration-500 ease-in-out z-50 lg:hidden
            ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            ${isLightNavbar || (isBlurPage && isScrolled) ? "bg-white" : "bg-black"}
          `}
                >
                    <NavLink onClick={() => setOpen(false)} to="/" className={getMobileLinkClass()}>HOME</NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/events" className={getMobileLinkClass()}>EVENTS</NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/feed" className={getMobileLinkClass()}>FEED</NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/User" className={getMobileLinkClass()}>USER NAME</NavLink>

                    <button className={`w-[118px] h-[46px] rounded-[23px]  ease-in-out duration-500 cursor-pointer   transition-transform     active:scale-75
            ${isLightNavbar || (isBlurPage && !isScrolled) ? "bg-[#2C49FE] text-white hover:bg-[#6F82FF]" : "bg-white text-black hover:bg-gray-100"}`}>
                        Log Out
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;