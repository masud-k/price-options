import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const routes = [
        { "id": 1, "path": "/home", "name": "Home" },
        { "id": 2, "path": "/about", "name": "About" },
        { "id": 3, "path": "/services", "name": "Services" },
        { "id": 4, "path": "/products", "name": "Products" },
        { "id": 5, "path": "/contact", "name": "Contact" }
    ];

    return (
        <nav className="bg-stone-500">

            <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineCloseCircle />
                        : <AiOutlineMenu />
                }

            </div>
            <ul className={` md:flex absolute md:static duration-1000
            ${open ? '' : 'hidden'}
            bg-blue-400 p-6 `}>
                {routes.map((route) => (
                    <li key={route.id}>
                        <Link key={route.id} route={route}></Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;