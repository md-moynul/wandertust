'use client'
import Image from "next/image";
import Link from "next/link";
import { Person } from '@gravity-ui/icons';
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Spinner } from "@heroui/react";
import { LuLogOut } from "react-icons/lu";
import { redirect } from "next/navigation";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState('false')
    const {
        data: session,
        isPending,
    } = authClient.useSession()
    const user = session?.user;
    // console.log(user);
    const handelLogout = async () => {

        const { data, error } = await authClient.signOut();
        if(data){
            redirect('/login')
        }
        // console.log(data);

    }
    const links = <>
        <li><Link href={'/'} >Home</Link></li>
        <li><Link href={'/destinations'} >Destinations</Link></li>
        <li><Link href={'/my-bookings'} >My Bookings</Link></li>
        {/* <li><Link href={'/admin'} >Admin</Link></li> */}
        <li><Link href={'/Add-destinations'} >Add-destinations</Link></li>
    </>
    return (
        <div className="flex justify-between py-5 px-10 text-lg font-medium ">
            <ul className=" gap-3 hidden md:flex">
                {links}
            </ul>
            <Image
                src={'/assets/Wanderlast.png'}
                alt="Wanderlast.png"
                width={160}
                height={50}
                className="w-35 md:w-40 h-full"
            />
            <ul className="flex items-center gap-3">
                <li className="hidden md:flex"><Link href={'/profile'} className="flex gap-2 items-center"><Person /> Profile</Link></li>
                {isPending ? <Spinner /> :
                    user ?
                        <div className="flex gap-3">
                            <Avatar>
                                <Avatar.Image src={user?.image} alt={user?.name} />
                                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                            </Avatar>
                            <Button onClick={handelLogout} className={'rounded-full py-1'} variant="danger-soft" ><LuLogOut /></Button>
                        </div>
                        : <div className="flex gap-3">
                            <li><Link href={'/login'} >Login</Link></li>
                            <li><Link href={'/signup'} >Sign Up</Link></li>
                        </div>}

                <div className="md:hidden" onClick={() => setIsHidden(!isHidden)}>
                    <CiMenuKebab />

                </div>
            </ul>
            <div className={`p-2 bg-background/90 md:hidden absolute duration-1000 ${isHidden ? '-top-50 right-2 ' : "top-20 right-2"}`}>
                <ul className=" gap-3">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;