import { useState } from "react";
import Link from "../Link/Link";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {

    const [open, setOpen]=useState(false)
    const routes = [
        { "id": 1, "path": "/home", "name": "Home" },
        { "id": 2, "path": "/about", "name": "About" },
        { "id": 3, "path": "/services", "name": "Services" },
        { "id": 4, "path": "/products", "name": "Products" },
        { "id": 5, "path": "/contact", "name": "Contact" }
    ];

    return (
        <nav>

            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open===true ? 'open' : <MdOutlineMenu/>
                }

            </div>
            <ul className="flex flex-col md:flex-row">
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