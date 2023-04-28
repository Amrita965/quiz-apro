import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const siteName = "QuizApro";
    const routes = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "Topics",
            path: "/topics",
        },
        {
            id: 3,
            name: "Statistics",
            path: "/statistics",
        },
        {
            id: 4,
            name: "Blog",
            path: "/blog",
        },

    ];

    return (
        <nav className="text-white bg-blue-500 flex justify-between items-center md:px-32 px-8 py-3">
            <h2 className="text-3xl font-medium">{siteName}</h2>
            <ul className={`transition-[right] z-50 ease-in duration-700 md:flex absolute md:static bg-[#070F16] md:bg-inherit h-screen md:h-auto w-8/12 md:w-auto top-0 ${open ? "right-0" : "right-[-100%]"} pt-7 md:pt-0`}>
                <li onClick={() => setOpen(!open)} className="md:hidden absolute top-2 right-2 hover:text-red-500 cursor-pointer">Close <XMarkIcon className="h-6 w-6 inline-block" /></li>
                {
                    routes.map(route => {
                        return (
                            <li key={route.id} className="md:ml-8 ml-0 hover:bg-[#000000] md:hover:bg-inherit">
                                <Link className="p-3 md:p-0 block" to={route.path}>{route.name}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            <Bars3Icon onClick={() => setOpen(!open)} className="md:hidden h-6 w-6 active:border-2" />
        </nav>
    );
};

export default Navbar;