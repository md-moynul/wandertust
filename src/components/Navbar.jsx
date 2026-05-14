'use client'
import Image from "next/image";
import Link from "next/link";
import { Person } from '@gravity-ui/icons';
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
const Navbar = () => {
    const [isHidden, setIsHidden] = useState('false')
    return (
        <div className="flex justify-between py-5 px-10 text-lg font-medium ">
            <ul className=" gap-3 hidden md:flex">
                <li><Link href={'/'} >Home</Link></li>
                <li><Link href={'/destinations'} >Destinations</Link></li>
                {/* <li><Link href={'/my-bookings'} >My Bookings</Link></li>
                <li><Link href={'/admin'} >Admin</Link></li> */}
                <li><Link href={'/Add-destinations'} >Add-destinations</Link></li>
            </ul>
            <Image
                src={'/assets/Wanderlast.png'}
                alt="Wanderlast.png"
                width={160}
                height={50}
                className="w-35 md:w-40 h-full"
            />
            <ul className="flex gap-3">
                <li><Link href={'/profile'} className="flex gap-2 items-center"><Person /> Profile</Link></li>
                <li><Link href={'/login'} >Login</Link></li>
                <li><Link href={'/signup'} >Sign Up</Link></li>
            <div className="md:hidden" onClick={() => setIsHidden(!isHidden)}>
                <CiMenuKebab />

            </div>
            </ul>
            <div className={ `p-2 bg-background/90 md:hidden absolute duration-1000 ${isHidden ? '-top-50 left-2 ' : "top-20 left-2"}`}>
                <ul className=" gap-3">
                    <li><Link href={'/'} >Home</Link></li>
                    <li><Link href={'/destinations'} >Destinations</Link></li>
                    {/* <li><Link href={'/my-bookings'} >My Bookings</Link></li>
                        <li><Link href={'/admin'} >Admin</Link></li> */}
                    <li><Link href={'/Add-destinations'} >Add-destinations</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;