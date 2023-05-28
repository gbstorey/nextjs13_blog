import React from 'react';
import Link from "next/link";
import {FaGithub, FaLaptop, FaLinkedin} from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <nav className={"bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10"}>
                <div className={"prose prose-xl mx-auto flex justify-between flex-col sm:flex-row"}>
                    <h1 className={"text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0"}>
                        <Link href={"/"} className={"text-white/90 no-underline hover:text-white"}>
                            Garrett Storey
                        </Link>
                    </h1>
                    <div className={"flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white" +
                        "text-4xl sm:text-5xl"}>
                        <Link href={"https://www.linkedin.com/in/gbstorey/"}
                              className={"text-white/90 no-underline hover:text-white"}>
                            <FaLinkedin />
                        </Link>
                        <Link
                            href={"https://github.com/"}
                            className={"text-white/90 no-underline hover:text-white"}>
                            <FaGithub />
                        </Link>
                        <Link
                            href={"https://www.garrettstorey.com/"}
                            className={"text-white/90 no-underline hover:text-white"}>
                            <FaLaptop />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;